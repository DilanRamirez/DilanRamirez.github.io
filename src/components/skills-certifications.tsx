"use client";

import { Button } from "@/components/ui/button";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { motion, Variants, easeOut } from "framer-motion";
import { Award, Cloud, Code, GitBranch, Server } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const skillGroups = [
  {
    name: "Frontend",
    icon: Code,
    skills: [
      { name: "React", proficiency: 95, years: "5+" },
      { name: "Next.js", proficiency: 90, years: "3+" },
      { name: "TypeScript", proficiency: 90, years: "4+" },
      { name: "Tailwind CSS", proficiency: 95, years: "3+" },
      { name: "HTML/CSS", proficiency: 98, years: "7+" },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", proficiency: 90, years: "5+" },
      { name: "Express.js", proficiency: 85, years: "4+" },
      { name: "Python", proficiency: 80, years: "6+" },
      { name: "Spring Boot", proficiency: 75, years: "2+" },
      { name: "RESTful APIs", proficiency: 90, years: "5+" },
    ],
  },
  {
    name: "Cloud",
    icon: Cloud,
    skills: [
      { name: "AWS (EC2, S3, Lambda, RDS)", proficiency: 90, years: "4+" },
      { name: "Docker", proficiency: 85, years: "3+" },
      { name: "Kubernetes", proficiency: 70, years: "1+" },
      { name: "Serverless", proficiency: 88, years: "3+" },
    ],
  },
  {
    name: "DevOps & Databases",
    icon: GitBranch,
    skills: [
      { name: "Git/GitHub", proficiency: 95, years: "7+" },
      { name: "CI/CD (GitHub Actions)", proficiency: 80, years: "3+" },
      { name: "PostgreSQL", proficiency: 85, years: "5+" },
      { name: "MongoDB", proficiency: 75, years: "3+" },
    ],
  },
];

const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "Jan 2023",
    badgeUrl: "/placeholder.svg?height=100&width=100",
    verificationLink: "https://www.credly.com/badges/...", // Placeholder
  },
  {
    id: 2,
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "Aug 2024",
    badgeUrl: "/placeholder.svg?height=100&width=100",
    verificationLink: "https://www.credly.com/badges/...", // Placeholder
  },
  {
    id: 3,
    name: "Professional Scrum Developer I",
    issuer: "Scrum.org",
    date: "Mar 2022",
    badgeUrl: "/placeholder.svg?height=100&width=100",
    verificationLink: "https://www.credly.com/badges/...", // Placeholder
  },
];

export default function SkillsCertifications() {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  const skillBarVariants: Variants = {
    hidden: { width: 0, opacity: 0 },
    visible: (proficiency: number) => ({
      width: `${proficiency}%`,
      opacity: 1,
      transition: { duration: 1.5, ease: easeOut },
    }),
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section
      id="skills"
      className="w-full py-12 md:py-24 lg:py-32 bg-[var(--primary-bg)] text-[var(--dark-color)]"
    >
      <div className="container px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[var(--dark-color)]">
            Skills & Expertise
          </h2>
          <p className="max-w-[900px] text-lg md:text-xl text-[var(--accent-color)]">
            My technical proficiencies and validated certifications that drive
            impactful solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-[var(--dark-color)]">
              Technical Skills
            </h3>
            <Accordion
              type="multiple"
              defaultValue={[
                "Frontend",
                "Backend",
                "Cloud",
                "DevOps & Databases",
              ]}
              className="w-full"
            >
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={group.name}
                    className="border-b border-[color:var(--highlight-color)/0.5]"
                  >
                    <AccordionTrigger className="flex items-center gap-3 py-4 text-xl font-semibold text-[var(--dark-color)] hover:no-underline">
                      <group.icon className="h-6 w-6 text-[var(--accent-color)]" />
                      {group.name}
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6">
                      <div className="grid gap-4">
                        {group.skills.map((skill) => (
                          <div key={skill.name} className="flex flex-col gap-2">
                            <div className="flex justify-between items-center text-[var(--dark-color)]">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-sm text-[var(--accent-color)]">
                                {skill.proficiency}%
                              </span>
                            </div>
                            <div className="w-full bg-[var(--highlight-color)] rounded-full h-2.5">
                              <motion.div
                                className="bg-[var(--accent-color)] h-2.5 rounded-full"
                                custom={skill.proficiency}
                                variants={skillBarVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.8 }}
                              />
                            </div>
                            <span className="text-xs text-[var(--accent-color)] text-right">
                              {skill.years
                                ? `Advanced: ${skill.years} experience`
                                : ""}
                            </span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-[var(--dark-color)]">
              Certifications
            </h3>
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => setHoveredCert(cert.id)}
                  onMouseLeave={() => setHoveredCert(null)}
                >
                  <Card className="bg-[var(--secondary-bg)] border-[color:var(--highlight-color)] shadow-md transition-all duration-300 hover:shadow-lg glassmorphism-card">
                    <CardContent className="flex items-center gap-4 p-6">
                      <Image
                        src={cert.badgeUrl || "/placeholder.svg"}
                        alt={`${cert.name} badge`}
                        width={80}
                        height={80}
                        className="rounded-full object-contain"
                      />
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold text-[var(--dark-color)]">
                          {cert.name}
                        </CardTitle>
                        <CardDescription className="text-[var(--accent-color)] text-sm">
                          {cert.issuer} &bull; {cert.date}
                        </CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                  {/* Certification Preview / Flip Effect (simplified) */}
                  {hoveredCert === cert.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-[color:var(--dark-color)/0.9] rounded-xl flex flex-col items-center justify-center p-4 text-[var(--primary-bg)] z-10"
                    >
                      <Award className="h-10 w-10 mb-2" />
                      <p className="text-center text-sm mb-4">
                        Verified Credential
                      </p>
                      <Link
                        href={cert.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="secondary"
                          className="bg-[var(--primary-bg)] text-[var(--dark-color)] hover:bg-[color:var(--highlight-color)]"
                        >
                          View Certification
                        </Button>
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
