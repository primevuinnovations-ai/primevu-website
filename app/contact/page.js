import { getGlobalSettings } from '@/lib/wordpress'
import ContactClient from './ContactClient'



export const metadata = {
  title: 'Contact — Talk to us | PrimeVU',
  description: 'Questions about a program, fees, batch dates, or scholarships? We respond within 24 hours.',
}

export default async function ContactPage() {
  const settings = await getGlobalSettings()
  return <ContactClient COMPANY={settings.company} />
}
