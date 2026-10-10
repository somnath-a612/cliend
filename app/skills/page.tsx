
"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

type Category = "Software" | "Craft" | "Print";

type Skill = {
  name: string;
  level: string;
  percentage: number;
};

const skills: Record<Category, Skill[]> = {
  Software: [
    { name: "Adobe Photoshop", level: "EXPERT", percentage: 92 },
    { name: "Adobe Lightroom", level: "ADVANCED", percentage: 86 },
    { name: "Adobe InDesign", level: "ADVANCED", percentage: 80 },
    { name: "Fundy Designer", level: "PROFICIENT", percentage: 78 },
    { name: "SmartAlbums", level: "PROFICIENT", percentage: 74 },
    { name: "Adobe Illustrator", level: "WORKING", percentage: 60 },
  ],
  Craft: [
    { name: "Visual Composition", level: "EXPERT", percentage: 94 },
    { name: "Color Theory", level: "ADVANCED", percentage: 88 },
    { name: "Typography", level: "ADVANCED", percentage: 82 },
    { name: "Photo Editing", level: "PROFICIENT", percentage: 78 },
    { name: "Layout Design", level: "PROFICIENT", percentage: 75 },
    { name: "Creative Direction", level: "WORKING", percentage: 65 },
  ],
  Print: [
    { name: "Print Design", level: "EXPERT", percentage: 90 },
    { name: "Color Management", level: "ADVANCED", percentage: 85 },
    { name: "Editorial Design", level: "ADVANCED", percentage: 80 },
    { name: "Photo Books", level: "PROFICIENT", percentage: 76 },
    { name: "Paper Selection", level: "PROFICIENT", percentage: 72 },
    { name: "Prepress Production", level: "WORKING", percentage: 62 },
  ],
};

const categories: Category[] = ["Software", "Craft", "Print"];

// Individual skill row with animated progress bar
function SkillRow({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.35,
  });

  const shouldReduceMotion = useReducedMotion();

  const animationDuration = shouldReduceMotion ? 0 : 1.15;
  const animationDelay = shouldReduceMotion ? 0 : 0.2 + index * 0.08;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 18,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: shouldReduceMotion ? 0 : 18 }
      }
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: "easeOut",
      }}
      className="border-b border-zinc-300 pb-6 pt-7"
    >
      {/* Skill name and percentage */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-base font-medium tracking-tight text-zinc-950 sm:text-xl">
          {skill.name}
        </h3>

        <div className="flex shrink-0 items-center gap-2 text-[10px] tracking-[0.12em] text-zinc-500 sm:gap-3 sm:text-sm">
          <span>{skill.level}</span>
          <span>·</span>
          <span>{skill.percentage}%</span>
        </div>
      </div>

      {/* Progress bar */}
      <div
        role="progressbar"
        aria-label={skill.name}
        aria-valuenow={skill.percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        className="relative h-[5px] w-full rounded-full bg-zinc-300/80"
      >
        {/* Animated fill */}
        <motion.div
          initial={{ width: "0%" }}
          animate={{
            width: isInView ? `${skill.percentage}%` : "0%",
          }}
          transition={{
            duration: animationDuration,
            delay: animationDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-0 top-0 h-full rounded-full bg-[#ae1e3b]"
        />

        {/* Animated circular endpoint */}
        <motion.span
          initial={{ left: "0%", opacity: 0 }}
          animate={{
            left: isInView ? `${skill.percentage}%` : "0%",
            opacity: isInView ? 1 : 0,
          }}
          transition={{
            duration: animationDuration,
            delay: animationDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute top-1/2 z-10 size-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#ae1e3b] bg-[#ae1e3b] shadow-[0_0_0_3px_#eeedef]"
        />
      </div>
    </motion.div>
  );
}

// Main skills section
export default function ToolsCraft() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Software");

  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="min-h-screen overflow-hidden bg-[#eeedef] px-5 py-16 text-zinc-950 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Heading and category tabs */}
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 25,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: "easeOut",
          }}
          className="mb-10 flex flex-col justify-between gap-8 md:mb-14 md:flex-row md:items-center"
        >
          <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Tools and{" "}
            <span className="italic text-[#ae1e3b]">craft</span>
          </h2>

          {/* Category buttons */}
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex flex-wrap items-center gap-2"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`relative isolate overflow-hidden rounded-full border px-5 py-2 text-sm transition-colors duration-300 sm:px-6 sm:py-2.5 sm:text-base ${
                    isActive
                      ? "border-[#ae1e3b] text-white"
                      : "border-zinc-300 text-zinc-950 hover:border-[#ae1e3b] hover:text-[#ae1e3b]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-skill-tab"
                      className="absolute inset-0 -z-10 rounded-full bg-[#ae1e3b]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Animated skills grid */}
        <motion.div
          key={activeCategory}
          role="tabpanel"
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.4,
            ease: "easeOut",
          }}
          className="grid grid-cols-1 gap-x-12 md:grid-cols-2 lg:gap-x-16"
        >
          {skills[activeCategory].map((skill, index) => (
            <SkillRow
              key={`${activeCategory}-${skill.name}`}
              skill={skill}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
