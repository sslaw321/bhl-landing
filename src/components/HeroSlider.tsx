'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=900&q=80',
    alt: 'Industrial cooling tower facility',
    caption: 'Industrial Cooling Systems',
  },
  {
    src: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=900&q=80',
    alt: 'Power plant cooling towers',
    caption: 'Power Plant Applications',
  },
  {
    src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80',
    alt: 'Large scale industrial facility',
    caption: 'Large-Scale Industrial Projects',
  },
  {
    src: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=900&q=80',
    alt: 'Manufacturing and production facility',
    caption: 'Manufacturing & Production',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-full min-h-[520px] overflow-hidden bg-[#0d2a4a]">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current && !isTransitioning ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="50vw"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-[#0d2a4a]/40" />
        </div>
      ))}

      {/* Caption */}
      <div className="absolute bottom-12 left-0 right-0 px-8">
        <p className="text-white text-sm font-semibold tracking-wide drop-shadow">
          {slides[current].caption}
        </p>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-6' : 'bg-white/40 w-1.5'
            }`}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
