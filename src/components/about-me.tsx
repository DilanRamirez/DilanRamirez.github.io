"use client";

import React, { useEffect, memo } from "react";
import { motion, type Variants, type Easing } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

// ----- Types -----
interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

// ----- Centralized Data / Config -----
// ----- Centralized Data / Config -----
const careerTimeline: TimelineMilestone[] = [
  {
    year: "2021",
    title: "Programmer Analyst I @ USC Institute for Creative Technologies",
    description:
      "Developed scalable AI-enhanced web applications for U.S. Army Research Office projects. Led UI/UX development with React and Node.js, implemented microservices, role-based authentication, Docker containerization, and authored 200+ automated tests.",
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
    title: "Research Assistant @ University of Texas at El Paso",
    description:
      "Engineered geospatial databases, automated data pipelines with Python, and developed reusable React components for GIS applications. Published 7 npm packages used across Arctic research mapping projects and implemented CI/CD pipelines.",
    icon: (
      <Briefcase
        className="h-5 w-5 text-[var(--primary-bg)]"
        aria-hidden="true"
      />
    ), // decorative
    iconBg: "bg-[var(--dark-color)]",
  },
  {
    year: "2021",
    title: "Graduated with B.S. in Computer Science (Cum Laude)",
    description:
      "University of Texas at El Paso • Focused on distributed systems and algorithms • Graduated with 3.6 GPA and Cum Laude Honors.",
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
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as Easing },
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
      with over 5 years of experience building scalable web and{" "}
      <span className="font-semibold text-[var(--dark-color)]">
        geospatial applications
      </span>
      . My expertise spans{" "}
      <span className="font-semibold text-[var(--dark-color)]">
        React, TypeScript, Node.js, and microservices
      </span>{" "}
      with strong proficiency in{" "}
      <span className="font-semibold text-[var(--dark-color)]">
        CI/CD, Docker, and automated testing
      </span>
      . I am AWS Cloud Support Associate certified and have hands-on experience
      with{" "}
      <span className="font-semibold text-[var(--dark-color)]">
        EC2, Linux, and IAM
      </span>{" "}
      for deploying and troubleshooting cloud solutions.
    </p>
    <p
      className="text-lg text-[var(--accent-color)] leading-relaxed break-words"
      data-cy="bio-paragraph-2"
    >
      I thrive in{" "}
      <span className="font-semibold text-[var(--dark-color)]">
        agile environments
      </span>{" "}
      and excel at transforming stakeholder requirements into high-impact
      solutions. My journey includes contributions to{" "}
      <span className="font-semibold text-[var(--dark-color)]">
        U.S. Army Research Office AI projects
      </span>{" "}
      and Arctic research mapping tools, blending{" "}
      <span className="font-semibold text-[var(--dark-color)]">
        cutting-edge technology
      </span>{" "}
      with real-world applications.
    </p>
    <ul
      className="list-disc list-inside space-y-2 text-lg text-[var(--accent-color)]"
      data-cy="bio-highlights"
    >
      <li>
        Led UI/UX and front-end development for AI-driven platforms under the
        U.S. Army Research Office using React and Node.js.
      </li>
      <li>
        Engineered geospatial databases and automated pipelines using Python and
        ArcPy, reducing deployment times by 99%.
      </li>
      <li>
        Published 7 npm packages supporting GIS applications and implemented
        CI/CD pipelines for automated deployments.
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
        className={`absolute -left-6 md:-left-13 top-0 flex items-center justify-center w-10 h-10 rounded-full ${milestone.iconBg} z-10 shadow-md ring-2 ring-white`}
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
