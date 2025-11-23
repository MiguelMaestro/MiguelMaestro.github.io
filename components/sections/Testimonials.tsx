"use client";

import { useI18n } from "@/lib/i18n";
import { Testimonial } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

/**
 * Testimonials Component
 *
 * Carousel of recommendations with:
 * - Auto-play with manual controls
 * - Fade + slide animations
 * - Star ratings
 * - Responsive design
 */
export default function Testimonials() {
  const { t } = useI18n();
  const testimonials = t.testimonials.list as Testimonial[];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-20 px-4 overflow-hidden" id="testimonials">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-azure-500 to-accent bg-clip-text text-transparent">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-azure-500 to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full"
            >
              {/* Testimonial Card */}
              <div className="relative p-8 md:p-12 rounded-3xl bg-white/5 dark:bg-black/20 border border-white/20 shadow-2xl">
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 text-6xl text-azure-500/20 select-none">
                  "
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: currentTestimonial.rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-center text-foreground/90 leading-relaxed mb-8 italic">
                  "{currentTestimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center gap-3">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-azure-500 to-accent flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    {currentTestimonial.name.charAt(0)}
                  </div>

                  {/* Name & Role */}
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-foreground">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm text-azure-500">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center hover:bg-azure-500/20 hover:border-azure-500/50 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-azure-500" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center hover:bg-azure-500/20 hover:border-azure-500/50 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-foreground group-hover:text-azure-500" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-azure-500 to-accent"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
