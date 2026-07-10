import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import { ArrowRight, Zap, Calendar, Target, Building2, CheckCircle2, Sparkles, ArrowUpRight, ExternalLink, Cloud } from 'lucide-react'
import ToolsReel from '@/components/site/ToolsReel'
import SectionHeading from '@/components/site/SectionHeading'
import { getGlobalSettings, getAllPrograms, getAllBrands, getAllPosts, getAllFaqs } from '@/lib/wordpress'



const ICONS = { Zap, Calendar, Target, Building2 }

export default async function App() {
  const [settings, programs, brands, posts, faqs] = await Promise.all([
    getGlobalSettings(),
    getAllPrograms(),
    getAllBrands(),
    getAllPosts(),
    getAllFaqs(),
  ])
  const { company: COMPANY, stats: STATS, whyFeatures: WHY_FEATURES, howSteps: HOW_STEPS } = settings
  const BLOG_POSTS = posts.slice(0, 3)
  const GENERAL_FAQS = faqs.slice(0, 5)

  return (
    <div className="bg-slate-50 selection:bg-sky-200">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-sky-100/50">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-sky-50/50 to-background" />
        <div className="absolute -top-[20%] left-[-10%] h-[1000px] w-[1200px] rounded-full bg-white blur-[180px] pointer-events-none" />
        <div className="absolute top-[10%] right-[-10%] h-[800px] w-[1000px] rounded-full bg-sky-200/40 blur-[200px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[20%] h-[600px] w-[800px] rounded-full bg-sky-200/30 blur-[150px] pointer-events-none" />

        <div className="container relative pt-24 pb-24 lg:pt-32 lg:pb-32 text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/60 backdrop-blur-md px-4 py-1.5 mb-8 shadow-sm hover:shadow-md transition-shadow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
            </span>
            <span className="font-mono-tech text-[11px] tracking-[0.2em] text-slate-700 font-bold">NEXT BATCH STARTS · {COMPANY.nextBatch?.toUpperCase() || 'AUGUST 2025'}</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1] mx-auto text-slate-900">
            Launch Your Career in <span className="text-sky-500 drop-shadow-sm">90 Days</span>.
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            Full-time, instructor-led, placement-linked programs in AI &amp; Machine Learning, NetSuite Administration, and Robotics — engineered by a Jobin &amp; Jismi company.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/courses">
              <Button size="lg" className="bg-sky-500 text-white hover:bg-sky-600 font-bold h-14 px-8 text-base shadow-lg shadow-sky-500/25 transition-all hover:scale-105 hover:shadow-sky-500/40 rounded-xl">
                Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/apply">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-sky-200 bg-white/50 backdrop-blur-sm text-slate-700 hover:bg-white hover:text-sky-700 transition-all shadow-sm rounded-xl">
                Apply Now
              </Button>
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="relative overflow-hidden p-6 md:p-8 rounded-[2rem] flex flex-col items-center justify-center hover:-translate-y-2 transition-all duration-300 border border-white shadow-lg hover:shadow-2xl hover:shadow-sky-200/50 group">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-sky-50 opacity-90" />
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight group-hover:scale-105 transition-transform">{s.value}<span className="text-sky-500">{s.suffix}</span></div>
                  <div className="mt-2 font-mono-tech text-[10px] tracking-[0.15em] text-slate-500 uppercase font-bold">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs ── */}
      <section className="py-24 md:py-32 relative bg-gradient-to-b from-transparent via-sky-50/50 to-transparent overflow-hidden">
        <div className="absolute top-1/3 left-[-20%] h-[800px] w-[1000px] rounded-full bg-white blur-[200px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[700px] w-[900px] rounded-full bg-sky-100/50 blur-[180px] pointer-events-none" />
        <div className="container relative">
          <SectionHeading eyebrow="PROGRAMS" title="Three 90-day programs. One outcome — a real career." subtitle="Each program is full-time, hands-on, and placement-linked. Pick the discipline that matches your future." center />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((p) => (
              <Card key={p.slug} className="group relative overflow-hidden rounded-[2.5rem] border border-white shadow-lg hover:shadow-2xl hover:shadow-sky-200/50 hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-sky-50 opacity-90" />
                <div className="p-8 flex-1 flex flex-col relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center justify-center rounded-full bg-white px-3 py-1 font-mono-tech text-[10px] tracking-widest text-sky-600 font-bold border border-sky-100 shadow-sm">{p.category.toUpperCase()}</span>
                    <span className="font-mono-tech text-[10px] tracking-widest text-slate-400 font-bold">{p.duration.toUpperCase()}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight tracking-tight">{p.name}</h3>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-1 font-medium">{p.oneLiner}</p>
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-slate-900 tracking-tight">{p.fee}</span>
                    <span className="text-xs text-slate-500 font-bold">program fee</span>
                  </div>
                </div>
                <div className="border-t border-white px-2 py-3 bg-white/50 relative z-10">
                  <ToolsReel tools={p.tools.slice(0, 10)} speed="slow" />
                </div>
                <div className="p-6 pt-4 border-t border-white bg-white/80 relative z-10">
                  <Link href={`/courses/${p.slug}`}>
                    <Button variant="ghost" className="w-full justify-between text-slate-800 hover:bg-sky-50 hover:text-sky-600 group/btn font-bold rounded-xl h-12">
                      View Program <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Section ── */}
      <section className="py-24 md:py-32 bg-sky-50/40 border-y border-sky-100 relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] h-[1000px] w-[1200px] rounded-full bg-white blur-[200px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[800px] w-[1000px] rounded-full bg-sky-100/40 blur-[150px] pointer-events-none" />
        <div className="container relative">
          <SectionHeading eyebrow="WHY PRIMEVU" title="Built for outcomes, not enrolment counts." center />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {WHY_FEATURES.map((f) => {
              const I = ICONS[f.icon]
              return (
                <div key={f.title} className="group relative overflow-hidden flex flex-col items-start p-8 rounded-[2.5rem] border border-white shadow-lg hover:shadow-2xl hover:shadow-sky-200/50 hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-sky-50 opacity-90" />
                  <div className="relative z-10">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-sky-100 text-sky-500 shadow-sm group-hover:scale-110 group-hover:border-sky-200 group-hover:bg-sky-50 transition-all duration-300">
                      {I ? <I className="h-6 w-6" /> : null}
                    </div>
                    <h3 className="mt-8 font-bold text-xl text-slate-900 tracking-tight">{f.title}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed font-medium">{f.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How Section ── */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-sky-50/30 to-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[1200px] rounded-full bg-white blur-[200px] pointer-events-none" />
        <div className="container relative">
          <SectionHeading eyebrow="HOW IT WORKS" title="From application to first job in 3 simple stages." center />
          <div className="mt-16 grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
            {HOW_STEPS.map((s) => (
              <div key={s.n} className="group relative overflow-hidden rounded-[2.5rem] border border-white p-10 text-center shadow-lg hover:shadow-2xl hover:shadow-sky-200/50 hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-sky-50 opacity-90" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-sky-600 border border-sky-200 font-bold text-2xl mb-6 shadow-sm group-hover:scale-110 group-hover:bg-sky-50 transition-all">{s.n}</div>
                  <div className="text-2xl font-bold tracking-tight text-slate-900">{s.title}</div>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed font-medium">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Placement Section ── */}
      <section className="py-24 md:py-32 border-y border-sky-100 relative overflow-hidden bg-gradient-to-br from-sky-50/50 via-white to-sky-100/30">
        <div className="absolute top-[-10%] right-[-10%] h-[800px] w-[1000px] rounded-full bg-white blur-[200px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[700px] w-[900px] rounded-full bg-sky-200/20 blur-[150px] pointer-events-none" />
        <div className="container grid lg:grid-cols-2 gap-16 items-center relative">
          <div>
            <SectionHeading eyebrow="PLACEMENT & OUTCOMES" title="100+ hiring partners. Transparent outcome reports." />
            <p className="mt-6 text-lg text-slate-600 leading-relaxed font-medium">
              We do not promise guarantees we cannot back with data. We do publish placement outcomes cohort-by-cohort — number of offers, median CTC, time-to-placement.
            </p>
            <ul className="mt-8 space-y-4">
              {['Dedicated placement cell with CRM-tracked employer outreach', 'Mock interviews and portfolio reviews', 'Direct introductions to product, services, and ERP companies', 'Industry-mentored capstones that become resume artefacts'].map((t) => (
                <li key={t} className="flex items-start gap-4 text-slate-800 font-semibold">
                  <CheckCircle2 className="h-6 w-6 text-sky-500 flex-shrink-0 mt-0.5 drop-shadow-sm" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-4">
              <Link href="/apply"><Button size="lg" className="bg-sky-500 text-white hover:bg-sky-600 font-bold h-14 px-8 shadow-md hover:shadow-sky-500/20 rounded-xl">Start Application</Button></Link>
              <Link href="/about"><Button size="lg" variant="ghost" className="h-14 px-8 font-bold text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-xl">Our Approach <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            </div>
          </div>
          <div className="relative lg:pl-10">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-white/50 to-sky-50/50 rounded-[3.5rem] border border-white shadow-2xl backdrop-blur-xl" />
            <div className="relative grid grid-cols-2 gap-6 p-8">
              {[
                { k: '100+', v: 'Hiring Partners' },
                { k: '58+', v: 'Feeder Colleges' },
                { k: '3', v: 'Career Tracks' },
                { k: '90', v: 'Day Sprint' },
              ].map((b) => (
                <div key={b.v} className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 text-center hover:scale-105 transition-transform duration-300 border border-white shadow-sm">
                  <div className="text-4xl md:text-5xl font-bold text-sky-500 tracking-tight drop-shadow-sm">{b.k}</div>
                  <div className="mt-3 font-mono-tech text-[10px] tracking-[0.15em] text-slate-500 uppercase font-bold">{b.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Brands Section ── */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-t from-sky-50/30 via-white to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1000px] w-[1200px] rounded-full bg-white blur-[200px] pointer-events-none" />
        <div className="container relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <SectionHeading eyebrow="OUR BRANDS" title="Beyond the classroom. Real products, shipping now." subtitle="PrimeVU Innovations also builds and ships its own brands. Each one engineered by the same teams behind our programs." />
            <Link href="/brands"><Button variant="outline" className="h-12 px-8 font-bold border-sky-200 text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors bg-white/50 backdrop-blur-sm rounded-xl">Explore All Brands <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {brands.map((b) => {
              const inner = (
                <div className="group relative overflow-hidden rounded-[3rem] border border-white bg-white shadow-lg hover:shadow-2xl hover:shadow-sky-200/50 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-sky-50">
                    <img src={b.cover} alt={b.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-6 left-6 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 backdrop-blur-md px-3 py-1.5 shadow-sm">
                      <span className={`h-2 w-2 rounded-full ${b.status === 'LIVE' ? 'bg-sky-400 animate-pulse shadow-[0_0_10px_rgba(56,189,248,1)]' : 'bg-white/50'}`} />
                      <span className="font-mono-tech text-[10px] tracking-widest text-white font-bold">{b.status}</span>
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between z-20">
                      <div>
                        <div className="font-mono-tech text-[10px] tracking-widest text-sky-300 font-bold drop-shadow-md">A PRIMEVU BRAND</div>
                        <h3 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg">{b.name}</h3>
                      </div>
                      <div className="text-slate-900 bg-white/90 backdrop-blur-md p-4 rounded-full border border-white shadow-lg group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                        {b.external ? <ArrowUpRight className="h-6 w-6" /> : <ArrowRight className="h-6 w-6" />}
                      </div>
                    </div>
                  </div>
                  <div className="p-10 flex-1 flex flex-col bg-gradient-to-br from-sky-100 via-white to-sky-50 relative overflow-hidden">
                    <p className="text-sky-600 text-sm font-bold tracking-widest uppercase">{b.tagline}</p>
                    <p className="mt-4 text-lg text-slate-700 leading-relaxed flex-1 font-medium">{b.short}</p>
                  </div>
                </div>
              )
              return b.external ? (
                <a key={b.slug} href={b.href} target="_blank" rel="noopener noreferrer" className="block h-full">{inner}</a>
              ) : (
                <Link key={b.slug} href={b.href} className="block h-full">{inner}</Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section className="py-24 md:py-32 relative bg-background overflow-hidden">
        <div className="absolute top-1/2 right-[-10%] h-[800px] w-[1000px] -translate-y-1/2 rounded-full bg-sky-100/40 blur-[180px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[600px] w-[800px] rounded-full bg-white blur-[150px] pointer-events-none" />
        <div className="container relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading eyebrow="INSIGHTS" title="Latest from the PrimeVU Journal" />
            <Link href="/blog"><Button variant="outline" className="h-12 px-8 font-bold border-sky-200 text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors bg-white/60 backdrop-blur-md rounded-xl">View All Posts <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group relative overflow-hidden rounded-[2.5rem] border border-white shadow-lg hover:shadow-2xl hover:shadow-sky-200/50 hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-sky-50 opacity-90" />
                <div className="aspect-[16/10] overflow-hidden bg-sky-50 relative z-10">
                  <div className="absolute inset-0 bg-sky-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 flex-1 flex flex-col relative z-10">
                  <div className="flex items-center gap-3 font-mono-tech text-[10px] tracking-widest text-sky-500 font-bold border border-sky-100 bg-white/50 backdrop-blur-sm rounded-full px-3 py-1 w-fit shadow-sm">
                    {p.category.toUpperCase()} <span className="text-slate-300">·</span> <span className="text-slate-500">{new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold leading-snug text-slate-900 group-hover:text-sky-600 transition-colors">{p.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-2 flex-1 font-medium">{p.excerpt}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-900 font-bold group-hover:text-sky-600 transition-colors">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Preview ── */}
      <section className="py-24 md:py-32 bg-sky-50/50 border-y border-sky-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-90 pointer-events-none" />
        <div className="container max-w-4xl mx-auto text-center relative">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" center />
          <div className="mt-12 text-left bg-white/80 backdrop-blur-2xl rounded-[3rem] p-8 md:p-14 border border-white shadow-xl shadow-sky-100/50">
            <Accordion type="single" collapsible className="w-full">
              {GENERAL_FAQS.map((f, i) => (
                <AccordionItem key={i} value={`it-${i}`} className="border-slate-100">
                  <AccordionTrigger className="text-left text-slate-800 hover:text-sky-600 text-xl font-bold py-6">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6 font-medium">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="mt-12">
            <Link href="/courses" className="inline-flex items-center gap-2 text-sky-600 hover:underline font-bold text-xl">View all FAQs <ArrowRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 md:py-40 bg-background relative overflow-hidden">
        <div className="container relative z-10">
          <div className="relative overflow-hidden rounded-[3.5rem] border border-white p-12 md:p-24 text-center shadow-2xl shadow-sky-200/50">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-sky-50 to-white opacity-90" />
            <div className="absolute top-[-50%] right-[-10%] h-[1000px] w-[1000px] rounded-full bg-white blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-30%] left-[-10%] h-[800px] w-[800px] rounded-full bg-sky-300/30 blur-[150px] pointer-events-none" />
            <div className="relative flex flex-col items-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 font-mono-tech text-[11px] tracking-widest text-sky-600 font-bold mb-8 bg-white/80 px-6 py-2 rounded-full border border-sky-100 backdrop-blur-xl shadow-sm">
                <Cloud className="h-4 w-4 text-sky-500" /> NEXT BATCH STARTS SOON
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.05] text-slate-900">
                Secure your seat. <br /><span className="text-sky-500 drop-shadow-sm">Build your future.</span>
              </h2>
              <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl font-semibold">
                Applications close two weeks before each batch start. Pay {`\u20B92,000`} to apply — fully adjusted against your program fee.
              </p>
              <div className="mt-14 flex flex-wrap justify-center gap-4">
                <Link href="/apply"><Button size="lg" className="bg-sky-500 text-white hover:bg-sky-600 font-bold h-16 px-12 text-lg shadow-xl shadow-sky-500/30 hover:scale-105 transition-all duration-300 rounded-2xl">Apply Now</Button></Link>
                <a href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="h-16 px-12 text-lg border-white bg-white/80 backdrop-blur-xl hover:bg-white text-slate-800 transition-all font-bold shadow-md rounded-2xl hover:shadow-lg hover:text-sky-600">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
