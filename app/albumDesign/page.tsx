'use client'

import { WeadingPhoto } from "@/app/asseast/page";

function page() {
  return (
    <section className="flex items-center justify-center min-h-screen w-full max-auto  space-y-2 py-2 bg-[#f8f6f2]">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center  text-center ">

            {
                WeadingPhoto.map((items, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center">
                            <img src={items.img.src} alt={items.name} className="w-[400px] h-[250px] object-cover rounded-lg shadow-lg" />
                            
                        </div>
                    )
                })
            }

        </main>
    </section>
  )
}

export default page