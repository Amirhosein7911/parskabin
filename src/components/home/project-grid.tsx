import ProjectCard from "@/components/home/project-card";
import { Project } from "@/lib/mock-data";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
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
  );
}
