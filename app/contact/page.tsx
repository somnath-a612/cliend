
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Camera,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const project = data.get("project") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(
      `Portfolio Inquiry: ${project}`
    );

    const body = encodeURIComponent(
      `Hello Somnath,\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Project Type: ${project}\n\n` +
      `Message:\n${message}`
    );

    window.location.href =
      `mailto:somnathsingh2003@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    form.reset();
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f6f2] text-[#191714]">
      {/* Navbar */}
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-12 lg:px-16">
        <Link href="/" className="group">
          <span className="block font-serif text-2xl italic tracking-wide md:text-3xl">
            Somnath Singh
          </span>
          <span className="mt-1 block text-center text-[9px] tracking-[0.45em]">
            ALBUM DESIGNER
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm lg:flex xl:gap-12">
          <Link href="/" className="transition-colors hover:text-[#985b3d]">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-[#985b3d]">
            About
          </Link>
          <Link href="/services" className="transition-colors hover:text-[#985b3d]">
            Services
          </Link>
          <Link href="/portfolio" className="transition-colors hover:text-[#985b3d]">
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="border-b border-[#985b3d] pb-2 text-[#985b3d]"
          >
            Contact
          </Link>
        </nav>

        <a
          href="#contact-form"
          className="flex items-center gap-3 rounded-full border border-[#29251f] px-5 py-3 text-sm transition-all duration-300 hover:bg-[#75452e] hover:text-white"
        >
          Get In Touch <ArrowRight size={16} />
        </a>
      </header>

      {/* Main content */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-20 pt-12 md:px-12 lg:grid-cols-[1fr_1.08fr] lg:gap-16 lg:px-16 lg:pt-16">
        {/* Left section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col"
        >
          <p className="mb-4 text-xs tracking-[0.35em] text-[#77716b]">
            CONTACT
          </p>

          <h1 className="max-w-xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
            Let’s Create
            <br />
            Something Beautiful
            <br />
            <span className="italic text-[#92583c]">Together.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#66615c] sm:text-lg">
            I’m always open to discussing new projects, creative ideas,
            and opportunities to be part of your vision.
          </p>

          {/* Contact details */}
          <div className="mt-9 space-y-6">
            <a
              href="mailto:somnathsingh2003@gmail.com"
              className="group flex items-center gap-5"
            >
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#eee0d8] p-4 text-[#75452e] transition-colors group-hover:bg-[#75452e] group-hover:text-white">
                <Mail size={23} />
              </span>
              <span>
                <span className="block text-[10px] tracking-[0.25em] text-[#77716b]">
                  EMAIL ME
                </span>
                <span className="mt-1 block break-all text-sm sm:text-base">
                  somnathsingh2003@gmail.com
                </span>
              </span>
            </a>

            <a
              href="https://www.instagram.com/somnath_works/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5"
            >
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#eee0d8] p-4 text-[#75452e] transition-colors group-hover:bg-[#75452e] group-hover:text-white">
                <Camera size={23} />
              </span>
              <span>
                <span className="block text-[10px] tracking-[0.25em] text-[#77716b]">
                  FOLLOW ON INSTAGRAM
                </span>
                <span className="mt-1 block text-sm sm:text-base">
                  @somnath_works
                </span>
              </span>
            </a>

            <div className="flex items-center gap-5">
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#eee0d8] p-4 text-[#75452e]">
                <MapPin size={23} />
              </span>
              <span>
                <span className="block text-[10px] tracking-[0.25em] text-[#77716b]">
                  LOCATION
                </span>
                <span className="mt-1 block text-sm sm:text-base">
                  Haldia, West Bengal, India
                </span>
              </span>
            </div>
          </div>

          {/* Decorative photo area */}
          <div className="relative mt-12 flex min-h-52 items-end">
            <div className="absolute bottom-0 left-[-24px] h-48 w-[70%] rounded-tr-[100px] bg-[#e9dfd3] opacity-60 md:left-[-48px]" />

            <div className="relative z-10 flex items-center gap-4 pb-2">
              <div className="flex h-32 w-28 rotate-[-8deg] flex-col items-center justify-center border-[8px] border-white bg-[#d7c5b5] shadow-xl sm:h-40 sm:w-36">
                <Camera size={30} className="text-[#75452e]" />
                <span className="mt-3 text-center font-serif text-xs italic text-[#75452e]">
                  Capturing
                  <br />
                  memories
                </span>
              </div>

              <div className="max-w-[210px] rotate-[-3deg] font-serif text-xl italic leading-8 text-[#75452e] sm:text-2xl">
                Your memories.
                <br />
                My creativity.
                <br />
                One unforgettable album.
                <div className="mt-3 h-px w-24 rotate-[-15deg] bg-[#75452e]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="h-fit rounded-2xl border border-[#e4dfd8] bg-white/40 p-6 shadow-sm sm:p-10 lg:p-11"
        >
          <p className="text-[11px] tracking-[0.3em] text-[#77716b]">
            GET IN TOUCH
          </p>

          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            Send me a message
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-[#66615c] sm:text-base">
            Have a project in mind? Fill out the form below and I’ll
            get back to you as soon as possible.
          </p>

          {submitted && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#c9d8c4] bg-[#edf4e9] p-4 text-sm text-[#365b32]">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
              <p>
                Your email app should open with your message ready.
                Please send the email to complete your inquiry.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm">
                  Full Name <span className="text-[#92583c]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-[#ded9d2] bg-white/50 px-4 py-4 text-sm outline-none transition-all placeholder:text-[#aaa39c] focus:border-[#92583c] focus:ring-2 focus:ring-[#92583c]/10"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm">
                  Email Address <span className="text-[#92583c]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-[#ded9d2] bg-white/50 px-4 py-4 text-sm outline-none transition-all placeholder:text-[#aaa39c] focus:border-[#92583c] focus:ring-2 focus:ring-[#92583c]/10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="project" className="mb-2 block text-sm">
                Project Type <span className="text-[#92583c]">*</span>
              </label>
              <select
                id="project"
                name="project"
                required
                defaultValue=""
                className="w-full rounded-lg border border-[#ded9d2] bg-white/50 px-4 py-4 text-sm text-[#66615c] outline-none transition-all focus:border-[#92583c] focus:ring-2 focus:ring-[#92583c]/10"
              >
                <option value="" disabled>
                  Select a project type
                </option>
                <option value="Wedding Album">Wedding Album</option>
                <option value="Photography">Photography</option>
                <option value="Album Design">Album Design</option>
                <option value="Portrait Session">Portrait Session</option>
                <option value="Other Project">Other Project</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm">
                Your Message <span className="text-[#92583c]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your vision, requirements, or anything else..."
                className="w-full resize-y rounded-lg border border-[#ded9d2] bg-white/50 px-4 py-4 text-sm outline-none transition-all placeholder:text-[#aaa39c] focus:border-[#92583c] focus:ring-2 focus:ring-[#92583c]/10"
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-4 rounded-full bg-[#895337] px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#673d29] hover:shadow-lg"
            >
              Send Message
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <p className="flex items-center justify-center gap-2 text-center text-xs leading-5 text-[#77716b]">
              <ShieldCheck size={16} />
              Your information is safe with me. I’ll never share your details.
            </p>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-[1440px] items-center justify-between border-t border-[#e5dfd8] px-6 py-6 md:px-12 lg:px-16">
        <p className="text-xs text-[#77716b]">
          © {new Date().getFullYear()} Somnath Singh. All rights reserved.
        </p>
        <span className="font-serif text-2xl italic text-[#92583c]">
          S.
        </span>
      </footer>
    </main>
  );
}
