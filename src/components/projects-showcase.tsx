"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Search } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge"; // Assuming you have a Badge component

const projects = [
  {
    id: 1,
    name: "Geospatial Data Platform",
    description:
      "Built a scalable platform for processing and visualizing large geospatial datasets using AWS Lambda, S3, and React.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["AWS", "React", "TypeScript", "Node.js", "PostGIS"],
    type: "Work Projects",
    liveLink: "#",
    githubLink: "#",
    details: {
      fullDescription:
        "This project involved designing and implementing a comprehensive geospatial data platform. Key features included automated data ingestion pipelines using AWS Lambda and S3, real-time data processing with Kinesis, and a dynamic frontend visualization built with React and Mapbox GL JS. We achieved a 60% improvement in data processing time and reduced infrastructure costs by 30% through serverless optimizations. The platform supports complex spatial queries and provides interactive mapping capabilities for large datasets.",
      metrics: [
        "Improved data processing time by 60%",
        "Reduced infrastructure costs by 30%",
        "Handled 1TB+ of daily geospatial data",
        "Supported 1000+ concurrent users",
      ],
      techStackIcons: [
        { name: "AWS", icon: "/placeholder.svg?height=30&width=30" },
        { name: "React", icon: "/placeholder.svg?height=30&width=30" },
        { name: "TypeScript", icon: "/placeholder.svg?height=30&width=30" },
        { name: "Node.js", icon: "/placeholder.svg?height=30&width=30" },
        { name: "PostGIS", icon: "/placeholder.svg?height=30&width=30" },
        { name: "Mapbox GL JS", icon: "/placeholder.svg?height=30&width=30" },
      ],
    },
  },
  {
    id: 2,
    name: "E-commerce Microservices",
    description:
      "Developed a robust e-commerce backend with microservices architecture, integrating Stripe for payments and Kafka for event streaming.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Spring Boot", "Kafka", "Docker", "Kubernetes", "PostgreSQL"],
    type: "Work Projects",
    liveLink: "#",
    githubLink: "#",
    details: {
      fullDescription:
        "Designed and implemented a highly available e-commerce backend using a microservices architecture. Each service was containerized with Docker and orchestrated using Kubernetes. Integrated Stripe for secure payment processing and Kafka for asynchronous event streaming, ensuring high throughput and fault tolerance. Achieved 99.9% uptime and successfully handled peak loads of over 1000 requests per second during promotional events.",
      metrics: [
        "Achieved 99.9% uptime",
        "Handled 1000+ requests/second peak load",
        "Reduced payment processing latency by 25%",
        "Improved system scalability by 50%",
      ],
      techStackIcons: [
        { name: "Spring Boot", icon: "/placeholder.svg?height=30&width=30" },
        { name: "Kafka", icon: "/placeholder.svg?height=30&width=30" },
        { name: "Docker", icon: "/placeholder.svg?height=30&width=30" },
        { name: "Kubernetes", icon: "/placeholder.svg?height=30&width=30" },
        { name: "PostgreSQL", icon: "/placeholder.svg?height=30&width=30" },
      ],
    },
  },
  {
    id: 3,
    name: "Personal Blog & Portfolio",
    description:
      "A personal blog and portfolio site built with Next.js and MDX, featuring server-side rendering and optimized image delivery.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    type: "Personal Projects",
    liveLink: "#",
    githubLink: "#",
    details: {
      fullDescription:
        "Developed and deployed a personal blog and portfolio website using Next.js App Router, leveraging MDX for content management and Tailwind CSS for styling. Implemented server-side rendering for improved SEO and optimized image delivery with Next.js Image component. Features include a dark mode toggle, responsive design across all devices, and a contact form. Achieved Lighthouse scores of 95+ for performance, accessibility, and best practices.",
      metrics: [
        "Lighthouse performance score 95+",
        "Fully responsive design",
        "SEO optimized content",
        "Fast page load times",
      ],
      techStackIcons: [
        { name: "Next.js", icon: "/placeholder.svg?height=30&width=30" },
        { name: "MDX", icon: "/placeholder.svg?height=30&width=30" },
        { name: "Tailwind CSS", icon: "/placeholder.svg?height=30&width=30" },
        { name: "Vercel", icon: "/placeholder.svg?height=30&width=30" },
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
        { name: "Python", icon: "/placeholder.svg?height=30&width=30" },
        { name: "Flask", icon: "/placeholder.svg?height=30&width=30" },
        { name: "OpenAI API", icon: "/placeholder.svg?height=30&width=30" },
        { name: "AWS Lambda", icon: "/placeholder.svg?height=30&width=30" },
      ],
    },
  },
];

const filterButtons = ["All", "Work Projects", "Personal Projects"];

export default function ProjectsShowcase() {
  const [filter, setFilter] = useState("All");
  const [openModal, setOpenModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects = projects.filter((project) =>
    filter === "All" ? true : project.type === filter,
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const handleDetailsClick = (project: (typeof projects)[0]) => {
    setCurrentProject(project);
    setOpenModal(true);
  };

  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-[var(--primary-bg)] text-[var(--dark-color)]"
    >
      <div className="container px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[var(--dark-color)]">
            My Work & Creations
          </h2>
          <p className="max-w-[900px] text-lg md:text-xl text-[var(--accent-color)]">
            A selection of professional and personal projects showcasing my
            full-stack capabilities and problem-solving skills.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {filterButtons.map((btn) => (
              <Button
                key={btn}
                variant={filter === btn ? "default" : "outline"}
                onClick={() => setFilter(btn)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200
                  ${
                    filter === btn
                      ? "bg-[var(--dark-color)] text-[var(--primary-bg)] hover:bg-[color:var(--dark-color)/0.9]"
                      : "border-[color:var(--accent-color)] text-[var(--dark-color)] hover:bg-[var(--highlight-color)] hover:text-[var(--dark-color)]"
                  }`}
              >
                {btn}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="relative overflow-hidden rounded-xl group bg-[var(--primary-bg)] border-[color:var(--highlight-color)] shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] glassmorphism-card">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
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
                  <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-[color:var(--accent-color)] text-[var(--dark-color)] hover:bg-[var(--accent-color)] hover:text-[var(--primary-bg)] bg-transparent"
                      onClick={() => handleDetailsClick(project)} // Open modal on click
                    >
                      <Search className="h-4 w-4 mr-2" /> Details
                    </Button>
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
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                      </Button>
                    </Link>
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
                      >
                        <Github className="h-4 w-4 mr-2" /> GitHub
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="sm:max-w-[800px] bg-[var(--primary-bg)] text-[var(--dark-color)] p-6 rounded-lg shadow-xl border-[color:var(--highlight-color)/0.5] glassmorphism-card">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-[var(--dark-color)]">
              {currentProject?.name || "Project Details"}
            </DialogTitle>
            <DialogDescription className="text-[var(--accent-color)] text-lg mt-2">
              {currentProject?.description || "Loading project details..."}
            </DialogDescription>
          </DialogHeader>
          {currentProject && (
            <div className="grid gap-6 py-4">
              <div className="relative w-full h-64 rounded-md overflow-hidden">
                <Image
                  src={currentProject.image || "/placeholder.svg"}
                  alt={currentProject.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[var(--dark-color)]">
                  Full Description
                </h4>
                <p className="text-[var(--accent-color)] leading-relaxed">
                  {currentProject.details.fullDescription}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[var(--dark-color)]">
                  Key Metrics & Impact
                </h4>
                <ul className="list-disc list-inside space-y-1 text-[var(--accent-color)]">
                  {currentProject.details.metrics.map((metric, index) => (
                    <li key={index}>{metric}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[var(--dark-color)]">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {currentProject.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-[var(--highlight-color)] text-[var(--dark-color)] px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {currentProject.details.techStackIcons?.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 bg-[var(--highlight-color)] text-[var(--dark-color)] px-3 py-1 rounded-full font-medium"
                    >
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-end gap-3 pt-4">
            {currentProject?.liveLink && (
              <Link
                href={currentProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full sm:w-auto bg-[var(--dark-color)] text-[var(--primary-bg)] hover:bg-[color:var(--dark-color)/0.9]">
                  <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                </Button>
              </Link>
            )}
            {currentProject?.githubLink && (
              <Link
                href={currentProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-[color:var(--accent-color)] text-[var(--dark-color)] hover:bg-[var(--accent-color)] hover:text-[var(--primary-bg)] bg-transparent"
                >
                  <Github className="h-4 w-4 mr-2" /> GitHub
                </Button>
              </Link>
            )}
            <Button
              variant="outline"
              onClick={() => setOpenModal(false)}
              className="w-full sm:w-auto border-[color:var(--highlight-color)] text-[var(--dark-color)] hover:bg-[color:var(--highlight-color)] hover:text-[var(--dark-color)] bg-transparent"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
