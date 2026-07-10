import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CheckCircle2, FileText, Video, PenTool } from 'lucide-react'
import SectionHeading from '@/components/site/SectionHeading'
import { Button } from '@/components/ui/button'
import { getCBSESubjectsByClass, getCBSEClassIds } from '@/lib/wordpress'





export async function generateMetadata({ params }) {
  const classId = params.id
  const subjectSlug = params.subject
  const subjects = await getCBSESubjectsByClass(classId)
  const subject = subjects.find(s => s.slug === subjectSlug)
  const subjectName = subject ? subject.name : subjectSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  
  return {
    title: `Class ${classId} ${subjectName} | PrimeVU CBSE`,
    description: `Comprehensive study materials and syllabus for CBSE Class ${classId} ${subjectName}`,
  }
}

export default async function CBSESubjectPage({ params }) {
  const classId = params.id
  const subjectSlug = params.subject
  
  if (!getCBSEClassIds().includes(classId)) {
    notFound()
  }

  const subjects = await getCBSESubjectsByClass(classId)
  const subject = subjects.find(s => s.slug === subjectSlug)
  
  if (!subject) {
    notFound()
  }

  const features = [
    { icon: FileText, title: 'Chapter Notes', desc: 'Detailed notes covering every concept from the NCERT syllabus.' },
    { icon: Video, title: 'Video Lectures', desc: 'Interactive video sessions to understand complex topics easily.' },
    { icon: PenTool, title: 'Practice Tests', desc: 'Chapter-wise tests to evaluate your understanding and prep for exams.' },
    { icon: CheckCircle2, title: 'NCERT Solutions', desc: 'Step-by-step solutions for all NCERT textbook exercises.' }
  ]

  return (
    <div className="bg-background selection:bg-prime/30 min-h-screen">
      <section className="relative overflow-hidden border-b border-border/40 py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-prime/[0.05] to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-prime/10 via-transparent to-transparent" />
        <div className="absolute -top-40 right-0 h-[600px] w-[700px] rounded-full bg-prime/10 blur-[140px] pointer-events-none" />
        
        <div className="container relative pt-10">
          <Link href={`/cbse/class/${classId}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-prime transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Class {classId}
          </Link>
          
          <div className="inline-flex items-center gap-2 rounded-full border border-prime/30 bg-background/50 backdrop-blur-md px-4 py-1.5 shadow-sm mb-6">
            <span className="font-mono-tech text-[11px] tracking-widest text-prime font-bold">CLASS {classId} • CBSE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.0] drop-shadow-sm">{subject.name}</h1>
          <p className="mt-6 text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl">
            Master {subject.name} with comprehensive notes, video lectures, and practice tests designed for CBSE students.
          </p>
          
          <div className="mt-10 flex gap-4">
            <Button size="lg" className="bg-prime text-black hover:bg-prime-300 font-bold h-14 px-8 shadow-lg shadow-prime/20 hover:scale-105 transition-all">
              Start Learning
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 border-border/80 text-foreground hover:bg-surface font-semibold transition-colors">
              View Syllabus
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 relative bg-surface/30">
        <div className="container relative">
          <SectionHeading eyebrow="RESOURCES" title="What's included?" />
          
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, i) => (
              <div key={i} className="group rounded-[2rem] border border-border/50 bg-background/50 backdrop-blur-md p-8 shadow-sm hover:shadow-lg hover:border-prime/30 transition-all duration-300">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface border border-border/60 text-prime shadow-sm group-hover:scale-110 group-hover:border-prime/30 group-hover:shadow-prime/10 transition-all duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-bold text-xl tracking-tight text-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 border-y border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-prime/5 via-transparent to-transparent opacity-80" />
        <div className="container relative text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to excel in {subject.name}?</h2>
          <p className="mt-6 text-xl text-muted-foreground">
            Join thousands of students who are achieving top scores with PrimeVU's CBSE curriculum.
          </p>
          <div className="mt-10 flex justify-center">
            <Button size="lg" className="bg-prime text-black hover:bg-prime-300 font-bold h-14 px-10 shadow-lg shadow-prime/20 hover:scale-105 transition-all text-lg">
              Enroll Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
