import Link from "next/link"

interface ProjectRequestCTAProps {
  className?: string
}

export default function ProjectRequestCTA({ className }: ProjectRequestCTAProps) {
  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary-900/30 to-accent-900/30 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-primary-900/50 text-primary-300 text-sm font-medium rounded-full mb-4">
              شروع کنید
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-50 mb-6">
              پروژه‌ی بعدی شما می‌تواند همین‌جا شروع شود.
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 mb-8">
              مشتریان می‌توانند پروژه‌های خود را ارسال کنند و با متخصصان مناسب در ارتباط باشند.
            </p>
            <Link
              href="/project-request"
              className="inline-block px-8 py-4 bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-colors duration-200 text-lg font-medium"
            >
              ثبت پروژه
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}