"use client";

export default function Navbar() {
  return (
    <nav className="w-full py-5 px-8 flex justify-between items-center bg-white shadow-sm fixed top-0 z-50">
      <a href="#" className="font-bold text-xl text-blue-600">Hammad Hoath</a>
      <div className="space-x-6">
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
}
