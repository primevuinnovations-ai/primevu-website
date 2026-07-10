'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, ArrowRight, Clock, User } from 'lucide-react'

export default function BlogClient({ posts, categories }) {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const inCat = cat === 'All' || p.category === cat
      const inQ = !q || (p.title + ' ' + p.excerpt + ' ' + p.category).toLowerCase().includes(q.toLowerCase())
      return inCat && inQ
    })
  }, [q, cat, posts])

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <div>
      <section className="relative border-b border-border/60 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 radial-prime" />
        <div className="container relative pt-20 pb-12">
          <div className="font-mono-tech text-[11px] tracking-widest text-prime">JOURNAL</div>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">Insights &amp; Resources</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">Ideas, stories, and frameworks from the PrimeVU team — on careers, technology, and the craft of getting hired.</p>

          <div className="mt-9 flex flex-col md:flex-row gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/70" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search posts..." className="pl-10 h-11 bg-foreground/[0.03] border-border" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((t) => (
                <button key={t} onClick={() => setCat(t)} className={`px-3.5 h-11 rounded-md text-xs font-medium transition border whitespace-nowrap ${cat === t ? 'bg-prime text-black border-prime' : 'bg-transparent text-foreground/80 border-border hover:border-foreground/30'}`}>{t}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center text-muted-foreground py-20">No posts found.</div>
          ) : (
            <>
              {featured ? (
                <Link href={`/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-8 rounded-2xl border border-border bg-surface overflow-hidden card-hover">
                  <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img src={featured.cover} alt={featured.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                  </div>
                  <div className="p-7 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 font-mono-tech text-[10px] text-prime">FEATURED · {featured.category.toUpperCase()}</div>
                    <h2 className="mt-4 text-2xl md:text-4xl font-bold leading-tight group-hover:text-prime transition">{featured.title}</h2>
                    <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
                    <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" />{featured.author}</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featured.readTime}</span>
                      <span>{new Date(featured.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 text-prime text-sm font-medium">Read article <ArrowRight className="h-3.5 w-3.5" /></div>
                  </div>
                </Link>
              ) : null}

              {rest.length ? (
                <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-xl border border-border bg-surface overflow-hidden card-hover">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 font-mono-tech text-[10px] text-prime">{p.category.toUpperCase()} <span className="text-muted-foreground/60">·</span> <span className="text-muted-foreground">{new Date(p.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span></div>
                        <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-prime transition">{p.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{p.excerpt}</p>
                        <div className="mt-4 inline-flex items-center gap-2 text-sm text-prime font-medium">Read More <ArrowRight className="h-3.5 w-3.5" /></div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : null}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
