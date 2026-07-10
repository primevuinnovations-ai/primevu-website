import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, ArrowLeft, Zap, Cpu, Gamepad2, Activity } from 'lucide-react'
import SectionHeading from '@/components/site/SectionHeading'
import { getBrandBySlug } from '@/lib/wordpress'
import { notFound } from 'next/navigation'



export const metadata = {
  title: 'Cluereko | PrimeVU',
  description: "Cluereko is PrimeVU's upcoming venture.",
}

export default async function App() {
  const kyro = await getBrandBySlug('cluereko')
  if (!kyro) return notFound()

  const CLUREKO_URL = 'https://detective-academy-4.preview.emergentagent.com/'

  const features = [
    { icon: Zap, title: 'Low-Latency Input', body: 'Engineered for the microseconds that decide who wins. Direct paths, no compromise.' },
    { icon: Activity, title: 'Immersive Haptics', body: 'Feedback you feel in the match, not just in the speakers. Designed for presence.' },
    { icon: Cpu, title: 'Built In-House', body: 'PCBs, firmware, industrial design — all engineered by the PrimeVU hardware team.' },
    { icon: Gamepad2, title: 'Made for Players', body: 'Tuned with input from competitive players, streamers, and game-tech creators.' },
  ]

  return (
    <div className="bg-background selection:bg-prime/30">
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-b from-prime/[0.05] to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-prime/10 via-transparent to-transparent" />
        <div className="absolute -top-40 right-0 h-[600px] w-[700px] rounded-full bg-prime/10 blur-[140px] pointer-events-none" />
        <div className="container relative pt-14 pb-20">
          <Link href="/brands" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-prime transition-colors"><ArrowLeft className="h-4 w-4" /> All Brands</Link>

          <div className="mt-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-prime/30 bg-background/50 backdrop-blur-md px-4 py-1.5 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-prime opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-prime" />
                </span>
                <span className="font-mono-tech text-[11px] tracking-widest text-prime font-bold">LIVE NOW · OFFICIAL SITE</span>
              </div>
              <h1 className="mt-8 text-6xl md:text-8xl font-bold tracking-tight leading-[1.0] drop-shadow-sm">Cluereko</h1>
              <p className="mt-6 text-2xl md:text-3xl font-semibold text-foreground tracking-tight">Built for the next wave of play.</p>
              <p className="mt-6 text-muted-foreground md:text-lg leading-relaxed max-w-xl">{kyro.description}</p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href={CLUREKO_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-prime text-black hover:bg-prime-300 font-bold h-14 px-8 shadow-lg shadow-prime/20 hover:scale-105 transition-all">
                    <ArrowUpRight className="mr-2 h-5 w-5" /> Visit Clureko
                  </Button>
                </a>
                <Link href="/brands">
                  <Button size="lg" variant="outline" className="h-14 px-8 border-border/80 text-foreground hover:bg-surface font-semibold transition-colors">Other Brands</Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-square rounded-[2.5rem] overflow-hidden border border-border/50 bg-surface shadow-xl">
              <img src={kyro.cover} alt="Cluereko" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-prime/[0.02]">
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-prime/5 blur-[120px] pointer-events-none" />
        <div className="container relative">
          <SectionHeading eyebrow="WHY CLUEREKO" title="Four hardware bets we are doubling down on." center />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((f) => (
              <div key={f.title} className="group rounded-[2rem] border border-border/50 bg-background/50 backdrop-blur-md p-8 shadow-sm hover:shadow-lg hover:border-prime/30 transition-all duration-300">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface border border-border/60 text-prime shadow-sm group-hover:scale-110 group-hover:border-prime/30 group-hover:shadow-prime/10 transition-all duration-300">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-bold text-lg tracking-tight">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface-2 border-y border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-prime/5 via-transparent to-transparent opacity-80" />
        <div className="container grid lg:grid-cols-2 gap-16 items-center relative">
          <div>
            <SectionHeading eyebrow="WHO IT'S FOR" title="Built with players. Built for the moment of play." />
            <p className="mt-8 text-muted-foreground leading-relaxed md:text-xl">{kyro.audience}</p>
            <div className="mt-10">
              <a href={CLUREKO_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-prime text-black hover:bg-prime-300 font-bold h-14 px-8 shadow-lg shadow-prime/20 hover:scale-105 transition-all"><ArrowUpRight className="mr-2 h-5 w-5" /> Explore the Site</Button>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {(kyro.gallery || []).map((src) => (
              <div key={src} className="aspect-square overflow-hidden rounded-3xl border border-border/50 shadow-sm hover:shadow-lg transition-shadow">
                <img src={src} alt="Cluereko concept" className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
