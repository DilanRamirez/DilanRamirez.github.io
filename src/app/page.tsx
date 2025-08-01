"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Code } from "lucide-react";

// Client components for interactivity
import HeroSection from "@/components/hero-section";
import ProjectsShowcase from "@/components/projects-showcase";
import SkillsCertifications from "@/components/skills-certifications";
import PublicationsPresentations from "@/components/publications-presentations";
import AboutMe from "@/components/about-me";
import ContactFooter from "@/components/contact-footer";
import { ThemeProvider } from "@/components/theme-provider"; // Assuming you have a theme provider

export default function HomePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="flex flex-col min-h-[100dvh] bg-[var(--primary-bg)] text-[var(--dark-color)]">
        {/* Header - Simple navigation, can be expanded */}
        <header className="px-4 lg:px-6 h-14 flex items-center justify-between sticky top-0 z-50 bg-[color:var(--primary-bg)/0.8] backdrop-blur-md border-b border-[color:var(--highlight-color)/0.5]">
          <Link href="#" className="flex items-center gap-2 font-bold text-lg">
            <Code className="h-6 w-6 text-[color:var(--accent-color)]" />
            <span>Dilan Ramirez</span> {/* Replace with your name */}
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-[color:var(--accent-color)] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-[color:var(--accent-color)] transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-[color:var(--accent-color)] transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-[color:var(--accent-color)] transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button
            variant="outline"
            className="hidden md:inline-flex bg-transparent"
          >
            <Mail className="h-4 w-4 mr-2" />
            Hire Me
          </Button>
        </header>

        <main className="flex-1">
          <HeroSection />
          <AboutMe /> {/* Moved here */}
          <ProjectsShowcase />
          <SkillsCertifications />
          <PublicationsPresentations />
        </main>

        <ContactFooter />
      </div>
    </ThemeProvider>
  );
}
