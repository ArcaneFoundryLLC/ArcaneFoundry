"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  {
    src: "/tradeEqualizer-demo-image.png",
    alt: "TradeEqualizer Demo Screenshot 1",
  },
  {
    src: "/demo-image-2.png", 
    alt: "TradeEqualizer Demo Screenshot 2",
  },
  {
    src: "/demo-image-3.png",
    alt: "TradeEqualizer Demo Screenshot 3", 
  },
];

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="mx-auto h-auto w-full max-w-md transition-opacity duration-300"
          loading="lazy"
        />
        
        {/* Navigation arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={goToNext}
          aria-label="Next image"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="mt-4 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-ember"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="mt-2 text-center text-sm text-slate-500">
        {currentIndex + 1} of {images.length}
      </div>
    </div>
  );
}
