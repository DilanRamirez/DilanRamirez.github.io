"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Star } from "lucide-react";

const careerTimeline = [
  {
    year: "2025",
    title: "Senior Full-Stack Engineer @ TechCorp",
    description:
      "Leading development of next-gen cloud-native applications, focusing on AI integration and performance optimization.",
    icon: <Star className="h-5 w-5 text-[var(--primary-bg)]" />,
    iconBg: "bg-[var(--dark-color)]",
  },
  {
    year: "2022",
    title: "Full-Stack Software Engineer @ Innovate Solutions",
    description:
      "Designed and implemented scalable microservices for a SaaS platform, improving system reliability and developer productivity.",
    icon: <Briefcase className="h-5 w-5 text-[var(--primary-bg)]" />,
    iconBg: "bg-[var(--accent-color)]",
  },
  {
    year: "2019",
    title: "Software Developer @ Global Systems Inc.",
    description:
      "Contributed to the development of enterprise-level applications, specializing in frontend frameworks and API integrations.",
    icon: <Briefcase className="h-5 w-5 text-[var(--primary-bg)]" />,
    iconBg: "bg-[var(--dark-color)]",
  },
  {
    year: "2017",
    title: "Graduated with B.S. in Computer Science",
    description:
      "University of Technology, focused on distributed systems and algorithms.",
    icon: <GraduationCap className="h-5 w-5 text-[var(--primary-bg)]" />,
    iconBg: "bg-[var(--accent-color)]",
  },
];

export default function AboutMe() {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-[var(--primary-bg)] text-[var(--dark-color)]"
    >
      <div className="container mx-auto max-w-[1250px] px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[var(--dark-color)]">
            About Me
          </h2>
          <p className="max-w-[900px] text-lg md:text-xl text-[var(--accent-color)]">
            A brief journey through my professional background and what drives
            my passion for technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Bio */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-[var(--dark-color)]">
              John Doe: Full-Stack Innovator
            </h3>
            <p className="text-lg text-[var(--accent-color)] leading-relaxed">
              I am a{" "}
              <span className="font-semibold text-[var(--dark-color)]">
                Full-Stack Software Engineer
              </span>{" "}
              with over 7 years of experience building robust, scalable, and
              user-centric web applications. My expertise spans across modern
              frontend frameworks like{" "}
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
            <p className="text-lg text-[var(--accent-color)] leading-relaxed">
              I thrive on solving complex problems and am passionate about
              creating efficient, maintainable, and high-performance software.
              My journey has involved working on diverse projects, from{" "}
              <span className="font-semibold text-[var(--dark-color)]">
                geospatial data platforms
              </span>{" "}
              to{" "}
              <span className="font-semibold text-[var(--dark-color)]">
                e-commerce microservices
              </span>
              , always with a focus on delivering tangible business value.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-[var(--accent-color)]">
              <li>
                <span className="font-semibold text-[var(--dark-color)]">
                  Key Highlight 1:
                </span>{" "}
                Led a team to migrate legacy systems to a serverless
                architecture, reducing operational costs by 40%.
              </li>
              <li>
                <span className="font-semibold text-[var(--dark-color)]">
                  Key Highlight 2:
                </span>{" "}
                Developed a real-time analytics dashboard that improved data
                visibility for stakeholders.
              </li>
              <li>
                <span className="font-semibold text-[var(--dark-color)]">
                  Key Highlight 3:
                </span>{" "}
                Mentored junior developers, fostering a collaborative and
                growth-oriented team environment.
              </li>
            </ul>
          </motion.div>

          {/* Right Column: Animated Career Timeline */}
          <div className="relative pl-8 md:pl-12">
            <h3 className="text-3xl font-bold mb-8 text-[var(--dark-color)]">
              Career Timeline
            </h3>
            {/* Vertical line */}
            <div className="absolute left-2 md:left-4 top-0 w-0.5 bg-gray-300 h-full"></div>

            <div className="space-y-10">
              {careerTimeline.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={itemVariants}
                  transition={{ delay: index * 0.15 }}
                >
                  {/* Icon circle */}
                  <div
                    className={`absolute -left-6 md:-left-8 top-0 flex items-center justify-center w-10 h-10 rounded-full ${milestone.iconBg} z-10 shadow-md ring-2 ring-white`}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
