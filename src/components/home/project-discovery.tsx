import ProjectGrid from '@/components/home/project-grid'
import { projects } from '@/lib/mock-data'

export default function ProjectDiscovery() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-primary-900/30 text-primary-400 text-sm font-medium rounded-full mb-4">
            پروژه‌های ویژه
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-50 mb-4">
            پروژه‌هایی که الهام می‌بخشند
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            پروژه‌های واقعی از کابینت‌کاران حرفه‌ای را کاوش کنید و ایده‌های جدیدی برای فضای خود بیابید.
          </p>
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  )
}