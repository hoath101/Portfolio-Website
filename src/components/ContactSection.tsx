"use client";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

export default function ContactSection() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(data)),
    });
    setStatus(res.ok ? "✅ Message sent!" : "❌ Failed to send message.");
  }

  return (
    <section id="contact" className="py-20 px-8 bg-gray-100">
      <div className="max-w-lg mx-auto text-center">
        <SectionHeading title="Contact Me" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border p-3 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-3 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border p-3 rounded h-40 w-80"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          {status && <p className="mt-2 text-sm text-gray-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}
