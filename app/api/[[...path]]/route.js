import { NextResponse } from 'next/server'


const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || ''

function handleCORS(response) {
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  return response
}

export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 200 }))
}

async function handleRoute(request, { params }) {
  const { path = [] } = params
  const route = `/${path.join('/')}`
  const method = request.method

  try {
    if (route === '/applications' && method === 'POST') {
      const body = await request.json()
      if (!WP_URL) {
        return handleCORS(NextResponse.json({ ok: true, message: 'Application received in offline mode (WP not connected).' }))
      }
      
      const formData = new URLSearchParams()
      formData.append('your-name', body.fullName)
      formData.append('your-email', body.email)
      formData.append('your-phone', body.phone)
      formData.append('your-program', body.program)
      formData.append('your-status', body.educationStatus)
      formData.append('your-college', body.college || '')
      formData.append('your-city', body.city || '')
      formData.append('your-source', body.source || '')
      formData.append('your-message', body.message || '')
      if (body.resumeBase64) {
        formData.append('resume-base-64', body.resumeBase64)
        formData.append('resume-name', body.resumeFileName)
      }

      const res = await fetch(`${WP_URL}/wp-json/contact-form-7/v1/contact-forms/2/feedback`, {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      return handleCORS(NextResponse.json({ ok: data.status === 'mail_sent', message: data.message }))
    }

    if (route === '/contact' && method === 'POST') {
      const body = await request.json()
      if (!WP_URL) {
        return handleCORS(NextResponse.json({ ok: true, message: 'Message received in offline mode (WP not connected).' }))
      }

      const formData = new URLSearchParams()
      formData.append('your-name', body.name)
      formData.append('your-email', body.email)
      formData.append('your-phone', body.phone || '')
      formData.append('your-subject', body.subject || '')
      formData.append('your-message', body.message)

      const res = await fetch(`${WP_URL}/wp-json/contact-form-7/v1/contact-forms/1/feedback`, {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      return handleCORS(NextResponse.json({ ok: data.status === 'mail_sent', message: data.message }))
    }

    return handleCORS(NextResponse.json({ error: `Route ${route} not found` }, { status: 404 }))
  } catch (error) {
    console.error('API Proxy Error:', error)
    return handleCORS(NextResponse.json({ error: 'Internal server error' }, { status: 500 }))
  }
}

export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
export const PATCH = handleRoute
