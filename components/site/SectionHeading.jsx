export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 font-mono-tech text-[11px] tracking-[0.2em] text-prime">
          <span className="h-px w-6 bg-prime" /> {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">{title}</h2>
      {subtitle ? <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed">{subtitle}</p> : null}
    </div>
  )
}
