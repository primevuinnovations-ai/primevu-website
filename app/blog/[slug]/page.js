import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Clock, User, Calendar, Linkedin, Twitter } from 'lucide-react'
import { getPostBySlug, getPostSlugs, getAllPosts, getGlobalSettings } from '@/lib/wordpress'





export async function generateMetadata({ params }) {
  const p = await getPostBySlug(params.slug)
  if (!p) return { title: 'Post — PrimeVU' }
  return { title: `${p.title} — PrimeVU`, description: p.excerpt }
}

export default async function App({ params }) {
  const [post, allPosts, settings] = await Promise.all([
    getPostBySlug(params.slug),
    getAllPosts(),
    getGlobalSettings(),
  ])

  if (!post) return notFound()

  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const COMPANY = settings.company
  const shareUrl = `${(COMPANY.shortName || '').toLowerCase()}.in/blog/${post.slug}`

  return (
    <div>
      <article className="relative">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-prime/[0.07] to-transparent pointer-events-none" />
        <div className="container relative pt-12 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-prime"><ArrowLeft className="h-3.5 w-3.5" /> Back to Journal</Link>
          <div className="mt-8 font-mono-tech text-[11px] tracking-widest text-prime">{(post.category || '').toUpperCase()}</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-balance">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" />{post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
          </div>
        </div>

        <div className="container mt-10 max-w-5xl">
          <div className="aspect-[21/9] overflow-hidden rounded-2xl border border-border">
            <img src={post.cover} alt={post.title} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="container mt-10 max-w-3xl pb-10">
          <p className="text-xl text-foreground/85 leading-relaxed mb-6">{post.excerpt}</p>
          <div 
            className="prose prose-sky dark:prose-invert max-w-none text-foreground/85 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 flex items-center justify-between pt-6 border-t border-border">
            <div className="font-mono-tech text-[11px] tracking-widest text-muted-foreground/80">SHARE</div>
            <div className="flex gap-2">
              <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' — ' + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-border hover:border-prime text-foreground/80 hover:text-prime transition">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-border hover:border-prime text-foreground/80 hover:text-prime transition"><Linkedin className="h-4 w-4" /></a>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-border hover:border-prime text-foreground/80 hover:text-prime transition"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </article>

      {related.length ? (
        <section className="py-20 border-t border-border/60 bg-surface-2">
          <div className="container">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl md:text-3xl font-bold">Related posts</h2>
              <Link href="/blog" className="text-prime text-sm inline-flex items-center gap-1">All posts <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-xl border border-border bg-background overflow-hidden card-hover">
                  <div className="aspect-[16/10] overflow-hidden"><img src={p.cover} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-105" /></div>
                  <div className="p-5">
                    <div className="font-mono-tech text-[10px] text-prime">{(p.category || '').toUpperCase()}</div>
                    <div className="mt-2 font-semibold leading-snug group-hover:text-prime transition">{p.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Like what you read?</h2>
          <p className="mt-3 text-muted-foreground">Explore programs designed by people who think like this.</p>
          <div className="mt-7"><Link href="/courses"><Button size="lg" className="bg-prime text-black hover:bg-prime-300 font-semibold h-12 px-7">Explore Programs <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div>
        </div>
      </section>
    </div>
  )
}
