import Navbar from "@/components/ui/navbar";
import ProjectCard from "@/components/home/project-card";
import { projects } from "@/lib/mock-data";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-50 mb-4">
              پروژه‌ها
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl">
              کاوش و الهام‌گیری از پروژه‌های واقعی کابینت‌کاران برتر
            </p>
          </div>

          {/* Search and filters */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="جستجو در پروژه‌ها..."
              className="w-full px-6 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="outline" className="px-4 py-2 text-sm">
              همه پروژه‌ها
            </Button>
            <Button variant="outline" className="px-4 py-2 text-sm">
              مدرن
            </Button>
            <Button variant="outline" className="px-4 py-2 text-sm">
              minimal
            </Button>
            <Button variant="outline" className="px-4 py-2 text-sm">
              کلاسیک
            </Button>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                style={project.style}
                location={project.location}
                makerName={project.makerName}
                image={project.image}
                materials={project.materials}
                area={project.area}
              />
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="mt-12 text-center">
            <span className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded">
              صفحه ۱ از ۳
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
