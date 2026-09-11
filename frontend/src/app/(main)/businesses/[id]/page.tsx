import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import BusinessActions from '@/components/BusinessActions'

export default async function BusinessProfilePage({ params }: { params: { id: string } }) {
  const supabase = await createClient()

  // Fetch Business
  const { data: business, error: bizError } = await supabase
    .from('businesses')
    .select('*')
    .eq('id', params.id)
    .single()

  if (bizError || !business) {
    notFound()
  }

  // Fetch Capabilities
  const { data: capabilities } = await supabase
    .from('capabilities')
    .select('*')
    .eq('business_id', business.id)

  // Fetch Requirements
  const { data: requirements } = await supabase
    .from('requirements')
    .select('*')
    .eq('business_id', business.id)

  // Fetch Products
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .eq('business_id', business.id)

  // Fetch Services
  const { data: services } = await supabase
    .from('services')
    .select('*')
    .eq('business_id', business.id)

  // Fetch Members
  const { data: members } = await supabase
    .from('business_members')
    .select('*, profiles(name, avatar_url, bio)')
    .eq('business_id', business.id)

  // Auth User state
  const { data: { user } } = await supabase.auth.getUser()
  let currentUserBusinessId = null
  let isFollowing = false
  let connectionStatus: 'NONE' | 'PENDING' | 'ACCEPTED' = 'NONE'

  if (user) {
    const { data: currentMember } = await supabase
      .from('business_members')
      .select('business_id')
      .eq('user_id', user.id)
      .limit(1)
      .single()
    
    if (currentMember?.business_id) {
      currentUserBusinessId = currentMember.business_id

      // Follow state
      const { data: followData } = await supabase
        .from('follows')
        .select('id')
        .eq('follower_profile_id', user.id)
        .eq('following_business_id', business.id)
        .single()
      
      if (followData) isFollowing = true

      // Connection state
      const { data: connection1 } = await supabase
        .from('connections')
        .select('status')
        .eq('business_a_id', currentUserBusinessId)
        .eq('business_b_id', business.id)
        .single()
        
      const { data: connection2 } = await supabase
        .from('connections')
        .select('status')
        .eq('business_a_id', business.id)
        .eq('business_b_id', currentUserBusinessId)
        .single()

      const conn = connection1 || connection2
      if (conn) {
        connectionStatus = conn.status as 'NONE' | 'PENDING' | 'ACCEPTED'
      }
    }
  }

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar bg-[#faf8ff] text-[#131b2e] pb-20">
      {/* Header / Cover */}
      <div className="relative h-32 bg-[#eaedff] w-full">
        {business.cover_url && (
          <img src={business.cover_url} alt="Cover" className="w-full h-full object-cover" />
        )}
        <div className="absolute top-4 left-4 z-10">
          <Link href="/home" className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          </Link>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-4 relative mt-[-32px]">
        <div className="w-20 h-20 rounded-2xl bg-white border-4 border-[#faf8ff] shadow-sm flex items-center justify-center overflow-hidden mb-3">
          {business.logo_url ? (
            <img src={business.logo_url} alt={business.name} className="w-full h-full object-cover" />
          ) : (
            <span className="material-symbols-outlined text-[32px] text-[#091e42]">storefront</span>
          )}
        </div>
        
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#000619] tracking-tight">{business.name}</h1>
            <p className="text-[#44474e] text-[13px]">{business.sector} • {business.city || 'India'}</p>
          </div>
          {business.verification_status === 'VERIFIED' && (
            <div className="px-2 py-1 bg-[#6cf8bb]/20 border border-[#006c49]/30 rounded text-[#006c49] flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">Verified</span>
            </div>
          )}
        </div>

        {business.description && (
          <p className="mt-4 text-sm text-[#44474e] leading-relaxed">
            {business.description}
          </p>
        )}

        {currentUserBusinessId !== business.id && (
          <BusinessActions 
            businessId={business.id} 
            initialIsFollowing={isFollowing} 
            initialConnectionStatus={connectionStatus} 
          />
        )}
      </div>

      {/* Offerings: Products & Services */}
      {(products?.length || services?.length) ? (
        <div className="mt-6 px-4">
          <h2 className="text-lg font-bold text-[#000619] mb-3">Offerings</h2>
          <div className="flex flex-col gap-3">
            {products?.map(p => (
              <div key={p.id} className="p-3 bg-white border border-[#c5c6cf] rounded-xl flex items-start gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#eaedff] flex items-center justify-center text-[#091e42] flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#131b2e]">{p.name}</h3>
                  {p.description && <p className="text-[12px] text-[#44474e] line-clamp-2">{p.description}</p>}
                </div>
              </div>
            ))}
            {services?.map(s => (
              <div key={s.id} className="p-3 bg-white border border-[#c5c6cf] rounded-xl flex items-start gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#eaedff] flex items-center justify-center text-[#091e42] flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">handyman</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#131b2e]">{s.name}</h3>
                  {s.description && <p className="text-[12px] text-[#44474e] line-clamp-2">{s.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Capabilities & Requirements */}
      <div className="mt-6 px-4 grid grid-cols-2 gap-3">
        <div className="bg-white border border-[#c5c6cf] rounded-xl p-4 shadow-sm">
          <h2 className="text-[13px] font-bold text-[#006c49] uppercase tracking-wider mb-3">Capabilities</h2>
          {capabilities?.length ? (
            <ul className="flex flex-col gap-2">
              {capabilities.map(c => (
                <li key={c.id} className="flex items-start gap-1.5 text-[13px] text-[#131b2e] font-medium">
                  <span className="material-symbols-outlined text-[16px] text-[#006c49]">check_circle</span>
                  {c.capability_name}
                </li>
              ))}
            </ul>
          ) : <p className="text-[12px] text-[#75777f]">No capabilities listed.</p>}
        </div>
        
        <div className="bg-white border border-[#c5c6cf] rounded-xl p-4 shadow-sm">
          <h2 className="text-[13px] font-bold text-[#93000a] uppercase tracking-wider mb-3">Requirements</h2>
          {requirements?.length ? (
            <ul className="flex flex-col gap-2">
              {requirements.map(r => (
                <li key={r.id} className="flex items-start gap-1.5 text-[13px] text-[#131b2e] font-medium">
                  <span className="material-symbols-outlined text-[16px] text-[#93000a]">priority_high</span>
                  {r.requirement_name}
                </li>
              ))}
            </ul>
          ) : <p className="text-[12px] text-[#75777f]">No requirements listed.</p>}
        </div>
      </div>

      {/* Team Members */}
      {members?.length ? (
        <div className="mt-6 px-4">
          <h2 className="text-lg font-bold text-[#000619] mb-3">Key People</h2>
          <div className="flex flex-col gap-3">
            {members.map(m => (
              <div key={m.id} className="flex items-center justify-between p-3 bg-white border border-[#eaedff] rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f2f3ff] flex items-center justify-center text-[#44474e]">
                    {m.profiles?.avatar_url ? (
                      <img src={m.profiles.avatar_url} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <span className="material-symbols-outlined text-[20px]">person</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold text-[#131b2e]">{m.profiles?.name || 'Unknown'}</h3>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7586b0]">{m.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      
    </div>
  )
}
