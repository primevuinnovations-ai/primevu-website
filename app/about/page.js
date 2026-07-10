import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Target, Clock, Award, Building2, GraduationCap, Users, MapPin, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/site/SectionHeading'
import { getGlobalSettings } from '@/lib/wordpress'



export const metadata = {
  title: 'About — PrimeVU',
  description: 'PrimeVU Innovations is a career acceleration institute and wholly-owned subsidiary of Jobin & Jismi IT Services, based in Chalakudy, Kerala.',
}

const DIFFERENTIATORS = [
  { icon: Clock, title: '3-Month Format', body: 'Long enough to ship a real capstone. Short enough to commit without compromise.' },
  { icon: GraduationCap, title: 'J&J Faculty', body: 'Practising consultants and engineers from a top NetSuite implementation partner.' },
  { icon: Award, title: 'Placement Transparency', body: 'Cohort-by-cohort outcomes published. No vanity metrics, no opaque guarantees.' },
  { icon: Target, title: 'Hands-on Intensity', body: 'Capstones built on real hardware, real datasets, and real client-style briefs.' },
]

export default async function App() {
  const { company: COMPANY } = await getGlobalSettings()

  return (
    <div>
      <section className="relative border-b border-border/60 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 radial-prime" />
        <div className="container relative pt-20 pb-16">
          <div className="font-mono-tech text-[11px] tracking-widest text-prime">ABOUT US</div>
          <h1 className="mt-3 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">Who We Are</h1>
          <p className="mt-6 max-w-3xl text-muted-foreground md:text-xl leading-relaxed">
            PrimeVU Innovations is a career acceleration training institute, purpose-built to take graduates from
            'finished college' to 'shipped a real project and got hired' — in 90 days.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading eyebrow="OUR STORY" title="Born inside an enterprise software company." />
            <div className="mt-7 space-y-5 text-foreground/80 leading-relaxed text-lg">
              <p>PrimeVU is a wholly-owned subsidiary of <span className="text-foreground font-semibold">Jobin &amp; Jismi IT Services Pvt Ltd</span> — one of India's largest Oracle NetSuite implementation partners.</p>
              <p>We were founded on a simple observation: enterprises spend hundreds of crores hiring engineers from Kerala, but the path from a Tier-2 college to a real engineering role is still messy. The 6-week bootcamp is too thin. The 1-year diploma is too long. We built the 90-day program that lives in between.</p>
              <p>Based in Chalakudy, with a satellite expansion roadmap across Kerala.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="font-mono-tech text-[11px] tracking-widest text-prime">MISSION</div>
            <p className="mt-4 text-lg md:text-xl text-foreground/90 leading-relaxed">
              To become Kerala's most trusted short-format career acceleration brand for graduates entering AI, enterprise software and automation careers — measured not by enrolment count but by <span className="text-prime">verifiable placement outcomes</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-2 border-y border-border/60">
        <div className="container">
          <SectionHeading eyebrow="WHAT MAKES US DIFFERENT" title="Four things we will not compromise on." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="rounded-xl border border-border bg-background p-6 card-hover">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-prime/10 text-prime border border-prime/20">
                  <d.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold text-lg">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeading eyebrow="PARENT COMPANY" title="A Jobin & Jismi company." />
          <div className="mt-8 rounded-2xl border border-border bg-surface p-8 md:p-12 grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p className="text-foreground/85 leading-relaxed text-lg">Jobin &amp; Jismi IT Services Pvt Ltd is one of India's largest Oracle NetSuite consulting and implementation partners — trusted by enterprises across India, the GCC, and North America.</p>
              <p className="mt-4 text-muted-foreground">PrimeVU inherits that operational discipline, governance, and enterprise credibility — and channels it into a training institute that is finally honest about outcomes.</p>
            </div>
            <div className="flex md:flex-col gap-6 md:gap-4 md:items-end">
              <div><div className="text-3xl font-bold text-prime">15+</div><div className="text-xs text-muted-foreground font-mono-tech">YEARS IN BUSINESS</div></div>
              <div><div className="text-3xl font-bold text-prime">300+</div><div className="text-xs text-muted-foreground font-mono-tech">ENTERPRISE CLIENTS</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-2 border-y border-border/60">
        <div className="container">
          <SectionHeading eyebrow="TEAM" title="Faculty and leadership." subtitle="Detailed profiles coming soon. In the meantime, every program is led by senior engineers and consultants from Jobin & Jismi." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[1,2,3,4].map((i) => (
              <div key={i} className="rounded-xl border border-border bg-background p-6 text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-prime/10 border border-prime/20 flex items-center justify-center"><Users className="h-8 w-8 text-prime/70" /></div>
                <div className="mt-4 font-semibold">Faculty Profile {i}</div>
                <div className="mt-1 text-xs text-muted-foreground/80 font-mono-tech">COMING SOON</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading eyebrow="FACILITY" title="Chalakudy. With a Kerala-wide roadmap." />
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">Our flagship campus is in Chalakudy, Thrissur District — close to the Kochi and Coimbatore talent corridors. Satellite expansion across Kerala is planned for 2026.</p>
            <div className="mt-7"><Link href="/contact"><Button variant="outline" className="border-border hover:bg-foreground/5 hover:text-foreground"><MapPin className="h-4 w-4 mr-2" />Visit Us</Button></Link></div>
          </div>
          <div className="rounded-2xl border border-border bg-surface overflow-hidden aspect-[4/3]">
            <iframe src="https://www.google.com/maps?q=Chalakudy,Kerala,India&output=embed" className="h-full w-full grayscale opacity-80" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Build your career with us.</h2>
          <p className="mt-3 text-muted-foreground">Applications for the next batch are open.</p>
          <div className="mt-7"><Link href="/apply"><Button size="lg" className="bg-prime text-black hover:bg-prime-300 font-semibold h-12 px-7">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div>
        </div>
      </section>
    </div>
  )
}
