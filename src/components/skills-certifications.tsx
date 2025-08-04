"use client";

import React, { useEffect, useState, useMemo, memo } from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Award,
  BrainCircuit,
  Cloud,
  Code,
  GitBranch,
  Server,
} from "lucide-react";

// ----- Types -----
interface Skill {
  name: string;
  proficiency: number; // 0-100
  years?: string;
}
interface SkillGroup {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}
interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  badgeUrl?: string;
  verificationLink?: string;
}

// Represents the skills, grouped by category, to be displayed.
const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    icon: Code,
    skills: [
      { name: "React.js / Next.js", proficiency: 95, years: "5+" },
      { name: "TypeScript", proficiency: 90, years: "4+" },
      { name: "Redux", proficiency: 90, years: "4+" },
      { name: "Tailwind CSS", proficiency: 85, years: "3+" },
      { name: "Figma (UI/UX Design)", proficiency: 85, years: "4+" },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js (Express.js)", proficiency: 90, years: "5+" },
      { name: "Python (Flask, FastAPI)", proficiency: 88, years: "6+" },
      { name: "RESTful APIs / GraphQL", proficiency: 88, years: "4+" },
      { name: "Microservices Architecture", proficiency: 85, years: "4+" },
    ],
  },
  {
    name: "AI & Machine Learning",
    icon: BrainCircuit, // Example icon
    skills: [
      { name: "Google Gemini", proficiency: 85, years: "2+" },
      {
        name: "Retrieval-Augmented Generation (RAG)",
        proficiency: 80,
        years: "2+",
      },
      { name: "FAISS", proficiency: 78, years: "2+" },
      { name: "Text Embeddings", proficiency: 80, years: "2+" },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS (EC2, Lambda, S3, DynamoDB)", proficiency: 85, years: "3+" },
      {
        name: "Azure (Functions, Container Apps)",
        proficiency: 80,
        years: "2+",
      },
      { name: "Docker", proficiency: 85, years: "4+" },
      { name: "CI/CD (GitHub Actions)", proficiency: 85, years: "4+" },
      { name: "Sentry / Cypress / Pytest", proficiency: 80, years: "3+" },
    ],
  },
  {
    name: "Databases & Geospatial",
    icon: GitBranch,
    skills: [
      { name: "PostgreSQL / SQL Server", proficiency: 85, years: "5+" },
      { name: "MongoDB / DynamoDB", proficiency: 80, years: "3+" },
      { name: "ArcGIS Pro / Esri JS API", proficiency: 90, years: "5+" },
      { name: "ArcPy / Google Earth Engine", proficiency: 85, years: "4+" },
    ],
  },
];

const certifications: Certification[] = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "In Progress (Expected Aug 2025)",
    badgeUrl: "", // Add URL when available
    verificationLink: "", // Add URL when available
  },
  {
    id: 2,
    name: "AWS Cloud Support Associate",
    issuer: "Amazon Web Services",
    date: "Jul 2025",
    badgeUrl: "https://coursera.org/share/b1a876875b16077a0123c924daa8b5fc",
    verificationLink:
      "https://coursera.org/share/b1a876875b16077a0123c924daa8b5fc",
  },
  {
    id: 3,
    name: "IBM Back-End Developer",
    issuer: "IBM",
    date: "Feb 2024",
    badgeUrl: "https://coursera.org/share/188c35e04be2856d3b125160aaae0acb",
    verificationLink:
      "https://coursera.org/share/188c35e04be2856d3b125160aaae0acb",
  },
];

// ----- Animation Variants -----
const skillBarVariants: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: (proficiency: number) => ({
    width: `${proficiency}%`,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  }),
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ----- Custom Hooks -----
function useHasSkills(groups: SkillGroup[]) {
  return useMemo(() => Array.isArray(groups) && groups.length > 0, [groups]);
}
function useHasCerts(certs: Certification[]) {
  return useMemo(() => Array.isArray(certs) && certs.length > 0, [certs]);
}

// ----- Presentational Components -----

interface SkillBarProps {
  skill: Skill;
}
const SkillBar: React.FC<SkillBarProps> = memo(({ skill }) => {
  const prefersReducedMotion = useReducedMotion();
  const displayYears = skill.years ? ` · ${skill.years}` : "";

  return (
    <div
      className="flex flex-col gap-2"
      data-cy={`skill-bar-${skill.name.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="flex justify-between items-center text-[var(--dark-color)]">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-[var(--accent-color)]">
          {skill.proficiency}%{displayYears}
        </span>
      </div>
      <div className="w-full bg-[var(--highlight-color)] rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="bg-[var(--accent-color)] h-2.5 rounded-full"
          custom={skill.proficiency}
          variants={skillBarVariants}
          initial="hidden"
          animate={prefersReducedMotion ? undefined : "visible"}
          style={{ width: `${skill.proficiency}%` }}
          aria-label={`${skill.name} proficiency ${skill.proficiency} percent`}
        />
      </div>
    </div>
  );
});
SkillBar.displayName = "SkillBar";

interface SkillGroupAccordionItemProps {
  group: SkillGroup;
  index: number;
}
const SkillGroupAccordionItem: React.FC<SkillGroupAccordionItemProps> = memo(
  ({ group, index }) => (
    <motion.div
      key={group.name}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
    >
      <div className="bg-[var(--primary-bg)] rounded-lg md:p-2 lg:p-2 sm:p-2 mb-5">
        <AccordionItem
          value={group.name}
          className="border-b border-[color:var(--highlight-color)/0.5]"
        >
          <AccordionTrigger className="flex items-center gap-3 py-4 text-xl font-semibold text-[var(--dark-color)] hover:no-underline">
            <group.icon
              className="h-6 w-6 text-[var(--accent-color)]"
              aria-hidden="true"
            />
            {group.name}
          </AccordionTrigger>
          <AccordionContent className="pt-4 pb-6">
            <div className="grid gap-4">
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </div>
    </motion.div>
  ),
);
SkillGroupAccordionItem.displayName = "SkillGroupAccordionItem";

interface CertificationCardProps {
  cert: Certification;
}
const CertificationCard: React.FC<CertificationCardProps> = memo(({ cert }) => {
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className="relative"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      tabIndex={0}
      aria-label={`${cert.name} certification card`}
      data-cy={`cert-card-${cert.id}`}
    >
      <Card className="bg-[var(--primary-bg)] border-[color:var(--secondary-bg)] shadow-lg transition-all duration-300 hover:shadow-lg glassmorphism-card">
        <CardContent className="flex items-center gap-0 p-4">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-[var(--dark-color)]">
              {cert.name}
            </CardTitle>
            <CardDescription className="text-[var(--accent-color)] text-sm">
              {cert.issuer} • {cert.date}
            </CardDescription>
          </div>
        </CardContent>
      </Card>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-[var(--accent-color)] rounded-xl flex flex-col items-center justify-center p-4 text-[var(--primary-bg)] z-10"
          role="dialog"
          aria-label="Certification details overlay"
        >
          <Award className="h-10 w-10 mb-2" aria-hidden="true" />
          <p className="text-center text-sm mb-4">Verified Credential</p>
          {cert.verificationLink && (
            <Link
              href={cert.verificationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                className="bg-[var(--primary-bg)] text-[var(--dark-color)] hover:bg-[color:var(--highlight-color)]"
                data-cy={`view-cert-btn-${cert.id}`}
              >
                View Certification
              </Button>
            </Link>
          )}
        </motion.div>
      )}
    </motion.div>
  );
});
CertificationCard.displayName = "CertificationCard";

// ----- Container Component -----
export default function SkillsCertifications() {
  const hasSkills = useHasSkills(skillGroups);
  const hasCerts = useHasCerts(certifications);

  useEffect(() => {
    performance.mark("skills-certifications-mounted");
    return () => {
      performance.mark("skills-certifications-unmounted");
      performance.measure(
        "SkillsCertifications lifecycle",
        "skills-certifications-mounted",
        "skills-certifications-unmounted",
      );
    };
  }, []);

  if (!hasSkills && !hasCerts) {
    return (
      <section
        id="skills"
        className="w-full py-12 md:py-24 lg:py-32 bg-[var(--primary-bg)] text-[var(--dark-color)]"
        data-cy="skills-section-empty"
        aria-label="Skills and certifications empty state"
      >
        <div className="container px-4 text-center">
          <p className="text-lg">No skills or certifications available.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="skills"
      className="relative z-0 w-full px-5 py-12 md:py-24 lg:py-32 bg-[var(--primary-bg)] text-[var(--dark-color)]"
      data-cy="skills-section"
      aria-label="Skills and certifications section"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none text-neutral-300 dark:text-neutral-700"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(currentColor 2px, transparent 2px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10 container mx-auto max-w-[1250px] px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2
            className="text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[var(--dark-color)]"
            data-cy="skills-heading"
          >
            Skills & Expertise
          </h2>
          <p
            className="max-w-[900px] text-lg md:text-xl text-[var(--accent-color)]"
            data-cy="skills-subheading"
          >
            My technical proficiencies and validated certifications that drive
            impactful solutions.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Skills Column */}
          <div>
            <h3
              className="text-3xl font-bold mb-8 text-[var(--dark-color)]"
              data-cy="skills-title"
            >
              Technical Skills
            </h3>
            {hasSkills ? (
              <Accordion
                type="multiple"
                defaultValue={skillGroups.map((g) => g.name)}
                className="w-full"
              >
                {skillGroups.map((group, i) => (
                  <SkillGroupAccordionItem
                    key={group.name}
                    group={group}
                    index={i}
                  />
                ))}
              </Accordion>
            ) : (
              <p className="text-center text-[var(--accent-color)]">
                No skills available.
              </p>
            )}
          </div>

          {/* Certifications Column */}
          <div>
            <h3
              className="text-3xl font-bold mb-8 text-[var(--dark-color)]"
              data-cy="certifications-title"
            >
              Certifications
            </h3>
            {hasCerts ? (
              <div
                className="grid gap-6 sm:grid-cols-1 md:grid-cols-2"
                data-cy="certifications-grid"
              >
                {certifications.map((cert) => (
                  <CertificationCard key={cert.id} cert={cert} />
                ))}
              </div>
            ) : (
              <p className="text-center text-[var(--accent-color)]">
                No certifications available.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
