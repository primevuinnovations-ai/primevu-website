'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MapPin, Clock, Loader2, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'

export default function ContactClient({ COMPANY }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in name, email and message.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.message || 'Submission failed')
      setDone(true)
      toast.success(data.message || 'Message sent. We will get back within 24 hours.')
    } catch (err) {
      toast.error(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <section className="relative border-b border-border/60 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 radial-prime" />
        <div className="container relative pt-20 pb-12">
          <div className="font-mono-tech text-[11px] tracking-widest text-prime">CONTACT</div>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">Talk to us.</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">Questions about a program, fees, batch dates, or scholarships? We respond within 24 hours.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            {done ? (
              <div className="rounded-2xl border border-prime/30 bg-prime/5 p-8 text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-prime/15 border border-prime/30"><CheckCircle2 className="h-7 w-7 text-prime" /></div>
                <h2 className="mt-5 text-2xl font-bold">Message received.</h2>
                <p className="mt-2 text-muted-foreground">Thanks {form.name.split(' ')[0]}. We'll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="rounded-2xl border border-border bg-surface p-6 md:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><Label className="text-foreground/90">Name *</Label><Input value={form.name} onChange={(e) => set('name', e.target.value)} className="mt-2 bg-background border-border h-11" required /></div>
                  <div><Label className="text-foreground/90">Email *</Label><Input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} className="mt-2 bg-background border-border h-11" required /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><Label className="text-foreground/90">Phone</Label><Input value={form.phone} onChange={(e) => set('phone', e.target.value)} className="mt-2 bg-background border-border h-11" /></div>
                  <div><Label className="text-foreground/90">Subject</Label><Input value={form.subject} onChange={(e) => set('subject', e.target.value)} className="mt-2 bg-background border-border h-11" /></div>
                </div>
                <div><Label className="text-foreground/90">Message *</Label><Textarea value={form.message} onChange={(e) => set('message', e.target.value)} className="mt-2 bg-background border-border min-h-[140px]" required /></div>
                <Button type="submit" disabled={submitting} className="bg-prime text-black hover:bg-prime-300 font-semibold h-12 px-7">
                  {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending</> : 'Send Message'}
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-4">
            <a href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-[#25D366]/40 bg-[#25D366]/5 p-6 hover:bg-[#25D366]/10 transition">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366]"><svg viewBox="0 0 24 24" className="h-5 w-5 text-foreground" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg></div>
                <div><div className="font-semibold">Chat with us on WhatsApp</div><div className="text-sm text-muted-foreground">Fastest response time</div></div>
              </div>
            </a>

            <div className="rounded-xl border border-border bg-surface p-6 space-y-5">
              <div className="flex items-start gap-3"><MapPin className="h-4 w-4 text-prime mt-1" /><div><div className="font-mono-tech text-[10px] text-muted-foreground/80">ADDRESS</div><div className="mt-1">{COMPANY.city}</div></div></div>
              <div className="flex items-start gap-3"><Mail className="h-4 w-4 text-prime mt-1" /><div><div className="font-mono-tech text-[10px] text-muted-foreground/80">EMAIL</div><a href={`mailto:${COMPANY.email}`} className="mt-1 block hover:text-prime">{COMPANY.email}</a></div></div>
              <div className="flex items-start gap-3"><Phone className="h-4 w-4 text-prime mt-1" /><div><div className="font-mono-tech text-[10px] text-muted-foreground/80">PHONE</div><a href={`tel:${COMPANY.phone}`} className="mt-1 block hover:text-prime">{COMPANY.phone}</a></div></div>
              <div className="flex items-start gap-3"><Clock className="h-4 w-4 text-prime mt-1" /><div><div className="font-mono-tech text-[10px] text-muted-foreground/80">HOURS</div><div className="mt-1">Mon–Sat · 10:00 AM – 6:00 PM IST</div></div></div>
            </div>

            <div className="rounded-xl border border-border bg-surface overflow-hidden aspect-[4/3]">
              <iframe src="https://www.google.com/maps?q=Chalakudy,Kerala,India&output=embed" className="h-full w-full grayscale opacity-80" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
