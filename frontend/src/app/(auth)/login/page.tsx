import Link from 'next/link'
import { login } from './actions'

export default function LoginPage({ searchParams }: { searchParams: { message: string } }) {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col bg-[#faf8ff] text-[#131b2e]">
      <header className="bg-white flex items-center justify-between px-4 h-14 w-full sticky top-0 z-30 shadow-sm border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#091e42] flex items-center justify-center text-white active:scale-[0.98] transition-transform">
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-semibold tracking-tight text-[#000619]">Nexora</span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold bg-[#eaedff] text-[#000619] border border-[#d2d9f4] uppercase tracking-wider">B2B</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#f2f3ff] hover:bg-[#eaedff] transition-colors text-sm font-medium text-[#44474e] border border-[#c5c6cf]/40">
            <span className="material-symbols-outlined text-[16px] text-[#000619]">language</span>
            <span className="font-medium text-[#000619]">EN</span>
            <span className="material-symbols-outlined text-[14px]">expand_more</span>
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[#44474e] hover:bg-[#f2f3ff] transition-colors">
            <span className="material-symbols-outlined text-[20px]">help_outline</span>
          </button>
        </div>
      </header>

      <div className="flex-1 px-4 pt-5 flex flex-col gap-5">
        <section className="flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-1.5 self-start px-2 py-0.5 rounded-full bg-[#6cf8bb]/20 border border-[#006c49]/30 text-[#006c49]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006c49] animate-pulse"></span>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider">Institutional Grade Enterprise Nexus</span>
          </div>
          <h1 className="text-2xl text-[#000619] tracking-tight font-semibold pt-1">Welcome to Nexora</h1>
          <p className="text-sm text-[#44474e] leading-snug">
            The AI-powered opportunity network for verified businesses, entrepreneurs, and manufacturers.
          </p>
        </section>

        {searchParams?.message && (
          <p className="p-3 bg-red-100 text-red-800 rounded-lg text-sm font-medium border border-red-200">
            {searchParams.message}
          </p>
        )}

        <nav className="flex p-1 bg-[#eaedff] rounded-xl border border-[#d2d9f4] gap-1">
          <button className="flex-1 py-2 px-1 text-center rounded-lg bg-white text-[#000619] font-medium text-sm shadow-sm flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-[#006c49]">mail</span>
            <span>Work Email</span>
          </button>
        </nav>

        <div className="bg-white rounded-xl border border-[#c5c6cf]/60 p-6 shadow-sm flex flex-col gap-3">
          <form className="flex flex-col gap-4" action={login}>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#44474e] uppercase tracking-wider font-semibold" htmlFor="email">Work Email</label>
              <div className="flex rounded-lg border border-[#c5c6cf] focus-within:border-[#091e42] focus-within:ring-2 focus-within:ring-[#091e42]/10 bg-white overflow-hidden transition-all h-11">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="director@abcelectronics.com"
                  className="flex-1 px-3 py-2 text-[#000619] text-sm border-0 focus:ring-0 focus:outline-none placeholder:text-[#75777f]/70 bg-transparent"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-[#44474e] uppercase tracking-wider font-semibold" htmlFor="password">Password / OTP</label>
              <div className="flex rounded-lg border border-[#c5c6cf] focus-within:border-[#091e42] focus-within:ring-2 focus-within:ring-[#091e42]/10 bg-white overflow-hidden transition-all h-11">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="flex-1 px-3 py-2 text-[#000619] text-sm border-0 focus:ring-0 focus:outline-none placeholder:text-[#75777f]/70 bg-transparent"
                />
              </div>
            </div>

            <p className="text-[12px] text-[#44474e] leading-relaxed bg-[#f2f3ff] p-2.5 rounded-lg border border-[#d2d9f4]">
              Only verified business directors, partners, or authorized representatives can access Nexora's opportunity network.
            </p>

            <button type="submit" className="w-full mt-1 h-11 rounded-lg bg-[#091e42] hover:bg-[#000619] text-white font-semibold text-base flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-sm">
              <span>Secure Login</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>

          <div className="pt-2 border-t border-[#eaedff] flex items-start gap-2 text-[#44474e]">
            <span className="material-symbols-outlined text-[16px] text-[#006c49] mt-0.5">lock</span>
            <p className="text-[12px] leading-relaxed text-[#44474e]/90">
              Bank-grade 256-bit encryption. We verify businesses via GSTIN, Udyam MSME, or MCA corporate CIN for institutional safety.
            </p>
          </div>
        </div>

        <div className="text-center pt-1 pb-6">
          <p className="text-sm text-[#44474e]">
            New to Nexora?{' '}
            <Link href="/signup" className="font-semibold text-[#000619] underline underline-offset-4 decoration-[#091e42] decoration-2 hover:text-[#006c49] transition-colors">
              Register your business
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
