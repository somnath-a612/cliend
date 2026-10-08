'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import  LenisProvider  from "./LenisProvider";
import  Navber  from "../navber/page";
import { ProfileImages } from "@/app/asseast/page";


function page() {

    const words = ["Frontend"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Typewriter logic
  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Cursor blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);



  return (
     <div id="Hero" className="min-h-screen w-full bg-gray-400">
      <Navber />
      {/* <Fotter /> */}

      <div className=" items-center w-full mx-auto  mb-10">
        {/* <LenisProvider> */}


          <main className="min-h-screen pt-32 px-6 flex flex-col-reverse items-center gap-10 
            md:flex-row md:justify-between md:items-center  md:px-32   bg-gray-600">

            {/* LEFT TEXT SECTION */}
            <div className="flex flex-col gap-4 md:gap-10 md:max-w-xl text-center md:text-left">

              <motion.h1
                className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                I’m <span className="text-gray-900">Somnath Singh</span> <br />
                <span className="text-blue-600">
                  {words[index].substring(0, subIndex)}
                </span>
                <span className={`text-blue-600 ${blink ? "opacity-100" : "opacity-0"}`}>
                  |
                </span>
                &nbsp;Developer
              </motion.h1>

              <p className="font-serif text-gray-700 text-sm md:text-base leading-relaxed">
                Hi, I’m Somnath Singh — a Computer Science student and a passionate Frontend
                Developer who loves turning ideas into clean, modern, and user-friendly web
                interfaces.
              </p>

              <button className="bg-yellow-500 text-black px-6 py-3 rounded-md w-fit mx-auto md:mx-0 font-semibold">
                DOWNLOAD CV →
              </button>
              {/* <div className="flex gap-4 items-center px-6 py-3    pb-4">
                 {
                    Home.map((items, index) => (
                    <a href={items.url}>
                        <img key = {index}
                     src={items.img} alt= {items.name} className="size-6 hover:scale-110 hover:shadow-xl duration-300 delay-0"/>
                    </a>
                     ))  
                      }
              </div> */}
            </div>


            {/* RIGHT IMAGE SECTION — SAME AS YOUR CODE */}
            {
              ProfileImages.map((items, index) => (
                <img key={index}
                  src={items.img}
                  alt={items.name}
                  className="w-52 h-50
                   md:w-[380px] md:h-[380px]
                   object-cover rounded-full border
                   "

                />
              ))
            }

          </main>
          




        {/* <section id="about"><About /></section>
          <hr className="border border-gray-600 max-w-full"/>
          <section id="project"><Project /></section>
          <hr className="border border-gray-600  max-w-full"/>
         <section id="contact"><Contact /></section>
          <Buttom /> */}

        {/* </LenisProvider> */}

      </div>
    </div>

  )
}

export default page