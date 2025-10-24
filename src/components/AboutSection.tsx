import SectionHeading from "@/components/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading title="About Me" />
        <p className="text-gray-700 text-lg leading-relaxed">
          I’m a developer focused on creating fast, accessible, and scalable web
          applications. With experience in React, Next.js, and Node.js, I love
          crafting pixel-perfect interfaces backed by solid engineering.
        </p>
      </div>
    </section>
  );
}
