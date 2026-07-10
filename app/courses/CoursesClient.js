'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Search, ArrowRight, Clock, Calendar, Wallet } from 'lucide-react'
import ToolsReel from '@/components/site/ToolsReel'
import SectionHeading from '@/components/site/SectionHeading'

const TABS = ['All', 'AI & ML', 'NetSuite', 'Robotics']

export default function CoursesClient({ programs, faqs }) {
  const [q, setQ] = useState('')
  const [tab, setTab] = useState('All')

  const filtered = useMemo(() => {
    return programs.filter((p) => {
      const inTab = tab === 'All' || p.category === tab
      const inQ = !q || (p.name + ' ' + p.tagline + ' ' + p.tools.join(' ')).toLowerCase().includes(q.toLowerCase())
      return inTab && inQ
    })
  }, [q, tab, programs])

  return (
    <div>
      <section className="relative border-b border-border/60 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 radial-prime" />
        <div className="container relative pt-20 pb-12">
          <div className="font-mono-tech text-[11px] tracking-widest text-prime">PROGRAMS</div>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight text-balance">Explore Our Programs</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">Three intensive 90-day tracks designed for graduates who want to ship, not just study. Full-time, instructor-led, placement-linked.</p>

          <div className="mt-9 flex flex-col md:flex-row gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/70" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search programs, tools, topics..." className="pl-10 h-11 bg-foreground/[0.03] border-border text-foreground placeholder:text-muted-foreground/60" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {TABS.map((t) => (
                <button key={t} onClick={() => setTab(t)} className={`px-4 h-11 rounded-md text-sm font-medium transition border ${tab === t ? 'bg-prime text-black border-prime' : 'bg-transparent text-foreground/80 border-border hover:border-foreground/30'}`}>{t}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center text-muted-foreground py-20">No programs match your search.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <Card key={p.slug} className="group bg-surface border-border overflow-hidden card-hover flex flex-col">
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-[10px] tracking-widest text-prime">{p.category.toUpperCase()}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-foreground leading-tight">{p.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.tagline}</p>

                    <div className="mt-6 grid grid-cols-3 gap-3">
                      <div className="rounded-md border border-border p-3">
                        <div className="flex items-center gap-1.5 text-prime"><Clock className="h-3.5 w-3.5" /><span className="font-mono-tech text-[10px]">DURATION</span></div>
                        <div className="mt-1 text-sm font-semibold">{p.duration}</div>
                      </div>
                      <div className="rounded-md border border-border p-3">
                        <div className="flex items-center gap-1.5 text-prime"><Calendar className="h-3.5 w-3.5" /><span className="font-mono-tech text-[10px]">SCHEDULE</span></div>
                        <div className="mt-1 text-xs font-semibold">Full-time</div>
                      </div>
                      <div className="rounded-md border border-border p-3">
                        <div className="flex items-center gap-1.5 text-prime"><Wallet className="h-3.5 w-3.5" /><span className="font-mono-tech text-[10px]">FEE</span></div>
                        <div className="mt-1 text-sm font-semibold">{p.fee}</div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">{p.description}</p>
                  </div>
                  <div className="border-t border-border"><ToolsReel tools={p.tools} speed="slow" /></div>
                  <div className="flex border-t border-border">
                    <Link href={`/courses/${p.slug}`} className="flex-1">
                      <Button variant="ghost" className="w-full justify-center text-foreground hover:bg-foreground/5 hover:text-prime rounded-none h-12">View Details</Button>
                    </Link>
                    <Link href="/apply" className="flex-1">
                      <Button className="w-full bg-prime text-black hover:bg-prime-300 font-semibold rounded-none h-12">Apply Now</Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-surface-2 border-y border-border/60">
        <div className="container grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="ADMISSIONS FAQ" title="Common questions, clear answers." />
          </div>
          <div className="lg:col-span-3">
            <Accordion type="single" collapsible>
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`it-${i}`} className="border-border">
                  <AccordionTrigger className="text-left text-foreground hover:text-prime">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to start?</h2>
          <p className="mt-3 text-muted-foreground">Pick your program and submit your application today.</p>
          <div className="mt-7"><Link href="/apply"><Button size="lg" className="bg-prime text-black hover:bg-prime-300 font-semibold h-12 px-7">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div>
        </div>
      </section>
    </div>
  )
}
