import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Hammad Hoath | Full Stack Developer",
  description: "Portfolio showcasing my work with Next.js, React, and TypeScript.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
