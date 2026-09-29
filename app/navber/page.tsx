'use client';

import  { useState } from 'react'
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { navber } from '../asseast/page'


function page() {

    const [hideNavber, setHideNavber] = useState(false)
    
  return (
       
        <nav className=" font-serif px-12 md:px-24 py-2 items-center  shadow fixed z-9 w-full mx-auto backdrop-blur-md transition-all duration-300">
            <div className="flex justify-between items-center ">
                <img src="/images/sss.png" alt="" className="rounded-full size-12" />

                <ul className="hidden md:flex gap-10 ">
                    {
                        navber.map((items, index) => (
                            <a key={index} href={items.href} className="text-blue-400 transition duration-300 hover:text-blue-600 hover:scale-110">{items.name}</a>
                        ))
                    }
                </ul>
                {!hideNavber ? <Menu className="md:hidden cursor-pointer" onClick={() => setHideNavber(!hideNavber)} /> : <X className="md:hidden cursor-pointer" onClick={() => setHideNavber(!hideNavber)} />}
                   

            </div>
            {hideNavber &&
                <motion.div
                    initial={{
                        height: 0,
                        opacity: 0
                    }}
                    animate={{
                        height: "auto",
                        opacity: 1
                    }}
                    exit={{
                        height: 0,
                        opacity: 0
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
                    className="overflow-hidden"
                >
                    <ul className="flex flex-col md:hidden gap-3 py-2">
                        {navber.map((items, index) => (
                            <a
                                key={index}
                                href={items.href}
                                className="text-muted-foreground"
                            >
                                {items.name}
                            </a>
                        ))}
                    </ul>
                </motion.div>}



        </nav >
        
    )
}

export default page