"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-32 px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center md:text-left"
      >
        <h1 className="text-5xl font-bold mb-4">
          Hi, I’m <span className="text-blue-600">Hammad</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-lg mb-6">
          A full stack developer passionate about building modern web
          experiences using Next.js, React, and TypeScript.
        </p>
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Image
          src="/images/hammad.jpeg"
          alt="Hammad portrait"
          width={250}
          height={250}
          className="rounded-full shadow-lg"
        />
      </motion.div>
    </section>
  );
}
