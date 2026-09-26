interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  cta?: {
    text: string
    href: string
  }
  align?: "center" | "start" | "end"
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  cta,
  align = "center",
}: SectionHeadingProps) {
  const alignClasses = {
    center: "text-center",
    start: "text-right",
    end: "text-left",
  }

  return (
    <div className={`mb-12 ${alignClasses[align]}`}>
      {eyebrow && (
        <span className="inline-block px-3 py-1 bg-primary-900/30 text-primary-400 text-sm font-medium rounded-full mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-50 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {cta && (
        <div className="mt-8">
          <a
            href={cta.href}
            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-200 font-medium"
          >
            {cta.text}
          </a>
        </div>
      )}
    </div>
  )
}