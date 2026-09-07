import React, { useState, useEffect, useRef } from "react";

// Replace image paths with your real assets (put them in /public or /src/assets)
const slides = [
  {
    id: 1,
    badge: "NEW LAUNCH",
    heading: (
      <>
        Uninterrupted <br />
        <span className="font-semibold">treks.</span> <br />
        Unmistakably <br />
        <span className="font-semibold">hers.</span>
      </>
    ),
    cta: "SHOP RUCKSACK",
    ctaLink: "/backpacks",
    image: "https://picsum.photos/seed/hero-trek/1600/700",
    overlay: "bg-black/10",
  },
  {
    id: 2,
    badge: "BESTSELLER",
    heading: (
      <>
        Carry your <br />
        <span className="font-semibold">story,</span> <br />
        every single <br />
        <span className="font-semibold">day.</span>
      </>
    ),
    cta: "SHOP BAGS",
    ctaLink: "/bags",
    image: "https://picsum.photos/seed/hero-story/1600/700",
    overlay: "bg-black/10",
  },
  {
    id: 3,
    badge: "FOR HIM",
    heading: (
      <>
        Built for <br />
        <span className="font-semibold">work.</span> <br />
        Made to <br />
        <span className="font-semibold">last.</span>
      </>
    ),
    cta: "SHOP FOR MEN",
    ctaLink: "/zouk-for-men",
    image: "https://picsum.photos/seed/hero-work/1600/700",
    overlay: "bg-black/10",
  },
  {
    id: 4,
    badge: "TRAVEL EDIT",
    heading: (
      <>
        Pack light. <br />
        <span className="font-semibold">Travel</span> <br />
        without <br />
        <span className="font-semibold">limits.</span>
      </>
    ),
    cta: "SHOP TRAVEL",
    ctaLink: "/travel-collection",
    image: "https://picsum.photos/seed/hero-travel/1600/700",
    overlay: "bg-black/10",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [active]);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const goTo = (index) => {
    setActive(index);
    startTimer();
  };

  return (
    <section className="relative w-full h-[520px] md:h-[560px] overflow-hidden bg-neutral-200">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === active ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background image */}
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${slide.overlay}`} />

          {/* Content */}
          <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-center">
            <span className="inline-block w-fit text-xs font-semibold tracking-wider text-white/90 border border-white/40 rounded-full px-3 py-1 mb-4">
              {slide.badge}
            </span>

            <h1 className="text-white text-4xl md:text-6xl font-light leading-[1.05] mb-8 max-w-xl">
              {slide.heading}
            </h1>

            <a
              href={slide.ctaLink}
              className="w-fit bg-white/90 hover:bg-white text-gray-900 text-sm font-semibold tracking-wide px-8 py-3.5 rounded transition-colors"
            >
              {slide.cta}
            </a>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
            className={`rounded-full transition-all ${
              index === active
                ? "w-2.5 h-2.5 bg-[#e07a3f]"
                : "w-2 h-2 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}