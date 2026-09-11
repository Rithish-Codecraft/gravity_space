import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import PostActions from "@/components/PostActions";

export default async function Home() {
  const supabase = await createClient();

  // Get current user
  const { data: { user } } = await supabase.auth.getUser();
  
  let userName = "User";
  let companyName = "Your Business";
  
  if (user) {
    const { data: profile } = await supabase.from('profiles').select('name').eq('id', user.id).single();
    if (profile?.name) userName = profile.name.split(' ')[0];

    const { data: member } = await supabase.from('business_members')
      .select('businesses(name)')
      .eq('user_id', user.id)
      .limit(1)
      .single();
    
    if (member?.businesses?.name) {
      companyName = member.businesses.name;
    }
  }

  // Fetch Feed Posts
  const { data: posts } = await supabase
    .from('posts')
    .select(`
      *,
      businesses ( id, name, logo_url, verification_status, sector ),
      post_likes ( profile_id ),
      post_comments ( count )
    `)
    .order('created_at', { ascending: false });

  return (
    <div className="flex-1 flex flex-col gap-[var(--spacing-element-stack-md)] py-[var(--spacing-element-stack-sm)] pb-20">
      {/* Greeting */}
      <section className="px-[var(--spacing-gutter-mobile)] pt-1">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-[var(--font-headline-lg-mobile)] text-[24px] leading-[32px] font-bold tracking-tight text-[var(--color-ink)]">
              Good morning, {userName} 👋
            </h1>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] inline-block animate-pulse"></span>
              <span className="font-[var(--font-label-caps)] text-[11px] text-[var(--color-accent)] font-semibold">
                Network Active
              </span>
            </div>
          </div>
        </div>

        {/* Mini Profile Status */}
        <div className="mt-2.5 bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] p-3 shadow-sm">
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
              <span className="font-[var(--font-title-md)] text-[13px] text-[var(--color-ink)] font-semibold">
                {companyName}
              </span>
            </div>
            <Link href="/profile" className="font-[var(--font-label-caps)] text-[11px] text-[var(--color-accent)] font-semibold hover:underline flex items-center">
              View Profile
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Intent Composer Bar */}
      <section className="px-[var(--spacing-gutter-mobile)] mt-2">
        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] p-3 shadow-sm">
          <div className="flex items-center gap-2.5 pb-2.5 border-b border-[var(--color-card-border)]">
            <div className="w-8 h-8 shrink-0 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-[var(--font-label-caps)] text-xs font-bold">
              {companyName.substring(0, 2).toUpperCase()}
            </div>
            <Link href="/post" className="w-full bg-[var(--color-canvas)] rounded-lg text-[13px] font-[var(--font-body-sm)] text-[var(--color-secondary)] border border-[var(--color-card-border)] px-3 py-2 cursor-pointer hover:border-[var(--color-accent)] transition-colors">
              Share an update or requirement...
            </Link>
          </div>
          <div className="flex items-center pt-2.5 gap-2">
            <Link href="/post?type=GENERAL" className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-card-border)] text-[var(--color-ink)] text-[12px] hover:bg-[var(--color-card-border)]/40 transition-colors">
              <span className="material-symbols-outlined text-[var(--color-secondary)] text-[16px]">edit_document</span>
              Update
            </Link>
            <Link href="/post?type=REQUIREMENT" className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-card-border)] text-[var(--color-ink)] text-[12px] hover:bg-[var(--color-card-border)]/40 transition-colors">
              <span className="material-symbols-outlined text-[var(--color-secondary)] text-[16px]">priority_high</span>
              Requirement
            </Link>
          </div>
        </div>
      </section>

      {/* Feed Segmented Filter Control */}
      <section className="px-[var(--spacing-gutter-mobile)] pt-1">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
          <button className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-white font-[var(--font-title-md)] text-[12px] shrink-0 font-semibold shadow-sm">Latest Feed</button>
        </div>
      </section>

      {/* Main Feed Stream */}
      <section className="px-[var(--spacing-gutter-mobile)] space-y-4">
        {posts && posts.length > 0 ? posts.map((post) => {
          const likesCount = post.post_likes?.length || 0;
          const commentsCount = post.post_comments?.[0]?.count || 0;
          const hasLiked = user ? post.post_likes?.some((like: any) => like.profile_id === user.id) : false;

          return (
          <article key={post.id} className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] shadow-sm overflow-hidden">
            <div className="p-3.5 pb-2.5 flex items-start justify-between">
              <Link href={`/businesses/${post.business_id}`} className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center font-[var(--font-label-caps)] text-sm font-bold overflow-hidden">
                  {post.businesses?.logo_url ? (
                     <img src={post.businesses.logo_url} className="w-full h-full object-cover" />
                  ) : (
                     post.businesses?.name?.substring(0, 2).toUpperCase() || 'B'
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 group-hover:underline">
                    <span className="font-[var(--font-title-md)] text-[14px] text-[var(--color-ink)] font-bold">{post.businesses?.name}</span>
                    {post.businesses?.verification_status === 'VERIFIED' && (
                      <span className="material-symbols-outlined text-[var(--color-accent)] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-[var(--color-ink-muted)] font-[var(--font-label-caps)] text-[10px]">
                    <span>{post.businesses?.sector || 'Business'}</span>
                    <span>•</span>
                    <span>{formatDistanceToNow(new Date(post.created_at))} ago</span>
                  </div>
                </div>
              </Link>
            </div>
            
            {post.post_type === 'REQUIREMENT' && (
              <div className="mx-3.5 mb-2 px-2 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold tracking-wider uppercase rounded inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">notification_important</span> Requirement
              </div>
            )}

            <div className="px-3.5 pb-2.5">
              <p className="font-[var(--font-body-md)] text-[14px] text-[var(--color-ink)] whitespace-pre-wrap leading-relaxed">
                {post.content}
              </p>
            </div>
            
            {/* Action Bar */}
            <div className="p-3.5 pt-3 border-t border-[var(--color-card-border)] flex items-center justify-between text-[var(--color-ink-muted)] font-[var(--font-mono-metric)] text-[13px]">
              <PostActions 
                postId={post.id} 
                initialLikes={likesCount} 
                initialComments={commentsCount} 
                hasLikedInitially={hasLiked} 
              />
            </div>
          </article>
        )}) : (
          <div className="p-6 text-center text-[var(--color-secondary)]">
            <p>No posts in your network yet.</p>
          </div>
        )}
      </section>
      
      <div className="h-6"></div>
    </div>
  );
}
