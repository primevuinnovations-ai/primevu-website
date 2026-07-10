import { Cpu } from 'lucide-react'

export default function ToolsReel({ tools = [], speed = 'normal' }) {
  const doubled = [...tools, ...tools]
  const animClass = speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee'
  return (
    <div className="relative w-full overflow-hidden scroll-fade py-3">
      <div className={`flex gap-3 whitespace-nowrap w-max ${animClass}`}>
        {doubled.map((t, i) => (
          <div key={i} className="inline-flex items-center gap-2 rounded-full border border-border bg-foreground/[0.03] px-4 py-2 hover:border-prime/60 transition">
            <Cpu className="h-3.5 w-3.5 text-prime" />
            <span className="font-mono-tech text-xs text-foreground/90">{t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
