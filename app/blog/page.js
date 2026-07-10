import { getAllPosts, getBlogCategories } from '@/lib/wordpress'
import BlogClient from './BlogClient'



export const metadata = {
  title: 'Blog — PrimeVU Journal',
  description: 'Ideas, stories, and frameworks from the PrimeVU team — on careers, technology, and the craft of getting hired.',
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getBlogCategories(),
  ])

  return <BlogClient posts={posts} categories={categories} />
}
