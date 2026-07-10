// ============================================================
// WordPress GraphQL Client
// ============================================================
// When WORDPRESS_GRAPHQL_URL is set, data is fetched from WP.
// When it is empty (no WP instance yet), fallback data is used.
// ============================================================

import * as fallback from './fallback-data'

const GRAPHQL_URL = process.env.WORDPRESS_GRAPHQL_URL || ''

// ── Core fetcher ─────────────────────────────────────────────

async function fetchGraphQL(query, variables = {}) {
  if (!GRAPHQL_URL) return null

  try {
    const res = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      cache: 'no-store',
    })

    if (!res.ok) return null
    const json = await res.json()
    return json.data ?? null
  } catch {
    return null
  }
}

// ── Global Settings (ACF Options Page) ───────────────────────

const GLOBAL_SETTINGS_QUERY = `
  query GlobalSettings {
    acfOptionsGlobalSettings {
      globalSettings {
        companyName
        parentCompany
        shortName
        tagline
        city
        email
        phone
        whatsappNumber
        whatsappMessage
        nextBatchDate
        applicationFee
        logo { sourceUrl altText }
        logoMark { sourceUrl altText }
        linkedin
        instagram
        youtube
        twitter
        stats { label value suffix }
        whyFeatures { title body icon }
        howSteps { number title body }
      }
    }
  }
`

export async function getGlobalSettings() {
  const data = await fetchGraphQL(GLOBAL_SETTINGS_QUERY)
  if (data?.acfOptionsGlobalSettings?.globalSettings) {
    const s = data.acfOptionsGlobalSettings.globalSettings
    return {
      company: {
        name: s.companyName,
        parent: s.parentCompany,
        shortName: s.shortName,
        tagline: s.tagline,
        city: s.city,
        email: s.email,
        phone: s.phone,
        whatsapp: s.whatsappNumber,
        whatsappMessage: s.whatsappMessage,
        nextBatch: s.nextBatchDate,
        applicationFee: s.applicationFee,
        logo: s.logo?.sourceUrl || '',
        logoMark: s.logoMark?.sourceUrl || '',
        socials: {
          linkedin: s.linkedin || '',
          instagram: s.instagram || '',
          youtube: s.youtube || '',
          twitter: s.twitter || '',
        },
      },
      stats: s.stats || [],
      whyFeatures: (s.whyFeatures || []).map(f => ({ title: f.title, body: f.body, icon: f.icon })),
      howSteps: (s.howSteps || []).map(s => ({ n: s.number, title: s.title, body: s.body })),
    }
  }
  return fallback.getGlobalSettingsFallback()
}

// ── Programs ─────────────────────────────────────────────────

const ALL_PROGRAMS_QUERY = `
  query AllPrograms {
    programs(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        slug
        title
        programFields {
          tagline
          shortName
          category
          duration
          schedule
          fee
          feeNumber
          oneLiner
          description
          audience
          tools
          curriculum { weeks phase topics }
          outcomes
          faqs { question answer }
        }
      }
    }
  }
`

export async function getAllPrograms() {
  const data = await fetchGraphQL(ALL_PROGRAMS_QUERY)
  if (data?.programs?.nodes?.length) {
    return data.programs.nodes.map(mapProgram)
  }
  return fallback.PROGRAMS
}

export async function getProgramBySlug(slug) {
  const programs = await getAllPrograms()
  return programs.find(p => p.slug === slug) || null
}

export async function getProgramSlugs() {
  const programs = await getAllPrograms()
  return programs.map(p => ({ slug: p.slug }))
}

function mapProgram(node) {
  const f = node.programFields || {}
  return {
    slug: node.slug,
    name: node.title,
    short: f.shortName || node.title,
    category: f.category || '',
    tagline: f.tagline || '',
    duration: f.duration || '',
    schedule: f.schedule || '',
    fee: f.fee || '',
    feeNumber: f.feeNumber || 0,
    oneLiner: f.oneLiner || '',
    description: f.description || '',
    audience: f.audience || '',
    tools: f.tools || [],
    curriculum: (f.curriculum || []).map(c => ({
      weeks: c.weeks,
      phase: c.phase,
      topics: c.topics || [],
    })),
    outcomes: f.outcomes || [],
    faqs: (f.faqs || []).map(faq => ({ q: faq.question, a: faq.answer })),
  }
}

// ── Brands ───────────────────────────────────────────────────

const ALL_BRANDS_QUERY = `
  query AllBrands {
    brands(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        slug
        title
        brandFields {
          tagline
          shortDescription
          fullDescription
          externalUrl
          isExternal
          status
          accentColor
          coverImage { sourceUrl altText }
          gallery { sourceUrl altText }
          highlights
          audience
        }
      }
    }
  }
`

export async function getAllBrands() {
  const data = await fetchGraphQL(ALL_BRANDS_QUERY)
  if (data?.brands?.nodes?.length) {
    return data.brands.nodes.map(mapBrand)
  }
  return fallback.BRANDS
}

export async function getBrandBySlug(slug) {
  const brands = await getAllBrands()
  return brands.find(b => b.slug === slug) || null
}

function mapBrand(node) {
  const f = node.brandFields || {}
  return {
    slug: node.slug,
    name: node.title,
    tagline: f.tagline || '',
    short: f.shortDescription || '',
    description: f.fullDescription || '',
    href: f.isExternal ? (f.externalUrl || '#') : `/brands/${node.slug}`,
    external: f.isExternal || false,
    status: f.status || 'COMING SOON',
    accent: f.accentColor || '#67CCE5',
    cover: f.coverImage?.sourceUrl || '',
    gallery: (f.gallery || []).map(g => g.sourceUrl),
    highlights: f.highlights || [],
    audience: f.audience || '',
  }
}

// ── Blog Posts (WP native posts) ─────────────────────────────

const ALL_POSTS_QUERY = `
  query AllPosts {
    posts(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        slug
        title
        date
        excerpt
        content
        featuredImage { node { sourceUrl altText } }
        categories { nodes { name slug } }
        author { node { name } }
        blogFields {
          readTime
          featured
        }
      }
    }
  }
`

export async function getAllPosts() {
  const data = await fetchGraphQL(ALL_POSTS_QUERY)
  if (data?.posts?.nodes?.length) {
    return data.posts.nodes.map(mapPost)
  }
  return fallback.BLOG_POSTS
}

export async function getPostBySlug(slug) {
  const posts = await getAllPosts()
  return posts.find(p => p.slug === slug) || null
}

export async function getPostSlugs() {
  const posts = await getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

function mapPost(node) {
  const f = node.blogFields || {}
  return {
    slug: node.slug,
    title: node.title,
    category: node.categories?.nodes?.[0]?.name || 'Uncategorized',
    date: node.date?.split('T')[0] || '',
    author: node.author?.node?.name || 'PrimeVU Editorial',
    readTime: f.readTime || '5 min read',
    excerpt: node.excerpt?.replace(/<[^>]+>/g, '') || '',
    cover: node.featuredImage?.node?.sourceUrl || '',
    featured: f.featured || false,
    content: node.content || '',
  }
}

// ── FAQs ─────────────────────────────────────────────────────

const ALL_FAQS_QUERY = `
  query AllFaqs($group: String) {
    faqs(first: 100, where: { faqGroupSlug: $group }) {
      nodes {
        title
        faqFields { answer }
        faqGroups { nodes { slug name } }
      }
    }
  }
`

export async function getAllFaqs(group = null) {
  const data = await fetchGraphQL(ALL_FAQS_QUERY, group ? { group } : {})
  if (data?.faqs?.nodes?.length) {
    return data.faqs.nodes.map(n => ({
      q: n.title,
      a: n.faqFields?.answer || '',
    }))
  }
  return fallback.GENERAL_FAQS
}

// ── CBSE ─────────────────────────────────────────────────────

const CBSE_SUBJECTS_QUERY = `
  query CBSESubjects($classId: String!) {
    cbseSubjects(first: 100, where: { cbseClassSlug: $classId }) {
      nodes {
        slug
        title
        cbseSubjectFields {
          description
        }
        cbseClasses { nodes { slug name } }
      }
    }
  }
`

export async function getCBSESubjectsByClass(classId) {
  const data = await fetchGraphQL(CBSE_SUBJECTS_QUERY, { classId: `class-${classId}` })
  if (data?.cbseSubjects?.nodes?.length) {
    return data.cbseSubjects.nodes.map(n => ({
      slug: n.slug,
      name: n.title,
      description: n.cbseSubjectFields?.description || '',
    }))
  }
  return fallback.getCBSESubjectsFallback(classId)
}

export function getCBSEClassIds() {
  return fallback.CBSE_CLASS_IDS
}

// ── Blog Categories ──────────────────────────────────────────

const BLOG_CATEGORIES_QUERY = `
  query BlogCategories {
    categories(first: 50) {
      nodes { name slug }
    }
  }
`

export async function getBlogCategories() {
  const data = await fetchGraphQL(BLOG_CATEGORIES_QUERY)
  if (data?.categories?.nodes?.length) {
    return ['All', ...data.categories.nodes.map(c => c.name)]
  }
  return fallback.BLOG_CATEGORIES
}

// ── Form Submission (WordPress REST API — CF7 / WPForms) ─────

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || ''

export async function submitContactForm(formData) {
  if (!WP_URL) {
    // Fallback: log and return success when WP not connected
    console.log('[Fallback] Contact form submission:', formData)
    return { ok: true, message: 'Message received (offline mode). We will connect this to WordPress once hosting is available.' }
  }

  try {
    // Uses Contact Form 7 REST API — form ID 1 by default
    const res = await fetch(`${WP_URL}/wp-json/contact-form-7/v1/contact-forms/1/feedback`, {
      method: 'POST',
      body: new URLSearchParams(formData),
    })
    const data = await res.json()
    return { ok: data.status === 'mail_sent', message: data.message }
  } catch {
    return { ok: false, message: 'Submission failed. Please try again.' }
  }
}

export async function submitApplication(formData) {
  if (!WP_URL) {
    console.log('[Fallback] Application submission:', formData)
    return { ok: true, message: 'Application received (offline mode). We will connect this to WordPress once hosting is available.' }
  }

  try {
    // Uses Contact Form 7 REST API — form ID 2 by default
    const res = await fetch(`${WP_URL}/wp-json/contact-form-7/v1/contact-forms/2/feedback`, {
      method: 'POST',
      body: new URLSearchParams(formData),
    })
    const data = await res.json()
    return { ok: data.status === 'mail_sent', message: data.message }
  } catch {
    return { ok: false, message: 'Submission failed. Please try again.' }
  }
}
