// ============================================================
// Fallback Data — Used when WordPress is not connected
// ============================================================
// This file contains the exact same data that was in site-data.js
// but serves as fallback when WORDPRESS_GRAPHQL_URL is empty.
// Once WordPress is populated, this file can be deleted.
// ============================================================

export const BRANDS = [
  {
    slug: 'legendium',
    name: 'Legendium',
    tagline: 'Learn robotics in VR. Build it in reality.',
    short: 'Gamified WebXR robotics lab paired with the NanoSpark hardware kit.',
    description: 'Legendium is a gamified WebXR robotics learning platform built for ages 14+. Solve circuit puzzles in immersive 3D, write real embedded C, then build the same projects with the NanoSpark kit. Made in Kerala, NEP 2020 ready, deployed in schools and Atal Tinkering Labs.',
    href: 'https://legendium.ai/',
    external: true,
    status: 'LIVE',
    accent: '#67CCE5',
    cover: '/legendium.png',
    gallery: [
      'https://legendium.ai/WebAssets/scenesimage/mysticforest.jpg',
      'https://legendium.ai/WebAssets/scenesimage/futuristiccity.jpg',
      'https://legendium.ai/WebAssets/scenesimage/undergroundlab.jpg',
    ],
    highlights: [
      'WebXR robotics simulator — desktop, web, and VR',
      'NanoSpark kit — Arduino-compatible, 15+ sensors',
      'Embedded C & Python — the real engineering stack',
      '20+ projects — simulation to physical build',
      'Made in Kerala · Free shipping across India',
      'Schools & ATL programs — bulk + teacher training',
    ],
    audience: 'Teenagers, robotics hobbyists, college students, STEM teachers, schools and Atal Tinkering Labs.',
  },
  {
    slug: 'cluereko',
    name: 'Cluereko',
    tagline: 'A new venture by PrimeVU.',
    short: 'Upcoming product line from PrimeVU.',
    description: "Cluereko is PrimeVU's upcoming venture.",
    href: '/brands/cluereko',
    external: false,
    status: 'COMING SOON',
    accent: '#67CCE5',
    cover: '/clureko.png',
    gallery: [
      'https://images.unsplash.com/photo-1610041321461-37a7d578ebad?w=1200&q=80',
      'https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71?w=1200&q=80',
    ],
    highlights: [
      'Designed and engineered in-house',
      'Launching soon',
    ],
    audience: 'Tech enthusiasts and creators.',
  },
]

const COMPANY = {
  name: 'PrimeVU Innovations Pvt Ltd',
  parent: 'Jobin & Jismi IT Services Pvt Ltd',
  shortName: 'PrimeVU',
  tagline: 'Career acceleration. Engineered for outcomes.',
  city: 'Chalakudy, Thrissur District, Kerala',
  email: 'admissions@primevu.in',
  phone: '+91 80000 00000',
  whatsapp: '919999999999',
  whatsappMessage: "Hi, I'm interested in PrimeVU programs.",
  socials: {
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com',
    youtube: 'https://www.youtube.com',
    twitter: 'https://x.com',
  },
  logo: 'https://customer-assets.emergentagent.com/job_97728379-e2b2-4585-9b4e-8a8c25fdce78/artifacts/6mnmoqfr_Primevu_Logo-01.png',
  logoMark: 'https://customer-assets.emergentagent.com/job_97728379-e2b2-4585-9b4e-8a8c25fdce78/artifacts/6rmbn2et_Primevu_Logo_Blk-01.png',
  nextBatch: 'August 18, 2025',
  applicationFee: 2000,
}

const STATS = [
  { label: 'Programs', value: '3', suffix: '' },
  { label: 'Days', value: '90', suffix: '' },
  { label: 'Hiring Partners', value: '100', suffix: '+' },
  { label: 'Feeder Colleges', value: '58', suffix: '+' },
]

export const PROGRAMS = [
  {
    slug: 'ai-machine-learning',
    name: 'AI & Machine Learning',
    short: 'AI & ML',
    category: 'AI & ML',
    tagline: 'From Python to production-grade ML and LLM systems.',
    duration: '3 Months',
    schedule: 'Full-time, 10am–6pm',
    fee: '\u20B975,000',
    feeNumber: 75000,
    oneLiner: 'Master classical ML, deep learning, and applied LLMs through hands-on capstone projects.',
    description: 'Build production-grade AI systems with Python, classical machine learning, deep learning, applied LLMs, and MLOps. Graduates target roles in ML engineering, data science, and AI product engineering.',
    audience: 'Final-year graduates and early-career engineers with basic programming familiarity.',
    outcomes: ['ML Engineer', 'Data Scientist', 'AI Product Engineer', 'LLM Application Developer'],
    tools: ['Python','TensorFlow','PyTorch','Scikit-learn','Pandas','NumPy','Jupyter','OpenAI','Hugging Face','MLflow','Keras','Google Colab','SQL','Power BI','LangChain'],
    curriculum: [
      { weeks: 'Weeks 1–3', phase: 'Foundations', topics: ['Python for ML', 'Math for ML (linear algebra, probability)', 'Data wrangling with Pandas/NumPy', 'Exploratory data analysis'] },
      { weeks: 'Weeks 4–6', phase: 'Applied Modules', topics: ['Classical ML (regression, trees, ensembles)', 'Model evaluation & feature engineering', 'Intro to deep learning with PyTorch/Keras', 'CNNs & RNNs'] },
      { weeks: 'Weeks 7–8', phase: 'Mid-point', topics: ['Applied LLMs with OpenAI & Hugging Face', 'Prompt engineering & RAG with LangChain', 'Vector databases', 'Mid-bootcamp assessment'] },
      { weeks: 'Weeks 9–12', phase: 'Capstone + Placement', topics: ['MLOps with MLflow & Docker', 'End-to-end capstone project', 'Mock interviews & portfolio review', 'Employer connect & placement week'] },
    ],
    faqs: [
      { q: 'Do I need to know coding before joining?', a: 'Comfort with basic Python is recommended. Our pre-bootcamp prep kit gets selected candidates up to speed before Week 1.' },
      { q: 'What programming languages will I learn?', a: 'Python is the primary language. You will also work with SQL and shell scripting for data and deployment workflows.' },
      { q: 'Will I build real projects?', a: 'Yes. Every module ships a working artifact, and the 4-week capstone produces an end-to-end deployed ML or LLM application.' },
      { q: 'What is the capstone project?', a: 'A real-world problem solved end-to-end: data → model → evaluation → deployment → documentation. Reviewed by industry mentors.' },
      { q: 'Will I work on LLMs?', a: 'Yes. Weeks 7–8 are dedicated to applied LLMs: prompt engineering, RAG pipelines with LangChain, and vector databases.' },
      { q: 'What hardware do I need?', a: 'A laptop is sufficient. We provide cloud GPU credits on Google Colab and AWS for compute-heavy workloads.' },
    ],
  },
  {
    slug: 'netsuite-administration',
    name: 'NetSuite Administration',
    short: 'NetSuite',
    category: 'NetSuite',
    tagline: 'Become a certified-ready NetSuite Administrator in 90 days.',
    duration: '3 Months',
    schedule: 'Full-time, 10am–6pm',
    fee: '\u20B975,000',
    feeNumber: 75000,
    oneLiner: 'Master Oracle NetSuite end-to-end — administration, SuiteScript, workflows, and integrations.',
    description: 'Designed and delivered with Jobin & Jismi — one of the largest NetSuite consulting partners in India. Learn NetSuite administration, SuiteScript, SuiteFlow, SuiteAnalytics, and enterprise integrations.',
    audience: 'Graduates seeking a high-leverage enterprise-software career in NetSuite.',
    outcomes: ['NetSuite Administrator', 'SuiteScript Developer', 'NetSuite Functional Consultant', 'ERP Implementation Analyst'],
    tools: ['NetSuite','SuiteScript','Oracle','SuiteFlow','SuiteAnalytics','SuiteCommerce','REST API','SuiteBuilder','CSV Import','JavaScript','SuiteTalk','NetSuite CRM','SuiteCloud'],
    curriculum: [
      { weeks: 'Weeks 1–3', phase: 'Platform Architecture', topics: ['NetSuite cloud architecture', 'Roles, permissions & access control', 'Record types & customization', 'SuiteBuilder fundamentals'] },
      { weeks: 'Weeks 4–6', phase: 'SuiteScript & Workflows', topics: ['JavaScript refresher', 'SuiteScript 2.x (UserEvent, Scheduled, RESTlet)', 'SuiteFlow workflows', 'Saved searches & dashboards'] },
      { weeks: 'Weeks 7–8', phase: 'Analytics & Integrations', topics: ['SuiteAnalytics & SuiteAnalytics Workbook', 'CSV Imports & data migration', 'REST API & SuiteTalk integrations', 'Mid-bootcamp assessment'] },
      { weeks: 'Weeks 9–12', phase: 'Capstone + Placement', topics: ['Real client-style capstone implementation', 'Bundle creation & SuiteCloud', 'Certification prep', 'Placement week with hiring partners'] },
    ],
    faqs: [
      { q: 'Is prior ERP experience needed?', a: 'No. The curriculum starts from platform fundamentals and ramps up to SuiteScript and integrations.' },
      { q: 'Will I be ready for NetSuite certification?', a: 'Yes. Weeks 9–12 include focused certification prep alongside the capstone.' },
      { q: 'Who teaches the program?', a: 'Practising consultants from Jobin & Jismi IT Services — a top NetSuite implementation partner.' },
      { q: 'Will I get NetSuite sandbox access?', a: 'Yes. Every student gets a dedicated sandbox environment for the duration of the program.' },
      { q: 'What roles can I target?', a: 'NetSuite Administrator, SuiteScript Developer, Functional Consultant, ERP Analyst.' },
      { q: 'Is JavaScript mandatory?', a: 'Familiarity helps. We include a refresher in Weeks 4–6 to bring everyone to the required level.' },
    ],
  },
  {
    slug: 'robotics',
    name: 'Robotics',
    short: 'Robotics',
    category: 'Robotics',
    tagline: 'Build, program, and deploy intelligent robots.',
    duration: '3 Months',
    schedule: 'Full-time, 10am–6pm',
    fee: '\u20B975,000',
    feeNumber: 75000,
    oneLiner: 'Hands-on embedded systems, ROS, computer vision, and motion planning with real hardware.',
    description: 'Work with real robotics hardware — Arduino, Raspberry Pi, LiDAR, servos — and master ROS, computer vision with OpenCV, simulation in Gazebo, and motion planning.',
    audience: 'Engineering graduates passionate about hardware-software systems and automation.',
    outcomes: ['Robotics Engineer', 'Embedded Systems Engineer', 'Automation Engineer', 'Robotics Software Developer'],
    tools: ['Arduino','ROS','Raspberry Pi','C++','Python','MATLAB','OpenCV','Gazebo','Linux','SolidWorks','CAD','Embedded C','Motor Controllers','LiDAR','Servo Systems'],
    curriculum: [
      { weeks: 'Weeks 1–3', phase: 'Embedded Basics', topics: ['Linux & C/C++ refresher', 'Arduino & Raspberry Pi', 'Sensors, actuators & motor control', 'Embedded C fundamentals'] },
      { weeks: 'Weeks 4–6', phase: 'ROS & Simulation', topics: ['ROS 2 architecture', 'Nodes, topics, services', 'Gazebo simulation', 'URDF & robot modelling'] },
      { weeks: 'Weeks 7–8', phase: 'Perception & Planning', topics: ['Computer vision with OpenCV', 'LiDAR & SLAM basics', 'Motion planning algorithms', 'Mid-bootcamp assessment'] },
      { weeks: 'Weeks 9–12', phase: 'Capstone + Placement', topics: ['End-to-end robot capstone (build + program)', 'Vision-integrated motion task', 'Portfolio video & demo day', 'Placement week with industry partners'] },
    ],
    faqs: [
      { q: 'Do I need my own hardware?', a: 'No. PrimeVU provides Arduino, Raspberry Pi, sensors, motors, and access to a fully-equipped robotics lab.' },
      { q: 'Is electronics background required?', a: 'Helpful but not mandatory. Weeks 1–3 cover embedded basics from scratch.' },
      { q: 'Will I use real robots?', a: 'Yes. Capstone projects are built on real hardware, not just simulation.' },
      { q: 'Will I learn ROS 2?', a: 'Yes. ROS 2 is the primary middleware used throughout the program.' },
      { q: 'What roles can I target?', a: 'Robotics Engineer, Embedded Systems Engineer, Automation Engineer, Robotics Software Developer.' },
      { q: 'Are there industry-aligned projects?', a: 'Yes. Capstones are scoped with input from automation and robotics partners.' },
    ],
  },
]

export const GENERAL_FAQS = [
  { q: 'Who is this program for?', a: 'Final-year students, recent graduates, and early-career professionals who want to break into AI/ML, NetSuite, or Robotics careers in 90 days.' },
  { q: 'What is the course duration and schedule?', a: 'All three programs run for 3 months, full-time, Monday to Saturday, 10am to 6pm at our Chalakudy campus.' },
  { q: 'What is the fee and are there any scholarships?', a: '\u20B975,000 per program. Merit-based scholarships are available for top applicants — covered in the admissions call.' },
  { q: 'Is there an application fee?', a: '\u20B92,000. It is non-refundable but is fully adjusted against your program fee on enrolment.' },
  { q: 'What is the batch size?', a: 'Cohorts are intentionally small — 25 to 30 learners — to ensure mentor access and hands-on intensity.' },
  { q: 'Do I need prior experience?', a: 'Each program has its own prerequisite kit. Most candidates begin with foundational coding or engineering familiarity.' },
  { q: 'What kind of placement support does PrimeVU provide?', a: 'Dedicated placement cell, CRM-tracked employer outreach, mock interviews, portfolio reviews, and direct introductions to 100+ hiring partners.' },
  { q: 'Is placement guaranteed?', a: 'We do not promise guarantees we cannot back with data. We do publish transparent outcome reports cohort-by-cohort.' },
]

export const BLOG_POSTS = [
  {
    slug: 'why-90-days-is-the-right-length-for-career-acceleration',
    title: 'Why 90 Days is the Right Length for Career Acceleration',
    category: 'Career Tips',
    date: '2025-06-15',
    author: 'PrimeVU Editorial',
    readTime: '6 min read',
    excerpt: 'Short enough to commit, long enough to build real skill. We break down why the 90-day format outperforms both 6-week sprints and 1-year diplomas.',
    cover: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    featured: true,
    content: `Most graduates we meet are stuck between two bad options.\n\nOption A is the 6-week bootcamp. It is too short to build durable skill. You finish with a portfolio that looks identical to every other graduate.\n\nOption B is the 1-year diploma. It is too long to commit before knowing if the career direction is right. Opportunity cost is real.\n\n## The 90-day window\n\nNinety days is the sweet spot. Long enough to go from foundations to a deployed capstone. Short enough that a recent graduate, or a final-year student between semesters, can fully commit.\n\n## What 90 days makes possible\n\n- **Weeks 1–3**: Foundations. Get everyone on the same baseline.\n- **Weeks 4–6**: Applied modules. Real tools, real problems.\n- **Weeks 7–8**: Mid-point checkpoint. Course-correct before the capstone.\n- **Weeks 9–12**: Capstone + placement. Build something real, then go interview.\n\nThat sequence is not arbitrary. It mirrors how skill actually compounds.\n\n## Why intensity matters\n\nA 90-day full-time program is fundamentally different from a 90-day part-time one. Daily reps in the same problem domain are what move a learner from 'has done a tutorial' to 'can ship'. Employers can tell the difference in 10 minutes of conversation.\n\n## The PrimeVU take\n\nWe chose 90 days because the data supports it, and because we wanted to be honest about what is and is not possible in a short program. Placement-linked, outcome-measured, full-time. No fluff.`
  },
  {
    slug: 'applied-llms-what-employers-actually-want',
    title: 'Applied LLMs: What Employers Actually Want in 2025',
    category: 'AI & Technology',
    date: '2025-06-10',
    author: 'PrimeVU Editorial',
    readTime: '8 min read',
    excerpt: 'RAG pipelines, evaluation frameworks, latency budgets. The skill stack that turns an AI hobbyist into a hireable LLM engineer.',
    cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    content: `LLM hype is everywhere, but actual hiring is selective. Here is the gap between what bootcamps teach and what teams pay for.\n\n## What does not get you hired\n\nFollowing an OpenAI cookbook. Spinning up a chat UI. A LangChain agent that 'works' on three test cases.\n\n## What does\n\n1. **Retrieval done right.** Chunking strategy, embedding choice, hybrid retrieval, re-ranking. Why each choice matters.\n2. **Evaluation.** Held-out test sets, faithfulness scoring, regression tracking. Can you tell a 'better' system from a worse one without vibes?\n3. **Latency & cost budgets.** Token economics, caching, streaming, batched inference. Production systems live or die here.\n4. **Guardrails.** Input filters, output validators, fall-back behaviour, observability.\n\nGet those four right and you are in the top decile of LLM applicants.`
  },
  {
    slug: 'a-day-in-the-life-netsuite-administrator',
    title: 'A Day in the Life of a NetSuite Administrator',
    category: 'NetSuite',
    date: '2025-06-05',
    author: 'PrimeVU Editorial',
    readTime: '5 min read',
    excerpt: 'From morning saved-search reviews to scripting a custom RESTlet by lunch. What the role actually looks like.',
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    content: `A NetSuite Administrator is more than a 'system maintainer'. The role is part developer, part analyst, part business partner.\n\nA typical day blends script reviews, dashboard tweaks, workflow updates, and stakeholder calls. We walk through it hour by hour.`
  },
  {
    slug: 'from-final-year-to-first-job-priyas-story',
    title: "From Final Year to First Job: Priya's Story",
    category: 'Student Stories',
    date: '2025-05-28',
    author: 'PrimeVU Editorial',
    readTime: '4 min read',
    excerpt: 'How a Mechanical Engineering grad pivoted into Robotics Software in 90 days — and what the journey actually felt like.',
    cover: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
    content: 'Priya joined the inaugural Robotics cohort. Here is her journey in her own words, lightly edited for clarity.'
  },
  {
    slug: 'the-kerala-tech-talent-opportunity',
    title: 'The Kerala Tech Talent Opportunity',
    category: 'Industry News',
    date: '2025-05-20',
    author: 'PrimeVU Editorial',
    readTime: '7 min read',
    excerpt: 'Why companies in Bangalore, Kochi and Dubai are increasingly hiring out of Tier-2 Kerala — and what graduates need to know.',
    cover: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80',
    content: 'Kerala has long produced strong engineering graduates. What has changed in the past three years is the willingness of distributed teams to hire them directly.'
  },
  {
    slug: 'how-to-build-an-ml-portfolio-that-stands-out',
    title: 'How to Build an ML Portfolio That Stands Out',
    category: 'Career Tips',
    date: '2025-05-12',
    author: 'PrimeVU Editorial',
    readTime: '6 min read',
    excerpt: 'Three projects is enough. Here is what they should be and how to present them.',
    cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    content: 'A great ML portfolio is not five Kaggle notebooks. It is three carefully chosen projects that signal three different things: depth, deployment, and judgement.'
  },
]

export const BLOG_CATEGORIES = ['All','AI & Technology','Career Tips','Industry News','Student Stories','NetSuite','Robotics']

const WHY_FEATURES = [
  { title: 'Full-Time Intensity', body: 'Mon–Sat, 10am–6pm. Daily reps build durable skill, not surface familiarity.', icon: 'Zap' },
  { title: '3-Month Duration', body: 'Long enough to ship a real capstone. Short enough to commit without compromise.', icon: 'Calendar' },
  { title: 'Placement-Linked', body: 'CRM-tracked outreach to 100+ hiring partners. Outcomes published cohort-by-cohort.', icon: 'Target' },
  { title: 'Corporate Parent', body: 'A wholly-owned subsidiary of Jobin & Jismi IT Services — enterprise credibility built-in.', icon: 'Building2' },
]

const HOW_STEPS = [
  { n: '01', title: 'Apply', body: 'Submit your application with resume. Pay a refundable-against-fee \u20B92,000 application fee.' },
  { n: '02', title: 'Learn', body: '90 days, full-time, instructor-led. Foundations, applied modules, capstone — in that order.' },
  { n: '03', title: 'Get Placed', body: 'Mock interviews, portfolio review, employer connect week. Real introductions, real outcomes.' },
]

// CBSE Fallback Data
const CBSE_SUBJECTS = {
  '5': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi'],
  '6': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Sanskrit'],
  '7': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Sanskrit'],
  '8': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Sanskrit'],
  '9': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Information Technology'],
  '10': ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Information Technology'],
}

export const CBSE_CLASS_IDS = ['10', '9', '8', '7', '6', '5']

export function getCBSESubjectsFallback(classId) {
  const subjects = CBSE_SUBJECTS[classId]
  if (!subjects) return []
  return subjects.map(name => ({
    slug: name.toLowerCase().replace(/ /g, '-'),
    name,
    description: `Explore ${name} for Class ${classId}`,
  }))
}

export function getGlobalSettingsFallback() {
  return {
    company: COMPANY,
    stats: STATS,
    whyFeatures: WHY_FEATURES,
    howSteps: HOW_STEPS,
  }
}
