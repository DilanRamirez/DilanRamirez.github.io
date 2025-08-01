"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
  ExternalLink,
  Presentation,
} from "lucide-react";
import Link from "next/link";

const events = [
  {
    id: 1,
    type: "Publication",
    title: "Scalable Geospatial Data Processing with Serverless Architectures",
    journal: "Journal of Cloud Computing",
    date: "October 2023",
    link: "#", // Placeholder for paper link
    abstract:
      "This paper explores the design and implementation of a serverless architecture for efficient processing of large-scale geospatial datasets, leveraging AWS Lambda and S3.",
  },
  {
    id: 2,
    type: "Presentation",
    title: "Building Real-time Web Applications with WebSockets and Node.js",
    event: "DevConnect Conference",
    date: "May 2023",
    link: "#", // Placeholder for slides link
    abstract:
      "A presentation on best practices for developing real-time features in web applications using WebSockets, Node.js, and Redis for message brokering.",
  },
  {
    id: 3,
    type: "Publication",
    title: "Optimizing Database Performance in Microservices Environments",
    journal: "International Journal of Software Engineering",
    date: "February 2022",
    link: "#", // Placeholder for paper link
    abstract:
      "An in-depth analysis of various strategies for optimizing database interactions and schema design within a distributed microservices architecture.",
  },
  {
    id: 4,
    type: "Presentation",
    title: "Introduction to Containerization with Docker and Kubernetes",
    event: "Local Tech Meetup",
    date: "November 2021",
    link: "#", // Placeholder for slides link
    abstract:
      "A beginner-friendly introduction to containerization concepts, demonstrating how Docker and Kubernetes can streamline development and deployment workflows.",
  },
];

export default function PublicationsPresentations() {
  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="publications"
      className="w-full py-12 md:py-24 lg:py-32 bg-[var(--primary-bg)] text-[var(--dark-color)]"
    >
      <div className="container px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[var(--dark-color)]">
            Publications & Presentations
          </h2>
          <p className="max-w-[900px] text-lg md:text-xl text-[var(--accent-color)]">
            Sharing knowledge and contributing to the tech community through
            research and talks.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line for timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[var(--highlight-color)] h-full hidden md:block"></div>

          <div className="grid gap-10 md:grid-cols-2 md:gap-x-16">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className={`relative ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={index % 2 === 0 ? itemVariants : rightItemVariants}
              >
                {/* Circle on the line */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--accent-color)] z-10 hidden md:block"></div>

                <Card className="bg-[var(--primary-bg)] border-[color:var(--highlight-color)] shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] glassmorphism-card">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[var(--dark-color)]">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-[var(--accent-color)] text-sm flex items-center gap-2 md:justify-end">
                      {event.type === "Publication" ? (
                        <BookOpen className="h-4 w-4" />
                      ) : (
                        <Presentation className="h-4 w-4" />
                      )}
                      {event.type === "Publication"
                        ? event.journal
                        : event.event}
                    </CardDescription>
                    <CardDescription className="text-[var(--accent-color)] text-sm flex items-center gap-2 md:justify-end">
                      <CalendarDays className="h-4 w-4" />
                      {event.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-sm text-[var(--accent-color)] mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {event.abstract}
                    </p>
                    <Link
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        className="inline-flex items-center gap-2 text-[var(--dark-color)] hover:text-[var(--accent-color)] transition-colors font-medium"
                        whileHover={{ x: 5 }}
                      >
                        {event.type === "Publication"
                          ? "View Paper"
                          : "View Slides"}{" "}
                        <ExternalLink className="h-4 w-4" />
                      </motion.div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
