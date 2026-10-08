"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Camera, StarIcon, User, FilmIcon } from "lucide-react"
import {motion} from "framer-motion"



function page() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen space-y-2 py-2 bg-pink-200">
        <div className= "flex gap-2 font-bold text-2xl">
            <h1 className="text-black">Our</h1>
            <h1 className= "text-red-400">Service</h1>
        </div>
        <p className="text-sm text-mauve-400">Photography & Cinematography</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  text-center ">

       <motion.div
  whileHover={{
    scale: 1.03,
    y: -3,
  }}
  whileTap={{
    scale: 0.98,
  }}
  transition={{
    duration: 0.2,
    ease: "easeOut",
  }}
>
  <Card
    className="
      group
      w-80 h-40
      rounded-2xl
      border border-pink-100
      bg-white
      shadow-md
      hover:shadow-xl
      transition-all duration-300
      flex flex-col items-center justify-center
    "
  >
    {/* Camera Icon */}
    <div
      className="
        flex h-8 w-8 items-center justify-center
        rounded-sm
        bg-red-50
        
        group-hover:bg-red-500
      "
    >
      <Camera
        className="
          h-4 w-4
          text-red-500
          
          group-hover:text-white
          group-hover:scale-110
        "
      />
    </div>

    {/* Title */}
    <h2
      className="
        
        text-sm font-bold text-black text-center
      
      "
    >
      Wedding Photography
    </h2>

    {/* Discover */}
    <button
      className="
        flex items-center gap-2
        text-xs font-medium
        tracking-[0.25em]
        text-gray-300
       
        group-hover:text-red-500
      "
    >
      Discover

      <ArrowRight
        className="
          h-3 w-3
          
          group-hover:translate-x-1
        "
      />
    </button>
  </Card>
</motion.div>

        <motion.div
  whileHover={{
    scale: 1.03,
    y: -3,
  }}
  whileTap={{
    scale: 0.98,
  }}
  transition={{
    duration: 0.2,
    ease: "easeOut",
  }}
>
  <Card
    className="
      group
      w-80 h-40
      rounded-2xl
      border border-pink-100
      bg-white
      shadow-md
      hover:shadow-xl
      transition-all duration-300
      flex flex-col items-center justify-center
    "
  >
    {/* Camera Icon */}
    <div
      className="
        flex h-8 w-8 items-center justify-center
        rounded-sm
        bg-red-50
        
        group-hover:bg-red-500
      "
    >
      <StarIcon
        className="
          h-4 w-4
          text-red-500
          
          group-hover:text-white
          group-hover:scale-110
        "
      />
    </div>

    {/* Title */}
    <h2
      className="
        
        text-sm font-bold text-black text-center
      
      "
    >
      Pre-Wedding Photography
    </h2>

    {/* Discover */}
    <button
      className="
        flex items-center gap-2
        text-xs font-medium
        tracking-[0.25em]
        text-gray-300
       
        group-hover:text-red-500
      "
    >
      Discover

      <ArrowRight
        className="
          h-3 w-3
          
          group-hover:translate-x-1
        "
      />
    </button>
  </Card>
</motion.div>


      <motion.div
  whileHover={{
    scale: 1.03,
    y: -3,
  }}
  whileTap={{
    scale: 0.98,
  }}
  transition={{
    duration: 0.2,
    ease: "easeOut",
  }}
>
  <Card
    className="
      group
      w-80 h-40
      rounded-2xl
      border border-pink-100
      bg-white
      shadow-md
      hover:shadow-xl
      transition-all duration-300
      flex flex-col items-center justify-center
    "
  >
    {/* Camera Icon */}
    <div
      className="
        flex h-8 w-8 items-center justify-center
        rounded-sm
        bg-red-50
        
        group-hover:bg-red-500
      "
    >
      <FilmIcon
        className="
          h-4 w-4
          text-red-500
          
          group-hover:text-white
          group-hover:scale-110
        "
      />
    </div>

    {/* Title */}
    <h2
      className="
        
        text-sm font-bold text-black text-center
      
      "
    >
      Cimematic Films
    </h2>

    {/* Discover */}
    <button
      className="
        flex items-center gap-2
        text-xs font-medium
        tracking-[0.25em]
        text-gray-300
       
        group-hover:text-red-500
      "
    >
      Discover

      <ArrowRight
        className="
          h-3 w-3
          
          group-hover:translate-x-1
        "
      />
    </button>
  </Card>
</motion.div>


      <motion.div
  whileHover={{
    scale: 1.03,
    y: -3,
  }}
  whileTap={{
    scale: 0.98,
  }}
  transition={{
    duration: 0.2,
    ease: "easeOut",
  }}
>
  <Card
    className="
      group
      w-80 h-40
      rounded-2xl
      border border-pink-100
      bg-white
      shadow-md
      hover:shadow-xl
      transition-all duration-300
      flex flex-col items-center justify-center
    "
  >
    {/* Camera Icon */}
    <div
      className="
        flex h-8 w-8 items-center justify-center
        rounded-sm
        bg-red-50
        
        group-hover:bg-red-500
      "
    >
      <User
        className="
          h-4 w-4
          text-red-500
          
          group-hover:text-white
          group-hover:scale-110
        "
      />
    </div>

    {/* Title */}
    <h2
      className="
        
        text-sm font-bold text-black text-center
      
      "
    >
      Portraiture
    </h2>

    {/* Discover */}
    <button
      className="
        
        flex items-center gap-2
        text-xs font-medium
        tracking-[0.25em]
        text-gray-300
       
        group-hover:text-red-500
      "
    >
      Discover

      <ArrowRight
        className="
          h-3 w-3
          
          group-hover:translate-x-1
        "
      />
    </button>
  </Card>
</motion.div>

                   
                    
            

        </div>

    </section>
  )
}

export default page