
"use client";

import {
  Card,
} from "@/components/ui/card";

import {
  ArrowRight,
  Camera,
  StarIcon,
  FilmIcon,
} from "lucide-react";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Album Design",
    icon: Camera,
    href: "/albumDesign",
  },
  {
    title: "Instagram Posts",
    icon: StarIcon,
    href: "/instagramPosts",
  },
  {
    title: "Invitation Video",
    icon: FilmIcon,
    href: "/invitationVideo",
  },
];

// Parent animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Page() {
  return (
    <section
      id="services"
      className="flex min-h-screen flex-col items-center justify-center space-y-3 bg-[#f8f6f2] px-4 py-16"
    >

      {/* Heading Animation */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex gap-2 text-2xl font-bold"
      >
        <h1 className="text-black">Our</h1>
        <h1 className="text-red-400">Service</h1>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-sm text-mauve-400"
      >
        Photography & Cinematography
      </motion.p>

      {/* Services Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.2,
        }}
        className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3"
      >

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <Link href={service.href}>
                <Card
                  className="
                    group
                    flex h-40 w-80
                    cursor-pointer
                    flex-col items-center justify-center
                    rounded-2xl
                    border border-pink-100
                    bg-white
                    shadow-md
                    transition-shadow duration-300
                    hover:shadow-xl
                  "
                >

                  {/* Icon */}
                  <div
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-lg
                      bg-red-50
                      transition-all duration-300
                      group-hover:rotate-6
                      group-hover:bg-red-500
                    "
                  >
                    <Icon
                      className="
                        h-5 w-5
                        text-red-500
                        transition-all duration-300
                        group-hover:scale-110
                        group-hover:text-white
                      "
                    />
                  </div>

                  {/* Title */}
                  <h2
                    className="
                      text-sm font-bold
                      text-black
                      transition-colors duration-300
                      group-hover:text-red-500
                    "
                  >
                    {service.title}
                  </h2>

                  {/* Discover */}
                  <span
                    className="
                      flex items-center gap-2
                      text-xs font-medium
                      tracking-[0.25em]
                      text-gray-300
                      transition-colors duration-300
                      group-hover:text-red-500
                    "
                  >
                    Discover

                    <ArrowRight
                      className="
                        h-3 w-3
                        transition-transform duration-300
                        group-hover:translate-x-2
                      "
                    />
                  </span>

                </Card>
              </Link>
            </motion.div>
          );
        })}

      </motion.div>
    </section>
  );
}
