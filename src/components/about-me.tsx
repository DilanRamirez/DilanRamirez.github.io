"use client";

import React, { useEffect, memo } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Star } from "lucide-react";

// ----- Types -----
interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

// ----- Centralized Data / Config -----
const careerTimeline: TimelineMilestone[] = [
  {
    year: "2025",
    title: "Senior Full-Stack Engineer @ TechCorp",
    description:
      "Leading development of next-gen cloud-native applications, focusing on AI integration and performance optimization.",
    icon: (
      <Star className="h-5 w-5 text-[var(--primary-bg)]" aria-hidden="true" />
    ), // decorative
    iconBg: "bg-[var(--dark-color)]",
  },
  {
    year: "2022",
    title: "Full-Stack Software Engineer @ Innovate Solutions",
    description:
      "Designed and implemented scalable microservices for a SaaS platform, improving system reliability and developer productivity.",
    icon: (
      <Briefcase
        className="h-5 w-5 text-[var(--primary-bg)]"
        aria-hidden="true"
      />
    ), // decorative
    iconBg: "bg-[var(--accent-color)]",
  },
  {
    year: "2019",
    title: "Software Developer @ Global Systems Inc.",
    description:
      "Contributed to the development of enterprise-level applications, specializing in frontend frameworks and API integrations.",
    icon: (
      <Briefcase
        className="h-5 w-5 text-[var(--primary-bg)]"
        aria-hidden="true"
      />
    ), // decorative
    iconBg: "bg-[var(--dark-color)]",
  },
  {
    year: "2017",
    title: "Graduated with B.S. in Computer Science",
    description:
      "University of Technology, focused on distributed systems and algorithms.",
    icon: (
      <GraduationCap
        className="h-5 w-5 text-[var(--primary-bg)]"
        aria-hidden="true"
      />
    ), // decorative
    iconBg: "bg-[var(--accent-color)]",
  },
];

// Animation variants reused for consistency
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

// ----- Presentational Components -----

const SectionHeader: React.FC = memo(() => (
  <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
    <h2
      className="text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[var(--dark-color)]"
      data-cy="about-heading"
    >
      About Me
    </h2>
    <p
      className="max-w-[900px] text-lg md:text-xl text-[var(--accent-color)]"
      data-cy="about-subheading"
    >
      A brief journey through my professional background and what drives my
      passion for technology.
    </p>
  </div>
));
SectionHeader.displayName = "SectionHeader";

const BioSection: React.FC = memo(() => (
  <div className="space-y-6" data-cy="bio-section">
    <p
      className="text-lg text-[var(--accent-color)] leading-relaxed break-words"
      data-cy="bio-paragraph-1"
    >
      I am a{" "}
      <span className="font-semibold text-[var(--dark-color)]">
        Full-Stack Software Engineer
      </span>{" "}
      with over 7 years of experience building robust, scalable, and
      user-centric web applications. My expertise spans across modern frontend
      frameworks like{" "}
      <span className="font-semibold text-[var(--dark-color)]">
        React and Next.js
      </span>
      , powerful backend technologies such as{" "}
      <span className="font-semibold text-[var(--dark-color)]">
        Node.js and Python
      </span>
      , and extensive experience with{" "}
      <span className="font-semibold text-[var(--dark-color)]">
        AWS cloud services
      </span>
      .
    </p>
    <p
      className="text-lg text-[var(--accent-color)] leading-relaxed break-words"
      data-cy="bio-paragraph-2"
    >
      I thrive on solving complex problems and am passionate about creating
      efficient, maintainable, and high-performance software. My journey has
      involved working on diverse projects, from{" "}
      <span className="font-semibold text-[var(--dark-color)]">
        geospatial data platforms
      </span>{" "}
      to{" "}
      <span className="font-semibold text-[var(--dark-color)]">
        e-commerce microservices
      </span>
      , always with a focus on delivering tangible business value.
    </p>
    <ul
      className="list-disc list-inside space-y-2 text-lg text-[var(--accent-color)]"
      data-cy="bio-highlights"
    >
      <li>
        <span className="font-semibold text-[var(--dark-color)]">
          Key Highlight 1:
        </span>{" "}
        Led a team to migrate legacy systems to a serverless architecture,
        reducing operational costs by 40%.
      </li>
      <li>
        <span className="font-semibold text-[var(--dark-color)]">
          Key Highlight 2:
        </span>{" "}
        Developed a real-time analytics dashboard that improved data visibility
        for stakeholders.
      </li>
      <li>
        <span className="font-semibold text-[var(--dark-color)]">
          Key Highlight 3:
        </span>{" "}
        Mentored junior developers, fostering a collaborative and
        growth-oriented team environment.
      </li>
    </ul>
  </div>
));
BioSection.displayName = "BioSection";

interface TimelineItemProps {
  milestone: TimelineMilestone;
  index: number;
}
const TimelineItem: React.FC<TimelineItemProps> = memo(
  ({ milestone, index }) => (
    <motion.div
      key={index}
      className="relative flex items-start gap-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUpVariants}
      transition={{ delay: index * 0.15 }}
      data-cy={`timeline-item-${index}`}
    >
      {/* Icon circle */}
      <div
        className={`absolute -left-6 md:-left-8 top-0 flex items-center justify-center w-10 h-10 rounded-full ${milestone.iconBg} z-10 shadow-md ring-2 ring-white`}
        aria-hidden="true"
      >
        {milestone.icon}
      </div>
      <div className="flex-1 ml-4 md:ml-0">
        <h4 className="text-xl font-semibold text-[var(--dark-color)]">
          {milestone.year}: {milestone.title}
        </h4>
        <p className="text-[var(--accent-color)] text-base mt-1">
          {milestone.description}
        </p>
      </div>
    </motion.div>
  ),
);
TimelineItem.displayName = "TimelineItem";

interface TimelineProps {
  milestones: TimelineMilestone[];
}
const Timeline: React.FC<TimelineProps> = memo(({ milestones }) => {
  if (!milestones || milestones.length === 0) {
    return (
      <p className="text-center text-[var(--accent-color)]">
        No career milestones available.
      </p>
    );
  }
  return (
    <div className="relative pl-4 md:pl-12" data-cy="timeline-container">
      <h3
        className="text-3xl font-bold mb-8 text-[var(--dark-color)]"
        data-cy="timeline-title"
      >
        Career Timeline
      </h3>
      <div
        className="absolute left-2 md:left-4 top-0 w-0.5 bg-gray-300 h-full"
        aria-hidden="true"
      />
      <div className="space-y-10">
        {milestones.map((milestone, idx) => (
          <TimelineItem key={idx} milestone={milestone} index={idx} />
        ))}
      </div>
    </div>
  );
});
Timeline.displayName = "Timeline";

// ----- Container Component -----
export default function AboutMe() {
  useEffect(() => {
    performance.mark("about-me-mounted");
    return () => {
      performance.mark("about-me-unmounted");
      performance.measure(
        "AboutMe lifecycle",
        "about-me-mounted",
        "about-me-unmounted",
      );
    };
  }, []);

  return (
    <section
      id="about"
      className="w-full px-5 py-12 md:py-24 lg:py-32 bg-[var(--primary-bg)] text-[var(--dark-color)]"
      data-cy="about-section"
      aria-label="About me section with bio and career timeline"
    >
      <div className="container mx-auto max-w-[1250px] px-4 sm:px-8 md:px-12 lg:px-16">
        <SectionHeader />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
          >
            <BioSection />
          </motion.div>
          <Timeline milestones={careerTimeline} />
        </div>
      </div>
    </section>
  );
}
