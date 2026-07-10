'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'CBSE', href: '#', dropdown: 'cbse' },
  { label: 'Programs', href: '/courses', dropdown: 'programs' },
  { label: 'Brands', href: '/brands', dropdown: 'brands' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar({ COMPANY = {}, PROGRAMS = [], BRANDS = [] }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDrop, setOpenDrop] = useState(null) // 'programs' | 'brands' | null

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const renderDropdown = (kind) => {
    if (kind === 'cbse') {
      const classes = [10, 9, 8, 7, 6, 5]
      return (
        <div className="w-[360px] rounded-lg border border-border bg-surface p-2 shadow-2xl">
          {classes.map((cls) => (
            <Link key={cls} href={`/cbse/class/${cls}`} className="block rounded-md px-3 py-3 hover:bg-foreground/5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-foreground">Class {cls}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Explore subjects for Class {cls}</div>
                </div>
                <span className="font-mono-tech text-[10px] text-prime">CBSE</span>
              </div>
            </Link>
          ))}
        </div>
      )
    }
    if (kind === 'programs') {
      return (
        <div className="w-[360px] rounded-lg border border-border bg-surface p-2 shadow-2xl">
          {PROGRAMS.map((p) => (
            <Link key={p.slug} href={`/courses/${p.slug}`} className="block rounded-md px-3 py-3 hover:bg-foreground/5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-foreground">{p.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{p.duration} · {p.fee}</div>
                </div>
                <span className="font-mono-tech text-[10px] text-prime">{p.category.toUpperCase()}</span>
              </div>
            </Link>
          ))}
          <Link href="/courses" className="block rounded-md px-3 py-2 text-xs text-prime hover:bg-foreground/5 font-mono-tech">VIEW ALL PROGRAMS →</Link>
        </div>
      )
    }
    if (kind === 'brands') {
      return (
        <div className="w-[360px] rounded-lg border border-border bg-surface p-2 shadow-2xl">
          {BRANDS.map((b) => (
            <Link
              key={b.slug}
              href={b.href}
              target={b.external ? '_blank' : undefined}
              rel={b.external ? 'noopener noreferrer' : undefined}
              className="block rounded-md px-3 py-3 hover:bg-foreground/5"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                    {b.name}
                    {b.external ? <ExternalLink className="h-3 w-3 text-muted-foreground/70" /> : null}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 truncate">{b.short}</div>
                </div>
                <span className={`font-mono-tech text-[10px] whitespace-nowrap ${b.status === 'LIVE' ? 'text-prime' : 'text-muted-foreground'}`}>{b.status}</span>
              </div>
            </Link>
          ))}
          <Link href="/brands" className="block rounded-md px-3 py-2 text-xs text-prime hover:bg-foreground/5 font-mono-tech">VIEW ALL BRANDS →</Link>
        </div>
      )
    }
    return null
  }

  return (
    <header className={`sticky top-0 z-50 transition-colors ${scrolled ? 'bg-background/85 backdrop-blur border-b border-border/60' : 'bg-transparent'}`}>
      <div className="container flex h-16 items-center justify-between">
        <Logo COMPANY={COMPANY} />

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => l.dropdown ? (
            <div
              key={l.label}
              className="relative"
              onMouseEnter={() => setOpenDrop(l.dropdown)}
              onMouseLeave={() => setOpenDrop(null)}
            >
              <Link href={l.href} className="px-4 py-2 text-sm text-foreground/90 hover:text-foreground inline-flex items-center gap-1">
                {l.label} <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              {openDrop === l.dropdown && (
                <div className="absolute left-0 top-full pt-2">
                  {renderDropdown(l.dropdown)}
                </div>
              )}
            </div>
          ) : (
            <Link key={l.label} href={l.href} className="px-4 py-2 text-sm text-foreground/90 hover:text-foreground">{l.label}</Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link href="/contact">
            <Button variant="ghost" className="text-foreground hover:bg-foreground/5 hover:text-foreground">Enquire</Button>
          </Link>
          <Link href="/apply">
            <Button className="bg-prime text-black hover:bg-prime-300 font-semibold">Apply Now</Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button className="text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link key={l.label} href={l.href} className="py-2.5 text-foreground" onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
            <div className="pl-3 border-l border-border mt-1">
              <div className="font-mono-tech text-[10px] text-muted-foreground/70 mt-1 mb-0.5">CBSE</div>
              {[10, 9, 8, 7, 6, 5].map((cls) => (
                <Link key={cls} href={`/cbse/class/${cls}`} className="block py-1.5 text-sm text-muted-foreground" onClick={() => setOpen(false)}>• Class {cls}</Link>
              ))}
              <div className="font-mono-tech text-[10px] text-muted-foreground/70 mt-3 mb-0.5">PROGRAMS</div>
              {PROGRAMS.map((p) => (
                <Link key={p.slug} href={`/courses/${p.slug}`} className="block py-1.5 text-sm text-muted-foreground" onClick={() => setOpen(false)}>• {p.name}</Link>
              ))}
              <div className="font-mono-tech text-[10px] text-muted-foreground/70 mt-3 mb-0.5">BRANDS</div>
              {BRANDS.map((b) => (
                <Link
                  key={b.slug}
                  href={b.href}
                  target={b.external ? '_blank' : undefined}
                  rel={b.external ? 'noopener noreferrer' : undefined}
                  className="block py-1.5 text-sm text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  • {b.name} <span className="text-[10px] text-muted-foreground/60">{b.status}</span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-3">
              <div className="flex gap-2">
                <Link href="/contact" className="flex-1"><Button variant="outline" className="w-full border-border">Enquire</Button></Link>
                <Link href="/apply" className="flex-1"><Button className="w-full bg-prime text-black hover:bg-prime-300">Apply Now</Button></Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
