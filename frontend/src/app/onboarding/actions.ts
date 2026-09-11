'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function completeOnboarding(data: any) {
  const supabase = await createClient()

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    redirect('/login?message=Unauthorized')
  }

  // 1. Create Personal Profile (profiles table: id, name, bio)
  const { error: profileError } = await supabase
    .from('profiles')
    .insert({
      id: user.id,
      name: data.fullName || 'New User',
      bio: data.personalRole || 'Entrepreneur', // mapping role to bio since primary_role isn't in schema yet
    })

  // 2. Create Business (businesses table: slug, name, legal_name, business_type, sector, city, created_by)
  const slug = (data.businessName || 'new-business').toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Math.floor(Math.random() * 1000)
  
  const { data: businessData, error: bizError } = await supabase
    .from('businesses')
    .insert({
      slug: slug,
      name: data.businessName || 'New Business',
      legal_name: data.businessName,
      business_type: data.businessType || 'PROPRIETORSHIP',
      sector: data.industry || 'Manufacturing',
      city: data.location,
      created_by: user.id,
      verification_status: 'UNVERIFIED'
    })
    .select()
    .single()

  if (businessData) {
    // 3. Link User to Business (business_members table: business_id, user_id, role)
    await supabase
      .from('business_members')
      .insert({
        business_id: businessData.id,
        user_id: user.id,
        role: 'OWNER'
      })
    
    // 4. Add Products / Offerings (capabilities table: capability_name)
    if (data.offerings && data.offerings.length > 0) {
       await supabase.from('capabilities').insert(
         data.offerings.map((offering: string) => ({
           business_id: businessData.id,
           capability_name: offering,
           capacity_metric: 'TBD'
         }))
       )
    }

    // 5. Add Requirements (requirements table: requirement_name, urgency)
    if (data.requirements && data.requirements.length > 0) {
      await supabase.from('requirements').insert(
        data.requirements.map((req: string) => ({
          business_id: businessData.id,
          requirement_name: req,
          urgency: 'HIGH'
        }))
      )
    }
  }

  redirect('/home')
}
