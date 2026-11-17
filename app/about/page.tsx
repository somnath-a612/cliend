'use client';

import { ProfileImages } from "../asseast/data";

function page() {

  console.log(Array.isArray(ProfileImages));


  return (
     <section id="about" className="pt-10  px-6 md:px-24 bg-[#f8f6f2] ">
      <h1 className="text-center pb-10 font-bold text-2xl md:text-3xl font-serif text-[#ae1e3b]">
        About Me
      </h1>

      <main className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 pb-24">

        <div className="md:w-1/2 text-center md:text-left ">
          <h6 className="font-serif  text-sm md:text-base leading-relaxed">
           I'm a creative Wedding Designer specializing in album design, social media creatives, wedding invitations, invitation videos, and visual branding.
I transform beautiful wedding moments into elegant visual experiences through creativity, storytelling, and thoughtful design.
          </h6>
        </div>

       
        {
          ProfileImages.map((items, index) => (
            <img key = {index} src={items.img} alt={items.name} className="w-52 h-52 md:w-72 md:h-72 rounded-xl object-cover shadow-lg"/>
          ))
        }
        
        

      </main>
      
      
      
    </section>
    
    
  )
  
  
}

export default page