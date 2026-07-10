import { getGlobalSettings, getAllPrograms } from '@/lib/wordpress'
import ApplyClient from './ApplyClient'



export const metadata = {
  title: 'Apply — PrimeVU',
  description: 'Start your application for PrimeVU career acceleration programs.',
}

export default async function ApplyPage() {
  const [settings, programs] = await Promise.all([
    getGlobalSettings(),
    getAllPrograms(),
  ])

  return <ApplyClient COMPANY={settings.company} PROGRAMS={programs} />
}
