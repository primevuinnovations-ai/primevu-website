import './globals.css'
import ConditionalLayout from '@/components/site/ConditionalLayout'
import ThemeProvider from '@/components/site/ThemeProvider'
import { Toaster } from '@/components/ui/sonner'
import { getGlobalSettings, getAllPrograms, getAllBrands } from '@/lib/wordpress'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'PrimeVU — Career Acceleration in 90 Days | AI, NetSuite, Robotics',
  description: 'PrimeVU Innovations is a career acceleration institute offering full-time 3-month programs in AI & ML, NetSuite Administration and Robotics. A Jobin & Jismi company, based in Chalakudy, Kerala.',
  openGraph: {
    title: 'PrimeVU — Career Acceleration in 90 Days',
    description: 'Full-time, placement-linked 3-month programs in AI & ML, NetSuite, and Robotics.',
    type: 'website',
  },
}

export default async function RootLayout({ children }) {
  const [settings, programs, brands] = await Promise.all([
    getGlobalSettings(),
    getAllPrograms(),
    getAllBrands(),
  ])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="bg-background text-foreground antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <ConditionalLayout settings={settings} programs={programs} brands={brands}>
            {children}
          </ConditionalLayout>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
