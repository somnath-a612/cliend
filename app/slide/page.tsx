
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "spy.JPEG", alt: "Wedding album" },
  { src: "spy.JPEG", alt: "Wedding photography" },
  { src: "spy.JPEG", alt: "Couple photography" },
  { src: "spy.JPEG", alt: "Album design" },
];

export default function page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % images.length
    );
  };

  // Automatically change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        (prev + 1) % images.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl">
      {/* Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          key={images[currentIndex].src}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1024px"
          className="object-cover transition-opacity duration-500"
        />

        {/* Image counter */}
        <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Navigation buttons */}
        <button
          type="button"
          onClick={previousImage}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black shadow-md backdrop-blur transition hover:scale-110 hover:bg-white"
        >
          <ChevronLeft size={25} />
        </button>

        <button
          type="button"
          onClick={nextImage}
          aria-label="Next image"
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black shadow-md backdrop-blur transition hover:scale-110 hover:bg-white"
        >
          <ChevronRight size={25} />
        </button>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Go to image ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-7 bg-white"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}