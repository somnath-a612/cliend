
"use client";

import { motion } from "framer-motion";
import { WeadingPhoto } from "@/app/asseast/page";

export default function InstagramPosts() {
  return (
    <section className="min-h-screen w-full bg-[#f8f6f2] px-5 py-16 sm:px-8 lg:px-12">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-12 max-w-7xl text-center"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-red-400">
          Our Creative Gallery
        </p>

        <h1 className="font-serif text-3xl font-bold text-zinc-900 sm:text-5xl">
          Album <span className="italic text-red-400">Designs</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
          Explore our creative collection of Album designs,
          crafted with creativity, style and attention to detail.
        </p>
      </motion.div>

      {/* Instagram Gallery */}
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {WeadingPhoto.map((items, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: (index % 4) * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              y: -7,
            }}
            className="group relative overflow-hidden rounded-2xl bg-white p-2 shadow-md transition-shadow duration-300 hover:shadow-2xl"
          >

            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-100">

              <img
                src={items.img}
                alt={items.name}
                loading="lazy"
                className="
                  h-full w-full
                  object-cover
                  transition-transform duration-700
                  ease-out
                  group-hover:scale-110
                "
              />

              {/* Hover Overlay */}
              <div className="
                absolute inset-0
                flex items-end
                bg-gradient-to-t
                from-black/50
                via-transparent
                to-transparent
                opacity-0
                transition-opacity duration-500
                group-hover:opacity-100
              ">
                <p className="p-5 text-sm font-medium text-white">
                  {items.name}
                </p>
              </div>

            </div>

          </motion.div>
        ))}

      </main>
    </section>
  );
}
