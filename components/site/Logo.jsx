import Link from 'next/link'

const FALLBACK_LOGO = 'https://customer-assets.emergentagent.com/job_97728379-e2b2-4585-9b4e-8a8c25fdce78/artifacts/6mnmoqfr_Primevu_Logo-01.png'

export default function Logo({ className = '', showText = true, COMPANY = {} }) {
  const logoSrc = COMPANY.logo || FALLBACK_LOGO
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      <img src={logoSrc} alt="PrimeVU" className="h-9 w-9 rounded-md" />
      {showText ? (
        <span className="text-foreground font-bold text-lg tracking-tight leading-none">
          Prime<span className="text-prime">VU</span>
        </span>
      ) : null}
    </Link>
  )
}
