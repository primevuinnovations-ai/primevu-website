import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { ArrowRight, Clock, Calendar, Wallet, CheckCircle2, Cpu, Briefcase, Sparkles } from 'lucide-react'
import ToolsReel from '@/components/site/ToolsReel'
import SectionHeading from '@/components/site/SectionHeading'
import { getProgramBySlug, getProgramSlugs, getGlobalSettings } from '@/lib/wordpress'





export async function generateMetadata({ params }) {
  const p = await getProgramBySlug(params.slug)
  if (!p) return { title: 'Program — PrimeVU' }
  return { title: `${p.name} — PrimeVU`, description: p.description }
}

export default async function App({ params }) {
  const [program, settings] = await Promise.all([
    getProgramBySlug(params.slug),
    getGlobalSettings(),
  ])
  if (!program) return notFound()
  const COMPANY = settings.company

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 radial-prime" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-prime/10 blur-[120px]" />
        <div className="container relative pt-20 pb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-prime/30 bg-prime/10 px-3 py-1.5">
            <span className="font-mono-tech text-[11px] tracking-wider text-prime">{(program.category || '').toUpperCase()} · BATCH STARTS {(COMPANY.nextBatch || '').toUpperCase()}</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.05]">{program.name}</h1>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl">{program.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 text-foreground/90"><Clock className="h-4 w-4 text-prime" />{program.duration}</div>
            <div className="h-4 w-px bg-foreground/10" />
            <div className="flex items-center gap-2 text-foreground/90"><Calendar className="h-4 w-4 text-prime" />{program.schedule}</div>
            <div className="h-4 w-px bg-foreground/10" />
            <div className="flex items-center gap-2 text-foreground/90"><Wallet className="h-4 w-4 text-prime" />{program.fee}</div>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/apply"><Button size="lg" className="bg-prime text-black hover:bg-prime-300 font-semibold h-12 px-7">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <a href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent('Hi, I want to enquire about the ' + program.name + ' program.')}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="h-12 px-7 border-border text-foreground hover:bg-foreground/5 hover:text-foreground">WhatsApp Enquiry</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Tools reel */}
      <section className="py-8 border-b border-border/60 bg-surface-2">
        <div className="container">
          <div className="font-mono-tech text-[11px] tracking-widest text-muted-foreground mb-3">TOOLS & TECHNOLOGIES YOU WILL MASTER</div>
          <ToolsReel tools={program.tools} />
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="PROGRAM OVERVIEW" title="What you will build, who it's for." />
            <p className="mt-6 text-foreground/80 leading-relaxed text-lg">{program.description}</p>
            <div className="mt-8 rounded-xl border border-border bg-surface p-6">
              <div className="font-mono-tech text-[11px] tracking-widest text-prime">WHO IT'S FOR</div>
              <p className="mt-3 text-foreground/85">{program.audience}</p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 h-fit">
            <div className="font-mono-tech text-[11px] tracking-widest text-prime">QUICK FACTS</div>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3"><Clock className="h-4 w-4 text-prime mt-0.5" /><div><div className="text-sm text-muted-foreground">Duration</div><div className="font-semibold">{program.duration}</div></div></li>
              <li className="flex items-start gap-3"><Calendar className="h-4 w-4 text-prime mt-0.5" /><div><div className="text-sm text-muted-foreground">Schedule</div><div className="font-semibold">{program.schedule}</div></div></li>
              <li className="flex items-start gap-3"><Wallet className="h-4 w-4 text-prime mt-0.5" /><div><div className="text-sm text-muted-foreground">Fee</div><div className="font-semibold">{program.fee}</div></div></li>
              <li className="flex items-start gap-3"><Sparkles className="h-4 w-4 text-prime mt-0.5" /><div><div className="text-sm text-muted-foreground">Next Batch</div><div className="font-semibold">{COMPANY.nextBatch}</div></div></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-surface-2 border-y border-border/60">
        <div className="container">
          <SectionHeading eyebrow="CURRICULUM" title="12 weeks. 4 phases. One capstone." />
          <div className="mt-12 space-y-4">
            {program.curriculum.map((c, i) => (
              <div key={i} className="group rounded-xl border border-border bg-background p-6 md:p-7 card-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <span className="font-mono-tech text-[10px] tracking-widest text-prime rounded-md border border-prime/30 bg-prime/10 px-2.5 py-1">{(c.weeks || '').toUpperCase()}</span>
                    <h3 className="text-xl font-bold">{c.phase}</h3>
                  </div>
                </div>
                <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                  {c.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-foreground/85 text-sm"><CheckCircle2 className="h-4 w-4 text-prime mt-0.5 flex-shrink-0" />{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools grid */}
      <section className="py-20">
        <div className="container">
          <SectionHeading eyebrow="TOOLS" title="Hands-on with the stack that gets you hired." />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {program.tools.map((t) => (
              <div key={t} className="rounded-lg border border-border bg-surface p-4 flex items-center gap-2.5 hover:border-prime/50 transition">
                <Cpu className="h-4 w-4 text-prime" />
                <span className="font-mono-tech text-sm text-foreground">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20 bg-surface-2 border-y border-border/60">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="CAREER OUTCOMES" title="Roles graduates target." />
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {program.outcomes.map((o) => (
                <div key={o} className="rounded-lg border border-border bg-background p-4 flex items-center gap-3">
                  <Briefcase className="h-4 w-4 text-prime" />
                  <span className="font-semibold">{o}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="PLACEMENT SUPPORT" title="What PrimeVU does for you." />
            <ul className="mt-8 space-y-3">
              {['CRM-tracked outreach to 100+ hiring partners','Mock interviews with senior engineers','Portfolio review and resume audit','1:1 placement counsellor','Industry-mentored capstone projects','Demo day with employer panel'].map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground/85"><CheckCircle2 className="h-5 w-5 text-prime flex-shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="FAQ" title="Program FAQs." />
          </div>
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible>
              {program.faqs.map((f, i) => (
                <AccordionItem key={i} value={`it-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-foreground hover:text-prime">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface via-background to-surface-2 p-10 md:p-14">
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-prime/20 blur-[100px]" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">Ready for the {program.name} cohort?</h2>
                <p className="mt-4 text-muted-foreground md:text-lg">Limited seats. Apply now to lock in your spot.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/apply"><Button size="lg" className="bg-prime text-black hover:bg-prime-300 font-semibold h-12 px-7">Apply Now</Button></Link>
                <a href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent('Hi, I want to enquire about the ' + program.name + ' program.')}`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="h-12 px-7 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]">WhatsApp</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
