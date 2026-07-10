import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BookOpen, ArrowLeft } from 'lucide-react'
import SectionHeading from '@/components/site/SectionHeading'
import { getCBSESubjectsByClass, getCBSEClassIds } from '@/lib/wordpress'





export function generateMetadata({ params }) {
  const classId = params.id
  return {
    title: `CBSE Class ${classId} Subjects | PrimeVU`,
    description: `Explore subjects for CBSE Class ${classId}`,
  }
}

export default async function CBSEClassPage({ params }) {
  const classId = params.id
  
  if (!getCBSEClassIds().includes(classId)) {
    notFound()
  }

  const subjects = await getCBSESubjectsByClass(classId)

  return (
    <div className="bg-background selection:bg-prime/30 min-h-screen">
      <section className="relative overflow-hidden border-b border-border/40 py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-prime/[0.05] to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-prime/10 via-transparent to-transparent" />
        <div className="absolute -top-40 right-0 h-[600px] w-[700px] rounded-full bg-prime/10 blur-[140px] pointer-events-none" />
        
        <div className="container relative pt-10">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-prime transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          
          <div className="inline-flex items-center gap-2 rounded-full border border-prime/30 bg-background/50 backdrop-blur-md px-4 py-1.5 shadow-sm mb-6">
            <span className="font-mono-tech text-[11px] tracking-widest text-prime font-bold">CBSE CURRICULUM</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.0] drop-shadow-sm">Class {classId}</h1>
          <p className="mt-6 text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl">
            Select a subject to explore the syllabus, study materials, and learning modules for Class {classId}.
          </p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container relative">
          <SectionHeading eyebrow="SUBJECTS" title="Available Subjects" />
          
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {subjects.map((subject) => {
              return (
                <Link key={subject.slug} href={`/cbse/class/${classId}/${subject.slug}`}>
                  <div className="group h-full rounded-[2rem] border border-border/50 bg-surface p-8 shadow-sm hover:shadow-lg hover:border-prime/30 transition-all duration-300 flex flex-col items-center justify-center text-center gap-5">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-background border border-border/60 text-prime shadow-sm group-hover:scale-110 group-hover:border-prime/30 group-hover:shadow-prime/10 transition-all duration-300">
                      <BookOpen className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-2xl tracking-tight text-foreground group-hover:text-prime transition-colors">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground">{subject.description || 'View details & syllabus'}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
