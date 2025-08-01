/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useCallback, useState, memo } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";
import { Download, LinkIcon } from "lucide-react";
import "../app/globals.css"; // Import global styles

// ----- Centralized constants/config -----
const TYPING_PHRASES = [
  "Building scalable web & geospatial apps powered by AWS and modern stacks.",
  "Expert in React, TypeScript, Node.js, and Cloud Architecture.",
  "Crafting innovative solutions for complex challenges.",
];

// Typing animation hook: encapsulates typing/deleting logic and keeps component lean.
function useTypingLoop(
  phrases: string[],
  typingSpeed = 500,
  pauseDuration = 1000,
  initialDelay = 300
): string {
  const [displayText, setDisplayText] = useState("");
  const isDeletingRef = useRef(false);
  const phraseIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const type = () => {
      const current = phrases[phraseIndexRef.current];
      if (isDeletingRef.current) {
        charIndexRef.current = Math.max(0, charIndexRef.current - 1);
        setDisplayText(current.substring(0, charIndexRef.current));
      } else {
        charIndexRef.current = Math.min(
          current.length,
          charIndexRef.current + 1
        );
        setDisplayText(current.substring(0, charIndexRef.current));
      }

      if (!isDeletingRef.current && charIndexRef.current === current.length) {
        // Pause before deleting
        timeoutRef.current = window.setTimeout(() => {
          isDeletingRef.current = true;
        }, pauseDuration);
      } else if (isDeletingRef.current && charIndexRef.current === 0) {
        // Move to next phrase
        isDeletingRef.current = false;
        phraseIndexRef.current = (phraseIndexRef.current + 1) % phrases.length;
      }

      const delay = isDeletingRef.current ? typingSpeed : typingSpeed;
      timeoutRef.current = window.setTimeout(type, delay);
    };

    timeoutRef.current = window.setTimeout(type, initialDelay);
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [phrases, typingSpeed, pauseDuration, initialDelay]);

  return displayText;
}

// Presentational component: Subline with typing effect.
interface TypingSublineProps {
  phrases: string[];
  className?: string;
  "data-cy"?: string;
}
const TypingSubline: React.FC<TypingSublineProps> = memo(
  ({ phrases, className = "", ...rest }) => {
    const text = useTypingLoop(phrases);
    return (
      <p className={className} aria-live="polite" {...rest}>
        {text}
      </p>
    );
  }
);
TypingSubline.displayName = "TypingSubline";

// Composite CTA buttons (View Projects + Download Resume)
const HeroCTAs: React.FC = memo(() => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 15px rgba(138, 138, 138, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        className="rounded-md"
      >
        <Link href="#projects" aria-label="View my projects">
          <Button
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-[var(--dark-color)] px-8 text-base font-semibold text-[var(--primary-bg)] shadow-lg transition-all duration-300 hover:bg-[var(--dark-color)]/90"
            data-cy="view-projects-btn"
          >
            <LinkIcon className="h-5 w-5 mr-2" aria-hidden="true" /> View My
            Projects
          </Button>
        </Link>
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 15px rgba(138, 138, 138, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        className="rounded-md"
      >
        <Link
          href="/resume.pdf"
          download="John_Doe_Resume.pdf"
          aria-label="Download resume"
        >
          <Button
            variant="outline"
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border-2 border-[var(--accent-color)] bg-transparent px-8 text-base font-semibold text-[var(--dark-color)] shadow-lg transition-all duration-300 hover:bg-[var(--accent-color)] hover:text-[var(--primary-bg)]"
            data-cy="download-resume-btn"
          >
            <Download className="h-5 w-5 mr-2" aria-hidden="true" /> Download
            Resume
          </Button>
        </Link>
      </motion.div>
    </div>
  );
});
HeroCTAs.displayName = "HeroCTAs";

// Background with parallax effect. Separated so complexity stays isolated.
interface ParallaxBackgroundProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
}
const ParallaxBackground: React.FC<ParallaxBackgroundProps> = memo(
  ({ x, y }) => {
    const backgroundX = useTransform(x, [-100, 100], [-20, 20]);
    const backgroundY = useTransform(y, [-100, 100], [-20, 20]);
    const [showBackground, setShowBackground] = useState(true);

    const handleImageError = () => {
      setShowBackground(false);
      console.warn(
        "Background image failed to load; hiding parallax background."
      );
    };

    if (!showBackground) return null;

    return (
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        style={{ x: backgroundX, y: backgroundY }}
        aria-hidden="true"
      >
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Background Pattern"
          fill
          style={{ objectFit: "cover" }}
          className="pointer-events-none"
          onError={handleImageError}
          sizes="100vw"
        />
      </motion.div>
    );
  }
);
ParallaxBackground.displayName = "ParallaxBackground";

// Main Hero Section container — orchestrates interaction and layout.
export default function HeroSection() {
  // Detect environment to decide if parallax/tilt should be enabled (disable on touch or prefers-reduced-motion)
  const [enableParallax, setEnableParallax] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const touchMq = window.matchMedia("(hover: none)");
    const reducedMotionMq = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const update = () => {
      // disable parallax if device is touch-based or user prefers reduced motion
      setEnableParallax(!(touchMq.matches || reducedMotionMq.matches));
    };
    update();
    // Listen for changes
    if (touchMq.addEventListener) {
      touchMq.addEventListener("change", update);
    } else {
      touchMq.addListener(update as any);
    }
    if (reducedMotionMq.addEventListener) {
      reducedMotionMq.addEventListener("change", update);
    } else {
      reducedMotionMq.addListener(update as any);
    }
    return () => {
      if (touchMq.removeEventListener) {
        touchMq.removeEventListener("change", update);
      } else {
        touchMq.removeListener(update as any);
      }
      if (reducedMotionMq.removeEventListener) {
        reducedMotionMq.removeEventListener("change", update);
      } else {
        reducedMotionMq.removeListener(update as any);
      }
    };
  }, []);

  // Throttle updates with requestAnimationFrame to avoid flood of updates on mousemove.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const rafRef = useRef<number | null>(null);
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      // Extract needed values immediately; React synthetic events are pooled.
      const target = event.currentTarget;
      const clientX = event.clientX;
      const clientY = event.clientY;
      const rect = target.getBoundingClientRect();

      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        x.set(clientX - rect.left - rect.width / 2);
        y.set(clientY - rect.top - rect.height / 2);
      });
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  // Typing subline state is handled in the hook inside TypingSubline.

  // Observability: mark mounts and unmounts for simple profiling.
  useEffect(() => {
    performance.mark("hero-section-mounted");
    console.debug("HeroSection mounted");
    return () => {
      performance.mark("hero-section-unmounted");
      performance.measure(
        "HeroSection lifecycle",
        "hero-section-mounted",
        "hero-section-unmounted"
      );
    };
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden text-[var(--dark-color)] bg-[var(--primary-bg)] flex items-center justify-center"
      onMouseMove={enableParallax ? handleMouseMove : undefined}
      onMouseLeave={enableParallax ? handleMouseLeave : undefined}
      aria-label="Hero section introducing the software engineer"
      data-cy="hero-section"
    >
      <ParallaxBackground x={x} y={y} />

      <div className="container mx-auto max-w-[1250px] px-8 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <motion.div
            className="flex flex-col justify-center space-y-6"
            style={
              enableParallax
                ? { rotateX, rotateY, transformStyle: "preserve-3d" as const }
                : { transformStyle: "preserve-3d" as const }
            }
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <h1
                className="text-6xl text-center font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-[var(--dark-color)]"
                data-cy="hero-headline"
              >
                Full-Stack Software Developer
              </h1>
              <TypingSubline
                phrases={TYPING_PHRASES}
                className="max-w-[700px] text-center text-lg md:text-xl text-[var(--accent-color)] font-light"
                data-cy="hero-subline"
              />
            </div>
            <HeroCTAs />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
