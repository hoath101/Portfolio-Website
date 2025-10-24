import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/projects";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" />
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="text-gray-700 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
