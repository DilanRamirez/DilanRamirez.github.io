"use client";

import React, { useState, useMemo, useCallback, memo, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ExternalLink, Github, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import armapImage from "@/assets/armap.png";
import sabbathImage from "@/assets/sabbath+.png";
import aircoeeImage from "@/assets/AIRCOEE.png";

// ----- Types -----
interface TechIcon {
  name: string;
  icon?: string; // fallback to placeholder if missing
}

interface ProjectDetails {
  fullDescription: string;
  metrics: string[];
  techStackIcons?: TechIcon[];
}

interface Project {
  id: number;
  name: string;
  description: string;
  image?: string | StaticImageData;
  tags: string[];
  type: string;
  liveLink?: string;
  githubLink?: string;
  details: ProjectDetails;
}

// ----- Centralized Data / Config -----
const ALL_FILTER = "All" as const;
const filterButtons = [
  ALL_FILTER,
  "Work Projects",
  "Personal Projects",
] as const;

const projects: Project[] = [
  {
    id: 2,
    name: "U.S. Army AI Training Platform (AIRCOEE)",
    description:
      "Led front-end development for a U.S. Army project, delivering a scalable UI/UX with React and integrating LLM analysis capabilities.",
    image: aircoeeImage,
    tags: ["React", "TypeScript", "Node.js", "LLM", "Cypress", "Docker"],
    type: "Work Projects",
    liveLink: "",
    githubLink: "",
    details: {
      fullDescription:
        "As Lead Front-End Developer for the U.S. Army's AIRCOEE project, delivered a scalable UI/UX using React and TypeScript and integrated LLM analysis capabilities for AI-powered content revision. Drove user adoption across 6 Army training centers, achieving an 80%+ survey response rate and 5.67/6.0 user satisfaction. Increased system reliability by authoring 200+ end-to-end tests (Cypress) and championed code quality by leading peer reviews and managing CI/CD pipelines with Docker.",
      metrics: [
        "Achieved 5.67/6.0 user satisfaction rating",
        "80%+ survey response rate across 6 Army centers",
        "Authored 200+ end-to-end tests",
        "Integrated LLM for content generation & revision",
      ],
      techStackIcons: [
        {
          name: "React",
          icon: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        },
        {
          name: "TypeScript",
          icon: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
        },
        {
          name: "Cypress",
          icon: "https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white",
        },
        {
          name: "Docker",
          icon: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Geospatial Research Applications (ARMAP & AOV)",
    description:
      "Developed foundational npm packages and automated data pipelines for Arctic research web mapping applications, supporting over 100 researchers.",
    image: armapImage,
    tags: ["Python", "ArcPy", "npm", "React", "SQL Server", "CI/CD"],
    type: "Work Projects",
    liveLink: "https://armapgeoservices.battelle-aro.org/ARMAP/",
    githubLink: "",
    details: {
      fullDescription:
        "Developed and published 7 foundational npm packages to extend the capabilities of Esri's core widgets, introducing novel features not available in the official API. Engineered and maintained high-performance SQL Server Enterprise Geodatabases, supporting 114 unique NSF-sponsored projects. Reduced map service deployment times by 99% by automating data pipelines with Python and ArcPy.",
      metrics: [
        "Reduced new feature development time by 90%",
        "Reduced map deployment time by 99%",
        "Supported 114 unique NSF-sponsored projects",
        "Published 7 npm packages with novel features",
      ],
      techStackIcons: [
        {
          name: "Python",
          icon: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        },
        {
          name: "React",
          icon: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        },
        {
          name: "SQL Server",
          icon: "https://img.shields.io/badge/Microsoft_SQL_Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white",
        },
        {
          name: "npm",
          icon: "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white",
        },
      ],
    },
  },
  {
    id: 1,
    name: "Full-Stack AI Learning Platform (Sabbath+)",
    description:
      "Architected an AI-driven web application using Next.js, FastAPI, and a RAG pipeline with Google Gemini to enhance interactive study.",
    image: sabbathImage,
    tags: [
      "Next.js",
      "FastAPI",
      "Python",
      "Google Gemini",
      "RAG",
      "Docker",
      "AWS",
      "Azure",
    ],
    type: "Personal Projects",
    liveLink: "https://gentle-meadow-08f54890f.6.azurestaticapps.net/welcome",
    githubLink: "https://github.com/DilanRamirez/ai-sabbath-school-frontend",
    details: {
      fullDescription:
        "Architected and developed a comprehensive, AI-driven web application from the ground up to enhance interactive Bible study for a global user base. The system features a RAG pipeline with Google Gemini and FAISS for contextual semantic search and is deployed on a multi-cloud architecture leveraging Azure for services and AWS (S3, DynamoDB) for data.",
      metrics: [
        "Reduced LLM response latency by 80%",
        "Multi-cloud deployment (AWS & Azure)",
        "Full-stack architecture with Next.js & FastAPI",
        "Implemented RAG for contextual AI responses",
      ],
      techStackIcons: [
        {
          name: "Next.js",
          icon: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
        },
        {
          name: "FastAPI",
          icon: "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white",
        },
        {
          name: "Google Gemini",
          icon: "https://img.shields.io/badge/Google_Gemini-8E77D5?style=for-the-badge&logo=google-gemini&logoColor=white",
        },
        {
          name: "Docker",
          icon: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
        },
        {
          name: "AWS",
          icon: "https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=FF9900",
        },
        {
          name: "Azure",
          icon: "https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white",
        },
      ],
    },
  },
  {
    id: 6,
    name: "AI-Enhanced Flashcard Application",
    description:
      "A comprehensive, AI-enhanced flashcard application designed to provide a personalized and effective learning experience.",
    image:
      "https://github.com/DilanRamirez/flashcard-app/blob/main/preview.png?raw=true",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Google Gemini",
      "Vercel AI SDK",
    ],
    type: "Personal Projects",
    liveLink: "https://thankful-wave-0eb7d500f.2.azurestaticapps.net/",
    githubLink: "https://github.com/DilanRamirez/flashcard-app",
    details: {
      fullDescription:
        "This project is a smart study companion that not only presents flashcards but actively helps users learn by adapting to their progress and providing intelligent feedback. It features multiple study views, personalized learning analytics tracked via localStorage, and AI-powered quiz generation and explanations for mistakes using Google Gemini via the Vercel AI SDK.",
      metrics: [
        "Personalized study plans based on performance",
        "AI-generated quizzes with plausible distractors",
        "AI-powered explanations for incorrect answers",
        "Multiple study views (Single, Grid, List)",
        "Comprehensive interaction and performance tracking",
      ],
      techStackIcons: [
        {
          name: "Next.js",
          icon: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
        },
        {
          name: "React",
          icon: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        },
        {
          name: "Tailwind CSS",
          icon: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
        },
        {
          name: "Google Gemini",
          icon: "https://img.shields.io/badge/Google_Gemini-8E77D5?style=for-the-badge&logo=google-gemini&logoColor=white",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Boardify",
    description:
      "A lightweight virtual whiteboard/card layout tool for organizing, panning, zooming, and persisting draggable cards across devices.",
    image:
      "https://github.com/DilanRamirez/Boardify/blob/main/public/app.png?raw=true",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "LocalStorage"],
    type: "Personal Projects",
    liveLink: "https://jolly-plant-01ab0c410.2.azurestaticapps.net",
    githubLink: "#",
    details: {
      fullDescription:
        "Boardify showcases combining polished interactive UX (drag, touch, zoom, pan) with robust engineering practices such as resilient loading, responsive design, unified input handling, and recovery from stale service worker cache issues. Features include drag-and-drop cards with visual feedback, zoom & pan controls, persisted layout using local storage, adaptive responsive controls, and robust error detection with recovery flows. This project highlights React/Next.js expertise, TypeScript typing, input abstraction, transform mathematics, and user-centric error resilience.",
      metrics: [
        "Drag-and-drop cards with mouse and touch support",
        "Zooming (20%-300%) with focus-centered scaling",
        "Persistent card layout saved in local storage",
        "Robust stale asset detection and recovery",
        "Fully responsive, mobile-friendly controls",
      ],
      techStackIcons: [
        {
          name: "Next.js",
          icon: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
        },
        {
          name: "TypeScript",
          icon: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
        },
        {
          name: "React",
          icon: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        },
        {
          name: "Tailwind CSS",
          icon: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
        },
      ],
    },
  },
  {
    id: 4,
    name: "AI-Powered Chatbot",
    description:
      "Developed a conversational AI chatbot using OpenAI's GPT-3 and a custom knowledge base, deployed on a serverless platform.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "Flask", "OpenAI API", "AWS Lambda"],
    type: "Personal Projects",
    liveLink: "#",
    githubLink: "#",
    details: {
      fullDescription:
        "Created an intelligent conversational AI chatbot capable of answering user queries based on a custom knowledge base. The backend was built with Python and Flask, integrating with OpenAI's GPT-3 API for natural language understanding and generation. Deployed as a serverless application on AWS Lambda, ensuring scalability and cost-efficiency. The chatbot successfully reduced customer support queries by 20% through automated and accurate responses.",
      metrics: [
        "Reduced customer support queries by 20%",
        "90% accuracy in responses",
        "Scalable serverless deployment",
        "Integrated with multiple internal APIs",
      ],
      techStackIcons: [
        {
          name: "Python",
          icon: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        },
        {
          name: "Flask",
          icon: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
        },
        {
          name: "OpenAI",
          icon: "https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white",
        },
        {
          name: "AWS Lambda",
          icon: "https://img.shields.io/badge/AWS_Lambda-FF9900?style=for-the-badge&logo=aws-lambda&logoColor=white",
        },
      ],
    },
  },
];

// ----- Animation Variants (constant, reused) -----
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

// ----- Custom Hook -----
function useFilteredProjects(all: Project[], filter: string) {
  return useMemo(() => {
    if (filter === ALL_FILTER) return all;
    return all.filter((p) => p.type === filter);
  }, [all, filter]);
}

// ----- Presentational / Atomic Components -----

interface FilterBarProps {
  currentFilter: string;
  setFilter: (f: string) => void;
}
const FilterBar: React.FC<FilterBarProps> = memo(
  ({ currentFilter, setFilter }) => (
    <div
      className="flex flex-wrap gap-3 mt-6 overflow-x-auto"
      data-cy="filter-bar"
    >
      {filterButtons.map((btn) => (
        <Button
          key={btn}
          variant={currentFilter === btn ? "default" : "outline"}
          onClick={() => setFilter(btn)}
          aria-pressed={currentFilter === btn}
          aria-label={`Filter by ${btn}`}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0
          ${
            currentFilter === btn
              ? "bg-[var(--dark-color)] text-[var(--primary-bg)] hover:bg-[color:var(--dark-color)/0.9]"
              : "border-[color:var(--accent-color)] text-[var(--dark-color)] hover:bg-[var(--highlight-color)] hover:text-[var(--dark-color)]"
          }`}
          data-cy={`filter-btn-${btn.replace(/\s+/g, "-").toLowerCase()}`}
        >
          {btn}
        </Button>
      ))}
    </div>
  ),
);
FilterBar.displayName = "FilterBar";

interface ProjectCardProps {
  project: Project;
  onDetails: (proj: Project) => void;
}
const ProjectCard: React.FC<ProjectCardProps> = memo(
  ({ project, onDetails }) => (
    <motion.div
      key={project.id}
      variants={itemVariants}
      data-cy={`project-card-${project.id}`}
    >
      <Card className="relative overflow-hidden rounded-xl group bg-[var(--primary-bg)] border-[color:var(--highlight-color)] shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] glassmorphism-card">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-[color:var(--dark-color)/0.6] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-bold text-[var(--primary-bg)] text-center px-4">
              {project.name}
            </h3>
          </div>
        </div>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-[var(--dark-color)]">
            {project.name}
          </h3>
          <p className="text-[var(--accent-color)] text-sm line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[var(--highlight-color)] text-[var(--dark-color)] text-xs px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-4 flex-col sm:flex-row">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-[color:var(--accent-color)] text-[var(--dark-color)] hover:bg-[var(--accent-color)] hover:text-[var(--primary-bg)] bg-transparent"
              onClick={() => onDetails(project)}
              aria-label={`View details of ${project.name}`}
              data-cy={`details-btn-${project.id}`}
            >
              <Search className="h-4 w-4 mr-2" /> Details
            </Button>
            {project.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-[color:var(--accent-color)] text-[var(--dark-color)] hover:bg-[var(--accent-color)] hover:text-[var(--primary-bg)] bg-transparent"
                  aria-label={`View live demo of ${project.name}`}
                  data-cy={`live-demo-btn-${project.id}`}
                >
                  <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                </Button>
              </Link>
            )}
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-[color:var(--accent-color)] text-[var(--dark-color)] hover:bg-[var(--accent-color)] hover:text-[var(--primary-bg)] bg-transparent"
                  aria-label={`View GitHub repo for ${project.name}`}
                  data-cy={`github-btn-${project.id}`}
                >
                  <Github className="h-4 w-4 mr-2" /> GitHub
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  ),
);
ProjectCard.displayName = "ProjectCard";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}
const ProjectModal: React.FC<ProjectModalProps> = memo(
  ({ project, isOpen, onClose }) => {
    // Guard: if no project, render minimal placeholder in modal
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent
          className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto bg-[var(--primary-bg)] text-[var(--dark-color)] p-6 rounded-lg shadow-xl border-[color:var(--highlight-color)/0.5] glassmorphism-card"
          data-cy="project-modal"
        >
          <DialogHeader>
            <DialogTitle
              className="text-3xl font-bold text-[var(--dark-color)]"
              data-cy="modal-title"
            >
              {project?.name || "Project Details"}
            </DialogTitle>
            <DialogDescription
              className="text-[var(--accent-color)] text-lg mt-2"
              data-cy="modal-description"
            >
              {project?.description || "Loading project details..."}
            </DialogDescription>
          </DialogHeader>
          {!project && (
            <p className="text-[var(--accent-color)]">No project selected.</p>
          )}
          {project && (
            <div className="grid gap-6 py-4">
              <div className="relative w-full h-64 rounded-md overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  sizes="100vw"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[var(--dark-color)]">
                  Full Description
                </h4>
                <p
                  className="text-[var(--accent-color)] leading-relaxed"
                  data-cy="modal-full-description"
                >
                  {project.details.fullDescription}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[var(--dark-color)]">
                  Key Metrics & Impact
                </h4>
                <ul
                  className="list-disc list-inside space-y-1 text-[var(--accent-color)]"
                  data-cy="modal-metrics"
                >
                  {project.details.metrics.map((metric, index) => (
                    <li key={index}>{metric}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[var(--dark-color)]">
                  Technologies Used
                </h4>
                <div
                  className="flex flex-wrap gap-3"
                  data-cy="modal-tech-stack"
                >
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-[var(--highlight-color)] text-[var(--dark-color)] px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.details.techStackIcons?.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 bg-[var(--highlight-color)] text-[var(--dark-color)] px-3 py-1 rounded-full font-medium"
                    >
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-end gap-3 pt-4">
            {project?.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="w-full sm:w-auto bg-[var(--dark-color)] text-[var(--primary-bg)] hover:bg-[color:var(--dark-color)/0.9]"
                  data-cy="modal-live-demo-btn"
                >
                  <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                </Button>
              </Link>
            )}
            {project?.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-[color:var(--accent-color)] text-[var(--dark-color)] hover:bg-[var(--accent-color)] hover:text-[var(--primary-bg)] bg-transparent"
                  data-cy="modal-github-btn"
                >
                  <Github className="h-4 w-4 mr-2" /> GitHub
                </Button>
              </Link>
            )}
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto border-[color:var(--highlight-color)] text-[var(--dark-color)] hover:bg-[color:var(--highlight-color)] hover:text-[var(--dark-color)] bg-transparent"
              data-cy="modal-close-btn"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
);
ProjectModal.displayName = "ProjectModal";

// ----- Main Container / Orchestrator -----
export default function ProjectsShowcase() {
  const [filter, setFilter] = useState<string>(ALL_FILTER);
  const [openModal, setOpenModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const filteredProjects = useFilteredProjects(projects, filter);

  const handleDetailsClick = useCallback((project: Project) => {
    setCurrentProject(project);
    setOpenModal(true);
  }, []);

  // Observability: lifecycle marks for profiling
  useEffect(() => {
    performance.mark("projects-showcase-mounted");
    return () => {
      performance.mark("projects-showcase-unmounted");
      performance.measure(
        "ProjectsShowcase lifecycle",
        "projects-showcase-mounted",
        "projects-showcase-unmounted",
      );
    };
  }, []);

  // Guard: no data
  if (!projects || projects.length === 0) {
    return (
      <section
        id="projects"
        className="w-full py-12 bg-[var(--primary-bg)] text-[var(--dark-color)]"
        data-cy="projects-section"
      >
        <div className="container px-4">
          <p className="text-center">No projects available.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="relative z-0 w-full py-12 px-5 md:py-24 lg:py-32 bg-[var(--primary-bg)] text-[var(--dark-color)]"
      data-cy="projects-section"
      aria-label="Projects showcase of work and personal creations"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none text-neutral-200 dark:text-neutral-700"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(currentColor 2px, transparent 2px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10 container mx-auto md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2
            className="text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[var(--dark-color)]"
            data-cy="projects-heading"
          >
            My Work & Creations
          </h2>
          <p
            className="max-w-[900px] text-lg md:text-xl text-[var(--accent-color)]"
            data-cy="projects-subheading"
          >
            A selection of professional and personal projects showcasing my
            full-stack capabilities and problem-solving skills.
          </p>
          <FilterBar currentFilter={filter} setFilter={setFilter} />
        </div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          data-cy="projects-grid"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDetails={handleDetailsClick}
            />
          ))}
        </motion.div>

        <ProjectModal
          project={currentProject}
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      </div>
    </section>
  );
}
