import Link from 'next/link'
import { Linkedin, Instagram, Youtube, Twitter } from 'lucide-react'
import Logo from './Logo'

export default function Footer({ COMPANY = {}, PROGRAMS = [] }) {
  const socials = COMPANY.socials || {}

  return (
    <footer className="border-t border-border bg-surface-2 mt-24">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="md:col-span-1">
            <Logo COMPANY={COMPANY} />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{COMPANY.tagline}</p>
            <div className="mt-5 flex gap-3">
              {socials.linkedin && <a href={socials.linkedin} aria-label="LinkedIn" className="p-2 rounded-md border border-border hover:border-prime hover:text-prime text-foreground/80 transition"><Linkedin className="h-4 w-4" /></a>}
              {socials.instagram && <a href={socials.instagram} aria-label="Instagram" className="p-2 rounded-md border border-border hover:border-prime hover:text-prime text-foreground/80 transition"><Instagram className="h-4 w-4" /></a>}
              {socials.youtube && <a href={socials.youtube} aria-label="YouTube" className="p-2 rounded-md border border-border hover:border-prime hover:text-prime text-foreground/80 transition"><Youtube className="h-4 w-4" /></a>}
              {socials.twitter && <a href={socials.twitter} aria-label="X" className="p-2 rounded-md border border-border hover:border-prime hover:text-prime text-foreground/80 transition"><Twitter className="h-4 w-4" /></a>}
            </div>
          </div>

          <div>
            <div className="font-mono-tech text-[11px] text-prime tracking-widest mb-4">QUICK LINKS</div>
            <ul className="space-y-2.5 text-sm text-foreground/80">
              <li><Link href="/courses" className="hover:text-foreground">Programs</Link></li>
              <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="/about" className="hover:text-foreground">About</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link href="/apply" className="hover:text-foreground">Apply Now</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-mono-tech text-[11px] text-prime tracking-widest mb-4">PROGRAMS</div>
            <ul className="space-y-2.5 text-sm text-foreground/80">
              {PROGRAMS.map((p) => (
                <li key={p.slug}><Link href={`/courses/${p.slug}`} className="hover:text-foreground">{p.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono-tech text-[11px] text-prime tracking-widest mb-4">BRANDS</div>
            <ul className="space-y-2.5 text-sm text-foreground/80">
              <li><a href="https://legendium.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Legendium ↗</a></li>
              <li><Link href="/brands/kyro" className="hover:text-foreground">KYRO</Link></li>
              <li><Link href="/brands" className="hover:text-foreground">All Brands</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-mono-tech text-[11px] text-prime tracking-widest mb-4">CONTACT</div>
            <ul className="space-y-2.5 text-sm text-foreground/80">
              <li>{COMPANY.city}</li>
              <li><a href={`mailto:${COMPANY.email}`} className="hover:text-foreground">{COMPANY.email}</a></li>
              <li><a href={`tel:${COMPANY.phone}`} className="hover:text-foreground">{COMPANY.phone}</a></li>
              <li><a href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage || '')}`} className="text-prime hover:underline">WhatsApp us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground/80">
          <div>© 2026 {COMPANY.name}. A {COMPANY.parent} Company.</div>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
