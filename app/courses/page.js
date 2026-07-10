import { getAllPrograms, getAllFaqs } from '@/lib/wordpress'
import CoursesClient from './CoursesClient'



export const metadata = {
  title: 'Programs — PrimeVU',
  description: 'Explore PrimeVU\'s intensive 90-day programs in AI & Machine Learning, NetSuite Administration, and Robotics.',
}

export default async function CoursesPage() {
  const [programs, faqs] = await Promise.all([
    getAllPrograms(),
    getAllFaqs(),
  ])

  return <CoursesClient programs={programs} faqs={faqs} />
}
