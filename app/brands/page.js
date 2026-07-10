import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowUpRight, Sparkles, Building2 } from 'lucide-react'
import SectionHeading from '@/components/site/SectionHeading'
import { getAllBrands, getGlobalSettings } from '@/lib/wordpress'



export const metadata = {
  title: 'Brands — PrimeVU Innovations',
  description: 'Brands and ventures built at PrimeVU Innovations — Legendium (gamified WebXR robotics learning) and Cluereko.',
}

export default async function App() {
  const [brands, settings] = await Promise.all([
    getAllBrands(),
    getGlobalSettings(),
  ])
  const COMPANY = settings.company
  const CLUREKO_URL = 'https://detective-academy-4.preview.emergentagent.com/?utm_source=share'

  return (
    <div className="bg-background selection:bg-prime/30">
      <section className="relative border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-prime/[0.05] to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-prime/10 via-transparent to-transparent" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-prime/10 blur-[120px] pointer-events-none" />
        <div className="container relative pt-24 pb-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-prime/20 bg-background/50 backdrop-blur-md px-4 py-1.5 mb-6 shadow-sm mx-auto">
             <span className="font-mono-tech text-[11px] tracking-widest text-prime font-bold">BRANDS &amp; VENTURES</span>
          </div>
          <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.05]">Built at PrimeVU. <br className="hidden md:block"/><span className="text-prime">For real users.</span></h1>
          <p className="mt-6 mx-auto max-w-2xl text-muted-foreground md:text-xl leading-relaxed">
            Beyond the classroom, PrimeVU Innovations ships real products. Each brand is engineered by the same teams that teach our 90-day programs.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 relative">
        <div className="absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-prime/5 blur-[120px] pointer-events-none" />
        <div className="container space-y-16 relative">
          {brands.map((b, i) => (
            <div key={b.slug} className={`group relative overflow-hidden rounded-[2rem] border border-border/60 bg-surface shadow-sm hover:shadow-xl transition-shadow duration-300 grid lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] overflow-hidden bg-background">
                <img src={b.cover} alt={b.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                {/* Optional dark gradient at top just for the badge contrast, completely transparent in center */}
                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

                <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-3 py-1.5 shadow-sm">
                  <span className={`h-2 w-2 rounded-full ${b.status === 'LIVE' ? 'bg-prime animate-pulse shadow-[0_0_8px_rgba(103,204,229,0.8)]' : 'bg-muted-foreground/50'}`} />
                  <span className="font-mono-tech text-[10px] tracking-widest text-white font-bold">{b.status}</span>
                </div>
              </div>

              <div className="p-8 md:p-14 flex flex-col justify-center bg-gradient-to-b from-surface to-surface-2/30">
                <div className="font-mono-tech text-[11px] tracking-widest text-prime font-bold">A PRIMEVU BRAND</div>
                <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">{b.name}</h2>
                <p className="mt-4 text-prime md:text-lg font-medium tracking-wide">{b.tagline}</p>
                <p className="mt-6 text-base text-muted-foreground leading-relaxed">{b.description}</p>

                <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                  {b.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-foreground/90 font-medium">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-prime flex-shrink-0 shadow-[0_0_8px_rgba(103,204,229,0.5)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap gap-4">
                  {(() => {
                    const isClureko = ['cluereko', 'clureko'].includes((b.slug || '').toLowerCase())
                    const ctaHref = isClureko ? CLUREKO_URL : b.href
                    const isExternalLink = isClureko || b.external

                    return isExternalLink ? (
                      <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-prime text-black hover:bg-prime-300 font-bold h-14 px-8 shadow-lg shadow-prime/20 hover:scale-105 transition-all">
                          {isClureko ? 'Visit Clureko' : `Visit ${b.name}`} <ArrowUpRight className="ml-2 h-5 w-5" />
                        </Button>
                      </a>
                    ) : (
                      <Link href={ctaHref}>
                        <Button size="lg" className="bg-prime text-black hover:bg-prime-300 font-bold h-14 px-8 shadow-lg shadow-prime/20 hover:scale-105 transition-all">
                          Learn More <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    )
                  })()}
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="h-14 px-8 border-border/80 text-foreground hover:bg-surface font-semibold transition-colors">Partner with us</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface-2 border-y border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-prime/5 via-transparent to-transparent opacity-80" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center bg-background/50 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-border/50 shadow-sm">
            <SectionHeading eyebrow="THE PARENT" title="One company. Many products. Verifiable outcomes." center />
            <p className="mt-8 text-muted-foreground leading-relaxed md:text-lg">
              Every PrimeVU brand inherits the operational discipline of our parent, {COMPANY.parent}. From the gamified VR classrooms of Legendium to the upcoming launch of Cluereko, the same engineering team is behind it all.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/about"><Button variant="outline" className="h-12 px-8 border-border/60 hover:bg-surface font-semibold transition-colors"><Building2 className="h-4 w-4 mr-2 text-prime" /> About PrimeVU</Button></Link>
              <Link href="/courses"><Button className="bg-prime text-black hover:bg-prime-300 font-bold h-12 px-8 shadow-lg shadow-prime/20 hover:scale-105 transition-all"><Sparkles className="h-4 w-4 mr-2" /> Explore Programs</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
