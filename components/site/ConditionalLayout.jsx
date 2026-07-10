'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

export default function ConditionalLayout({ children, settings = {}, programs = [], brands = [] }) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')
  const COMPANY = settings.company || {}

  if (isAdmin) {
    return <main className="min-h-screen">{children}</main>
  }

  return (
    <>
      <Navbar COMPANY={COMPANY} PROGRAMS={programs} BRANDS={brands} />
      <main className="min-h-screen">{children}</main>
      <Footer COMPANY={COMPANY} PROGRAMS={programs} />
      <WhatsAppButton COMPANY={COMPANY} />
    </>
  )
}
