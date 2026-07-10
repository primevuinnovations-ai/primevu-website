'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CheckCircle2, FileUp, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export default function ApplyClient({ COMPANY, PROGRAMS }) {
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', program: '', educationStatus: '',
    college: '', city: '', source: '', message: '',
    resumeFileName: '', resumeBase64: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const setField = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const onFile = (e) => {
    const f = e.target.files?.[0]
    if (!f) return
    const allowed = ['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowed.includes(f.type) && !/\.(pdf|docx?|DOCX?|PDF)$/.test(f.name)) {
      toast.error('Please upload a PDF, DOC or DOCX file.')
      return
    }
    if (f.size > 5 * 1024 * 1024) {
      toast.error('File must be under 5MB.')
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      setField('resumeFileName', f.name)
      setField('resumeBase64', String(reader.result))
    }
    reader.readAsDataURL(f)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.fullName || !form.email || !form.phone || !form.program || !form.educationStatus) {
      toast.error('Please fill in all required fields.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.message || 'Submission failed')
      setDone(true)
      toast.success(data.message || 'Application received. Our admissions team will reach out within 24 hours.')
    } catch (err) {
      toast.error(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 radial-prime" />
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-prime/15 border border-prime/30">
              <CheckCircle2 className="h-8 w-8 text-prime" />
            </div>
            <h1 className="mt-6 text-3xl md:text-5xl font-bold">Application received!</h1>
            <p className="mt-4 text-muted-foreground md:text-lg">Thank you, {form.fullName.split(' ')[0]}. Our admissions team will get in touch with you within 24 hours.</p>
            <p className="mt-3 text-sm text-muted-foreground/80">Want to chat now? Reach us on WhatsApp.</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent('Hi, I just submitted my application.')}`} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] text-foreground hover:bg-[#1ebe57]">WhatsApp Admissions</Button>
              </a>
              <Link href="/courses"><Button variant="outline" className="border-border text-foreground hover:bg-foreground/5 hover:text-foreground">Browse Programs</Button></Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div>
      <section className="relative border-b border-border/60 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 radial-prime" />
        <div className="container relative pt-20 pb-12">
          <div className="font-mono-tech text-[11px] tracking-widest text-prime">APPLY</div>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">Start your application.</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">A {`\u20B92,000`} application fee secures your seat in the screening queue. It is fully adjusted against your program fee on enrolment.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-surface p-6 md:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label className="text-foreground/90">Full Name *</Label>
                <Input value={form.fullName} onChange={(e) => setField('fullName', e.target.value)} className="mt-2 bg-background border-border h-11" placeholder="Your full name" required />
              </div>
              <div>
                <Label className="text-foreground/90">Email *</Label>
                <Input type="email" value={form.email} onChange={(e) => setField('email', e.target.value)} className="mt-2 bg-background border-border h-11" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label className="text-foreground/90">Phone *</Label>
                <div className="mt-2 flex items-center rounded-md border border-border bg-background">
                  <span className="px-3 text-muted-foreground font-mono-tech text-sm">+91</span>
                  <Input value={form.phone} onChange={(e) => setField('phone', e.target.value)} className="border-0 bg-transparent h-11" placeholder="98765 43210" required />
                </div>
              </div>
              <div>
                <Label className="text-foreground/90">Program of Interest *</Label>
                <Select value={form.program} onValueChange={(v) => setField('program', v)}>
                  <SelectTrigger className="mt-2 bg-background border-border h-11"><SelectValue placeholder="Choose a program" /></SelectTrigger>
                  <SelectContent>
                    {PROGRAMS.map((p) => <SelectItem key={p.slug} value={p.name}>{p.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label className="text-foreground/90">Current Status *</Label>
                <Select value={form.educationStatus} onValueChange={(v) => setField('educationStatus', v)}>
                  <SelectTrigger className="mt-2 bg-background border-border h-11"><SelectValue placeholder="Select status" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Final Year Student">Final Year Student</SelectItem>
                    <SelectItem value="Recent Graduate">Recent Graduate</SelectItem>
                    <SelectItem value="Working Professional">Working Professional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-foreground/90">College / University</Label>
                <Input value={form.college} onChange={(e) => setField('college', e.target.value)} className="mt-2 bg-background border-border h-11" placeholder="Your institution" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label className="text-foreground/90">City</Label>
                <Input value={form.city} onChange={(e) => setField('city', e.target.value)} className="mt-2 bg-background border-border h-11" placeholder="e.g., Kochi" />
              </div>
              <div>
                <Label className="text-foreground/90">How did you hear about us?</Label>
                <Select value={form.source} onValueChange={(v) => setField('source', v)}>
                  <SelectTrigger className="mt-2 bg-background border-border h-11"><SelectValue placeholder="Select source" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Instagram">Instagram</SelectItem>
                    <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                    <SelectItem value="YouTube">YouTube</SelectItem>
                    <SelectItem value="Friend / Referral">Friend / Referral</SelectItem>
                    <SelectItem value="College Outreach">College Outreach</SelectItem>
                    <SelectItem value="Search Engine">Search Engine</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label className="text-foreground/90">Resume (PDF, DOC, DOCX — max 5MB)</Label>
              <label className="mt-2 flex items-center gap-3 cursor-pointer rounded-md border border-dashed border-border bg-background p-4 hover:border-prime/50 transition">
                <FileUp className="h-5 w-5 text-prime" />
                <span className="text-sm text-foreground/80">{form.resumeFileName || 'Click to upload your resume'}</span>
                <input type="file" accept=".pdf,.doc,.docx" onChange={onFile} className="hidden" />
              </label>
            </div>

            <div>
              <Label className="text-foreground/90">Message / Questions (optional)</Label>
              <Textarea value={form.message} onChange={(e) => setField('message', e.target.value)} className="mt-2 bg-background border-border min-h-[120px]" placeholder="Anything you want admissions to know" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground/80 font-mono-tech">{`\u20B92,000`} APPLICATION FEE · ADJUSTED AGAINST PROGRAM FEE</p>
              <Button type="submit" disabled={submitting} className="bg-prime text-black hover:bg-prime-300 font-semibold h-12 px-7">
                {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting</> : 'Submit Application'}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
