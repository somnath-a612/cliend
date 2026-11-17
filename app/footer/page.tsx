
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUp,
} from "lucide-react";



export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "instant" : "smooth",
    });
  };

  return (
    <footer className="overflow-hidden bg-[#eeedef] px-5 pt-2 text-zinc-950 sm:px-10 ">

      <div className="mx-auto">

        {/* Top heading */}
       

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-5 mb-4 sm:flex-row sm:items-center">

          <p className="text-xs tracking-wide text-zinc-500">
            © {new Date().getFullYear()} Somnath. All rights reserved.
          </p>

          <p className="text-xs tracking-wide text-zinc-500">
            Designed with creativity & passion.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.15em] transition-colors hover:text-[#ae1e3b]"
          >
            Back to top

            <span className="flex size-9 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 group-hover:border-[#ae1e3b] group-hover:bg-[#ae1e3b] group-hover:text-white">
              <ArrowUp size={15} />
            </span>
          </button>

        </div>

      </div>
    </footer>
  );
}
