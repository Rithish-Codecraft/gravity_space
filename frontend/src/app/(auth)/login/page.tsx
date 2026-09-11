'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [bizType, setBizType] = useState('GSTIN')
  const [bizId, setBizId] = useState('33AABCU9603R1ZM')
  const [helperLeft, setHelperLeft] = useState('GSTN & MCA Verified Entity')
  const [helperRight, setHelperRight] = useState('Active Karnataka GST Jurisdiction')
  const [phone, setPhone] = useState('98765 43210')
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  
  const router = useRouter()

  const handleBizSelect = (type: string, code: string, left: string, right: string) => {
    setBizType(type)
    setBizId(code)
    setHelperLeft(left)
    setHelperRight(right)
    setIsDropdownOpen(false)
  }

  const handleRequestOtp = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsOtpModalOpen(true)
    }, 600)
  }

  const handleVerifyOtp = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsVerifying(true)
    setTimeout(() => {
      // Temporary mockup redirect. Update this to use proper Next.js auth later
      router.push('/home')
    }, 800)
  }

  return (
    <div className="bg-background text-on-surface min-h-screen antialiased flex justify-center selection:bg-primary-container selection:text-white">
      <main className="w-full max-w-[420px] bg-background min-h-screen flex flex-col relative pb-8 shadow-[0_0_50px_rgba(9,30,66,0.06)]">
        <header className="bg-surface-container-lowest flex items-center justify-between px-gutter-mobile h-14 w-full sticky top-0 z-30 shadow-[0_1px_3px_0_rgba(9,30,66,0.04)]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-white active:scale-[0.98] transition-transform">
              <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-primary">Nexora</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono-metric font-semibold bg-surface-container text-primary border border-surface-dim uppercase tracking-wider">B2B</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-2 py-1 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors text-body-sm font-body-sm text-on-surface-variant border border-outline-variant/40" type="button">
              <span className="material-symbols-outlined text-[16px] text-primary">language</span>
              <span className="font-medium text-primary">EN</span>
              <span className="material-symbols-outlined text-[14px]">expand_more</span>
            </button>
            <button aria-label="Support & Grievance desk" className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">help_outline</span>
            </button>
          </div>
        </header>

        <div className="flex-1 px-grid-margin-mobile pt-element-stack-lg flex flex-col gap-element-stack-lg">
          <section className="flex flex-col gap-1.5">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight font-semibold pt-1">
              Welcome to Nexora
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-snug">
              The AI-powered opportunity network for verified businesses, entrepreneurs, and manufacturers.
            </p>
          </section>

          <nav aria-label="Login Methods" className="flex p-1 bg-surface-container rounded-xl border border-surface-dim gap-1">
            <button className="flex-1 py-2 px-1 text-center rounded-lg bg-surface-container-lowest text-primary font-medium text-body-sm shadow-[0_1px_3px_0_rgba(9,30,66,0.06)] flex items-center justify-center gap-1" type="button">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
              <span>Certificate ID</span>
            </button>
            <button className="flex-1 py-2 px-1 text-center rounded-lg text-on-surface-variant hover:text-primary font-normal text-body-sm transition-colors flex items-center justify-center gap-1" type="button">
              <span className="material-symbols-outlined text-[16px]">smartphone</span>
              <span>Direct OTP</span>
            </button>
            <button className="flex-1 py-2 px-1 text-center rounded-lg text-on-surface-variant hover:text-primary font-normal text-body-sm transition-colors flex items-center justify-center gap-1" type="button">
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>Work Email</span>
            </button>
          </nav>

          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-card-padding-default shadow-[0_4px_12px_-2px_rgba(9,30,66,0.04)] flex flex-col gap-element-stack-md">
            <form className="flex flex-col gap-4" onSubmit={handleRequestOtp}>
              <div className="flex flex-col gap-1.5 relative">
                <div className="flex justify-between items-center">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider" htmlFor="biz-id">Registered Business Identifier</label>
                  <span className="font-label-caps text-label-caps text-secondary font-semibold flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px]">verified</span>
                    Live Registry
                  </span>
                </div>
                
                <div className="flex rounded-lg border border-outline-variant focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20 bg-white transition-all h-11 relative">
                  <button 
                    aria-expanded={isDropdownOpen} 
                    aria-haspopup="listbox" 
                    className="flex items-center gap-1 px-2.5 bg-surface-container-low border-r border-outline-variant/60 text-primary font-mono-metric text-[12px] font-semibold hover:bg-surface-container transition-colors rounded-l-[7px]" 
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>{bizType}</span>
                    <span className={`material-symbols-outlined text-[14px] text-on-surface-variant transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>arrow_drop_down</span>
                  </button>
                  <input 
                    className="flex-1 px-3 py-2 text-primary font-mono-metric text-mono-metric border-0 focus:ring-0 focus:outline-none placeholder:text-outline/70 bg-transparent uppercase" 
                    id="biz-id" 
                    placeholder={bizId} 
                    required 
                    type="text" 
                    value={bizId}
                    onChange={(e) => setBizId(e.target.value)}
                  />
                  <div className="px-2.5 flex items-center gap-1 text-secondary">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute top-[calc(100%+6px)] left-0 w-72 max-w-[calc(100vw-48px)] bg-white rounded-xl shadow-[0_12px_32px_rgba(9,30,66,0.18)] border border-outline-variant/80 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                      <div className="px-3 py-1.5 border-b border-surface-dim/60">
                        <span className="font-label-caps text-[10px] text-outline uppercase tracking-wider font-semibold">Select Business Identifier</span>
                      </div>
                      
                      <button 
                        className="w-full text-left px-3 py-2.5 hover:bg-surface-container-low transition-colors flex items-start gap-2.5 group" 
                        type="button"
                        onClick={() => handleBizSelect('GSTIN', '33AABCU9603R1ZM', 'GSTN & MCA Verified Entity', 'Active Karnataka GST Jurisdiction')}
                      >
                        <div className="w-7 h-7 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mt-0.5 flex-shrink-0 group-hover:bg-secondary/20">
                          <span className="material-symbols-outlined text-[16px]">receipt_long</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-mono-metric text-[13px] font-semibold text-primary">GSTIN</span>
                            <span className="text-[10px] font-mono-metric font-medium px-1.5 py-0.2 rounded bg-secondary-container/30 text-secondary border border-secondary/20">Active</span>
                          </div>
                          <p className="text-[11px] text-on-surface-variant font-body-sm truncate pt-0.5">Goods & Services Tax Identification Number</p>
                          <p className="text-[10px] font-mono-metric text-outline truncate">e.g. 33AABCU9603R1ZM</p>
                        </div>
                      </button>

                      <button 
                        className="w-full text-left px-3 py-2.5 hover:bg-surface-container-low transition-colors flex items-start gap-2.5 group border-t border-surface-dim/50" 
                        type="button"
                        onClick={() => handleBizSelect('CIN / ROC', 'U72900DL2023PTC89104', 'MCA Reg. Direct API', 'RoC Delhi Verified')}
                      >
                        <div className="w-7 h-7 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container mt-0.5 flex-shrink-0 group-hover:bg-primary-container/20">
                          <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-mono-metric text-[13px] font-semibold text-primary">CIN / ROC</span>
                            <span className="text-[10px] font-mono-metric font-medium px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant border border-surface-dim">MCA Live</span>
                          </div>
                          <p className="text-[11px] text-on-surface-variant font-body-sm truncate pt-0.5">Corporate Identification Number</p>
                          <p className="text-[10px] font-mono-metric text-outline truncate">e.g. U72900DL2023PTC89104</p>
                        </div>
                      </button>

                      <button 
                        className="w-full text-left px-3 py-2.5 hover:bg-surface-container-low transition-colors flex items-start gap-2.5 group border-t border-surface-dim/50" 
                        type="button"
                        onClick={() => handleBizSelect('Udyam No.', 'UDYAM-KR-03-0019284', 'Ministry of MSME Validated', 'Micro Enterprise Status')}
                      >
                        <div className="w-7 h-7 rounded-lg bg-tertiary-fixed-dim/20 flex items-center justify-center text-on-tertiary-container mt-0.5 flex-shrink-0 group-hover:bg-tertiary-fixed-dim/30">
                          <span className="material-symbols-outlined text-[16px]">domain_verification</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-mono-metric text-[13px] font-semibold text-primary">Udyam No.</span>
                            <span className="text-[10px] font-mono-metric font-medium px-1.5 py-0.2 rounded bg-tertiary-fixed/40 text-on-tertiary-container border border-tertiary-fixed-dim/40">MSME</span>
                          </div>
                          <p className="text-[11px] text-on-surface-variant font-body-sm truncate pt-0.5">MSME Registration Number</p>
                          <p className="text-[10px] font-mono-metric text-outline truncate">e.g. UDYAM-KR-03-0019284</p>
                        </div>
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between px-0.5 text-[11px] font-mono-metric text-outline">
                  <span className="flex items-center gap-1 text-secondary font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {helperLeft}
                  </span>
                  <span className="text-on-surface-variant/80 font-medium truncate max-w-[160px]">{helperRight}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider" htmlFor="biz-phone">Authorized Signatory Mobile</label>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary-container/30 text-secondary border border-secondary/30 font-mono-metric text-[10px] font-semibold tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                    <span className="material-symbols-outlined text-[12px] text-secondary">lock</span>
                    Govt-Linked OTP
                  </span>
                </div>
                <div className="flex rounded-lg border border-outline-variant focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/20 bg-white overflow-hidden transition-all h-11">
                  <button className="flex items-center gap-1.5 px-2.5 bg-surface-container-low border-r border-outline-variant/60 text-on-surface font-mono-metric text-body-sm hover:bg-surface-container transition-colors" type="button">
                    <span aria-hidden="true" className="inline-block w-4 text-[13px] leading-none">🇮🇳</span>
                    <span className="font-medium text-primary">+91</span>
                    <span className="material-symbols-outlined text-[14px] text-on-surface-variant">arrow_drop_down</span>
                  </button>
                  <input 
                    className="flex-1 px-3 py-2 text-primary font-mono-metric text-mono-metric border-0 focus:ring-0 focus:outline-none placeholder:text-outline/70 bg-transparent" 
                    id="biz-phone" 
                    inputMode="numeric" 
                    placeholder="98765 43210" 
                    required 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <button className="px-2.5 text-on-surface-variant hover:text-primary transition-colors flex items-center" title="Clear field" type="button" onClick={() => setPhone('')}>
                    <span className="material-symbols-outlined text-[18px]">cancel</span>
                  </button>
                </div>
              </div>

              <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed bg-surface-container-low p-2.5 rounded-lg border border-surface-dim">
                Only verified business directors, partners, or authorized representatives can access Nexora's opportunity network.
              </p>

              <div className="flex items-center justify-between pt-0.5">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input defaultChecked className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary/20" type="checkbox" />
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Remember corporate device</span>
                </label>
                <a className="font-body-sm text-body-sm text-primary font-semibold hover:underline" href="#">Verify via DSC</a>
              </div>
              
              <button 
                className="w-full mt-1 h-11 rounded-lg bg-secondary hover:bg-on-secondary-container text-white font-title-md text-title-md flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-sm font-semibold tracking-tight cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed" 
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-1"></span>
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <span>Request Secure Enterprise OTP</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-[1px] bg-outline-variant/60"></div>
            <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider text-[10px]">Instant 1-Tap Government & Corporate KYC</span>
            <div className="flex-1 h-[1px] bg-outline-variant/60"></div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button className="h-11 px-3 rounded-lg border border-secondary/40 bg-surface-container-lowest hover:bg-secondary-container/10 transition-colors flex items-center justify-center gap-1.5 shadow-xs active:scale-[0.98]" type="button">
              <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
              <span className="font-body-md text-body-md font-medium text-secondary">DigiLocker Business</span>
            </button>
            <button className="h-11 px-3 rounded-lg border border-outline-variant/80 bg-surface-container-lowest hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2 shadow-xs active:scale-[0.98]" type="button">
              <span className="material-symbols-outlined text-[18px] text-primary">corporate_fare</span>
              <span className="font-body-md text-body-md font-medium text-primary">Corporate SSO</span>
            </button>
          </div>

          <div className="text-center pt-1">
            <p className="font-body-md text-body-md text-on-surface-variant">
              New to Nexora?{' '}
              <Link className="font-semibold text-primary underline underline-offset-4 decoration-secondary decoration-2 hover:text-secondary transition-colors" href="/signup">
                Register your business
              </Link>
            </p>
          </div>
        </div>

        <footer className="mt-auto px-grid-margin-mobile pt-8 flex flex-col items-center gap-2 border-t border-surface-dim/60">
          <div className="flex items-center gap-3 text-on-surface-variant font-label-caps text-[11px]">
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
            <span className="text-outline-variant">•</span>
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <span className="text-outline-variant">•</span>
            <a className="hover:text-primary transition-colors" href="#">Grievance Desk</a>
          </div>
        </footer>

        {isOtpModalOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-primary/40 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="w-full max-w-[420px] bg-surface-container-lowest rounded-t-2xl sm:rounded-2xl p-card-padding-default border border-outline-variant/60 shadow-[0_12px_32px_rgba(9,30,66,0.22)] flex flex-col gap-4 animate-in slide-in-from-bottom-4 duration-200">
              <div className="flex items-center justify-between pb-1 border-b border-surface-dim/60">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-[16px] font-semibold text-primary leading-snug">Enterprise OTP Verification</h3>
                    <p className="font-mono-metric text-[11px] text-secondary font-medium">Government Linked Gateway</p>
                  </div>
                </div>
                <button type="button" onClick={() => setIsOtpModalOpen(false)} className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
              
              <div className="flex flex-col gap-1">
                <p className="text-body-sm text-on-surface-variant">Enter the 6-digit corporate passcode dispatched to authorized signatory:</p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container-low border border-surface-dim self-start mt-0.5">
                  <span className="material-symbols-outlined text-[14px] text-secondary">call</span>
                  <span className="font-mono-metric text-[12px] font-semibold text-primary">+91 {phone}</span>
                  <span className="text-[10px] text-secondary font-mono-metric font-medium bg-secondary-container/30 px-1.5 py-0.2 rounded">Live</span>
                </div>
              </div>
              
              <div className="grid grid-cols-6 gap-2 my-1">
                {[1, 2, 3, 4, 5, 6].map((digit) => (
                  <input 
                    key={digit}
                    id={`otp-digit-${digit}`} 
                    type="text" 
                    maxLength={1} 
                    className="w-full h-12 text-center font-mono-metric text-headline-sm font-semibold text-primary bg-surface-container-low border border-outline-variant rounded-lg focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none"
                    onChange={(e) => {
                      if(e.target.value.length === 1 && digit < 6) {
                        document.getElementById(`otp-digit-${digit + 1}`)?.focus()
                      }
                    }}
                  />
                ))}
              </div>
              
              <div className="flex items-center justify-between text-body-sm">
                <span className="text-on-surface-variant font-mono-metric text-[12px] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span> Resend in <span className="font-semibold text-primary">00:45</span>
                </span>
                <button type="button" className="text-secondary font-medium hover:underline text-[12px]">Resend OTP</button>
              </div>
              
              <button 
                onClick={handleVerifyOtp}
                disabled={isVerifying}
                className="w-full h-11 rounded-lg bg-secondary hover:bg-on-secondary-container text-white font-title-md flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-sm font-semibold tracking-tight disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {isVerifying ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-1"></span>
                    <span>Authenticating Session...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">lock_open</span>
                    <span>Verify & Enter Nexora Hub</span>
                  </>
                )}
              </button>
              
              <p className="text-center text-[11px] font-mono-metric text-outline flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[13px] text-secondary">shield</span> 256-bit Encrypted Government Authentication
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
