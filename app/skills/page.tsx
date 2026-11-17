
"use client";

import { useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";

type Category = "Software" | "Craft" | "Print";

type Skill = {
  name: string;
  level: string;
  percentage: number;
};

const skills: Record<Category, Skill[]> = {
  Software: [
    { name: "Adobe Photoshop", level: "EXPERT", percentage: 92 },
    { name: "Canva", level: "ADVANCED", percentage: 86 },
    { name: "Lightroom", level: "PROFICIENT", percentage: 78 },
    { name: "Premiere Pro", level: "PROFICIENT", percentage: 74 },
    { name: "Adobe Illustrator", level: "WORKING", percentage: 60 },
  ],
  Craft: [],
  Print: [],
};

const categories: Category[] = ["Software", "Craft", "Print"];

const ease = [0.22, 1, 0.36, 1] as const;

function SkillRow({
  skill,
  index,
  active,
  reduceMotion,
}: {
  skill: Skill;
  index: number;
  active: boolean;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 35,
        filter: reduceMotion ? "none" : "blur(8px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        y: reduceMotion ? 0 : -15,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : index * 0.12,
        ease,
      }}
      className="border-b border-zinc-300 pb-6 pt-7"
    >
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

      <div
        role="progressbar"
        aria-label={skill.name}
        aria-valuenow={skill.percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        className="relative h-[5px] w-full rounded-full bg-zinc-300/80"
      >
        <motion.div
          initial={{ width: "0%" }}
          animate={{
            width: active ? `${skill.percentage}%` : "0%",
          }}
          transition={{
            duration: reduceMotion ? 0 : 1.3,
            delay: reduceMotion ? 0 : 0.25 + index * 0.12,
            ease,
          }}
          className="absolute left-0 top-0 h-full rounded-full bg-[#ae1e3b]"
        />

        <motion.span
          initial={{ left: "0%", opacity: 0 }}
          animate={{
            left: active ? `${skill.percentage}%` : "0%",
            opacity: active ? 1 : 0,
          }}
          transition={{
            duration: reduceMotion ? 0 : 1.3,
            delay: reduceMotion ? 0 : 0.25 + index * 0.12,
            ease,
          }}
          className="absolute top-1/2 z-10 size-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#ae1e3b] bg-[#ae1e3b] shadow-[0_0_0_3px_#eeedef]"
        />
      </div>
    </motion.div>
  );
}

export default function ToolsCraft() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Software");

  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.15,
  });

  const shouldReduceMotion = useReducedMotion();

  const reduceMotion = Boolean(shouldReduceMotion);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen overflow-hidden bg-[#eeedef] px-5 py-16 text-zinc-950 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Heading animation */}
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 65,
          }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: reduceMotion ? 0 : 65 }
          }
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease,
          }}
          className="mb-10 flex flex-col justify-between gap-8 md:mb-14 md:flex-row md:items-center"
        >
          <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Tools and{" "}
            <span className="italic text-[#ae1e3b]">
              craft
            </span>
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

        {/* Skills animation */}
        <AnimatePresence mode="wait">
          {isInView && (
            <motion.div
              key={activeCategory}
              role="tabpanel"
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: reduceMotion ? 0 : -20,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                ease,
              }}
              className="grid grid-cols-1 gap-x-12 md:grid-cols-2 lg:gap-x-16"
            >
              {skills[activeCategory].map((skill, index) => (
                <SkillRow
                  key={`${activeCategory}-${skill.name}`}
                  skill={skill}
                  index={index}
                  active={isInView}
                  reduceMotion={reduceMotion}
                />
              ))}

              {skills[activeCategory].length === 0 && (
                <p className="py-8 text-sm tracking-wide text-zinc-500">
                  More skills coming soon.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
