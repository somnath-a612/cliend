'use cliend';

import { SecondImage } from "../asseast/page";

function page() {
  return (
     <section id="about" className="pt-10  px-6 md:px-24 bg-gray-800 text-white">
      <h1 className="text-center pb-10 font-bold text-2xl md:text-3xl font-serif text-blue-500">
        About Me
      </h1>

      <main className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 pb-24">

        <div className="md:w-1/2 text-center md:text-left">
          <h6 className="font-serif  text-sm md:text-base leading-relaxed">
            My journey started with simple HTML pages — and now I build
            full-scale frontend applications using
            <span className="font-bold"> React, Tailwind, and API integrations. And I also know Git &amp; GitHub.</span>
            <br /><br />
            I love transforming ideas into pixel-perfect UI designs and writing
            clean, maintainable code. Every project I build teaches me something
            new and helps me grow as a developer.
          </h6>
        </div>

        {/* <img
          src="https://placehold.co/400x400"
          alt=""
          className="w-48 h-48 md:w-72 md:h-72 rounded-xl object-cover shadow-lg"
        /> */}

        {
          SecondImage.map((items, index) => (
            <img key = {index} src={items.img} alt={items.name} className="w-52 h-52 md:w-72 md:h-72 rounded-xl object-cover shadow-lg"/>
          ))
        }
        

      </main>
      
    </section>
  )
}

export default page