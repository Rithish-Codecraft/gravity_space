import Link from 'next/link'
import { signup } from '../login/actions'

export default function SignupPage({ searchParams }: { searchParams: { message: string } }) {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col bg-[#faf8ff] text-[#131b2e]">
      <header className="bg-white flex items-center justify-between px-4 h-14 w-full sticky top-0 z-30 shadow-sm border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#091e42] flex items-center justify-center text-white active:scale-[0.98] transition-transform">
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-semibold tracking-tight text-[#000619]">Nexora</span>
          </div>
        </div>
      </header>

      <div className="flex-1 px-4 pt-5 flex flex-col gap-5">
        <section className="flex flex-col gap-1.5">
          <h1 className="text-2xl text-[#000619] tracking-tight font-semibold pt-1">Create Account</h1>
          <p className="text-sm text-[#44474e] leading-snug">
            Join the B2B network.
          </p>
        </section>

        {searchParams?.message && (
          <p className="p-3 bg-red-100 text-red-800 rounded-lg text-sm font-medium border border-red-200">
            {searchParams.message}
          </p>
        )}

        <div className="bg-white rounded-xl border border-[#c5c6cf]/60 p-6 shadow-sm flex flex-col gap-3">
          <form className="flex flex-col gap-4" action={signup}>
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
              <label className="font-mono text-[11px] text-[#44474e] uppercase tracking-wider font-semibold" htmlFor="password">Create Password</label>
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

            <button type="submit" className="w-full mt-1 h-11 rounded-lg bg-[#006c49] hover:bg-[#004e33] text-white font-semibold text-base flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-sm">
              <span>Create Account</span>
            </button>
          </form>
        </div>

        <div className="text-center pt-1 pb-6">
          <p className="text-sm text-[#44474e]">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-[#000619] underline underline-offset-4 decoration-[#091e42] decoration-2 hover:text-[#006c49] transition-colors">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
