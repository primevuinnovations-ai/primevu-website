'use client'
import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton({ COMPANY = {} }) {
  const [hover, setHover] = useState(false)
  const whatsappNum = COMPANY.whatsapp || '919999999999'
  const whatsappMsg = COMPANY.whatsappMessage || "Hi, I'm interested in PrimeVU programs."
  const href = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(whatsappMsg)}`
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end flex-col gap-3">
      {/* Floating Tooltip */}
      <div 
        className={`bg-white text-slate-800 text-sm font-bold px-4 py-2.5 rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 transform transition-all duration-300 origin-bottom-right ${
          hover ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
        }`}
      >
        Chat with us! <span className="text-xl leading-none">👋</span>
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-slate-100 transform rotate-45" />
      </div>

      {/* Main Button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="group relative flex items-center justify-center h-16 w-16 rounded-[1.5rem] bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300"
      >
        <div className="absolute inset-0 rounded-[1.5rem] bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden>
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.872 2.722.872.817 0 2.15-.515 2.422-1.318.143-.43.143-.804.057-.99-.157-.343-.86-.572-1.16-.74-.157-.073-.245-.143-.515-.143zM16.5 4C9.6 4 4 9.6 4 16.5c0 2.3.6 4.5 1.7 6.4L4 28l5.2-1.7c1.8 1 3.9 1.5 6.1 1.5 6.9 0 12.5-5.6 12.5-12.5S22.9 4 16 4h.5z"/>
        </svg>
      </a>
    </div>
  )
}
