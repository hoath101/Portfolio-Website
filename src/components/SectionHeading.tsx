export default function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold text-center mb-10 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2">
      {title}
    </h2>
  );
}
