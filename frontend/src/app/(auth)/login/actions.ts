'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // For this prototype, we'll map the "Business Identifier" (GSTIN) or phone 
  // to a dummy email/password since Supabase requires email for default auth,
  // or we can just use the provided email if the user switches to the 'Work Email' tab.
  // For now, let's assume the form passes 'email' and 'password' fields.
  
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    redirect('/login?message=Email and password are required')
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    redirect('/login?message=Could not authenticate user')
  }

  revalidatePath('/home', 'layout')
  redirect('/home')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    redirect('/signup?message=Email and password are required')
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    redirect('/signup?message=Could not create user')
  }

  revalidatePath('/onboarding', 'layout')
  redirect('/onboarding')
}
