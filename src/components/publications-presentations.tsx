"use client";

import React, { useEffect, memo } from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  CalendarDays,
  ExternalLink,
  Presentation,
} from "lucide-react";

// ----- Types -----
interface BaseEvent {
  id: number;
  type: "Publication" | "Presentation";
  title: string;
  date: string;
  link: string;
  abstract: string;
}

interface PublicationEvent extends BaseEvent {
  type: "Publication";
  journal: string;
}
interface PresentationEvent extends BaseEvent {
  type: "Presentation";
  event: string;
}

type EventItem = PublicationEvent | PresentationEvent;

// ----- Data / Config -----
const EVENTS: EventItem[] = [
  {
    id: 1,
    type: "Presentation",
    title:
      "Bridging Science and Community: Advancing Web Mapping Tools for Arctic Research",
    event: "AGU Fall Meeting 2024",
    date: "December 2024",
    link: "#",
    abstract:
      "Co-authored with Craig E. Tweedie, Santiago Hoyos, Allison G. Gaylord, Mauricio Barba, and Ryan P. Cody. Advanced web mapping tools for Arctic research, fostering collaboration between scientists and communities.",
  },
  {
    id: 2,
    type: "Presentation",
    title: "MentorStudio: Amplifying Diverse Voices via Virtual Mentors",
    event: "Zenodo Publication",
    date: "July 2023",
    link: "https://doi.org/10.5281/ZENODO.8226275",
    abstract:
      "Developed a platform enabling mentors to create video-based virtual agents, expanding access for underserved STEM students.",
  },
  {
    id: 3,
    type: "Presentation",
    title:
      "Fostering Collaboration, Access, and Public Interest through Open Science and Web Mapping",
    event: "AGU Fall Meeting 2023",
    date: "December 2023",
    link: "#",
    abstract:
      "Presented ARMAP, a web mapping tool enhancing Arctic research collaboration, science planning, and outreach.",
  },
  {
    id: 4,
    type: "Presentation",
    title:
      "Designing a Rapid Adaptive Content Registry (RACR) for Adaptive Learning",
    event: "Conference 2022",
    date: "2022",
    link: "#",
    abstract:
      "Developed RACR to streamline content integration for adaptive learning systems, using machine learning to tag and analyze educational content.",
  },
  {
    id: 5,
    type: "Presentation",
    title:
      "Improving Interoperability within the Arctic Research Data Life Cycle",
    event: "AGU Fall Meeting 2022",
    date: "December 2022",
    link: "#",
    abstract:
      "Presented secure, interoperable data services enhancing Arctic research data sharing and visualization tools like ARMAP and AOV.",
  },
  {
    id: 6,
    type: "Presentation",
    title: "New Workflows Repurpose Geotagged Information to Improve Outreach",
    event: "AGU Fall Meeting 2021",
    date: "December 2021",
    link: "#",
    abstract:
      "Enhanced ARMAP and AOV tools to improve outreach and engagement with Arctic communities through geotagged data and real-time updates.",
  },
  {
    id: 7,
    type: "Presentation",
    title: "3D Viewers, Dashboard, and Data Services for Arctic Science",
    event: "AGU Fall Meeting 2020",
    date: "December 2020",
    link: "#",
    abstract:
      "Enhanced ARMAP and AOV with real-time ship tracking, 3D viewers, and dashboards to improve Arctic research coordination and data access.",
  },
  {
    id: 8,
    type: "Presentation",
    title:
      "The Arctic Research Mapping Application and Arctic Observing Viewer Applications Support Earth Science Planning",
    event: "AGU Fall Meeting 2019",
    date: "December 2019",
    link: "#",
    abstract:
      "Enhanced ARMAP and AOV with 3D models, GIS tools, and optimized backend performance to support Arctic research and data sharing.",
  },
];

// ----- Animation Variants -----
const baseLeftVariant: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const baseRightVariant: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ----- Small Presentational Pieces -----
const TypeLabel: React.FC<{ type: EventItem["type"] }> = memo(({ type }) => (
  <div className="inline-flex items-center gap-1">
    {type === "Publication" ? (
      <BookOpen className="h-4 w-4" aria-hidden="true" />
    ) : (
      <Presentation className="h-4 w-4" aria-hidden="true" />
    )}
    <span className="sr-only">{type}</span>
  </div>
));
TypeLabel.displayName = "TypeLabel";

interface EventCardProps {
  event: EventItem;
  index: number;
}
const EventCard: React.FC<EventCardProps> = memo(({ event, index }) => {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : index % 2 === 0
      ? baseLeftVariant
      : baseRightVariant;

  const isPublication = event.type === "Publication";

  return (
    <motion.div
      key={event.id}
      className={`relative ${
        index % 2 === 0 ? "md:text-right" : "md:text-left"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
      data-cy={`event-card-${event.id}`}
    >
      {/* Connector circle for timeline on desktop */}
      <div
        className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--accent-color)] z-10 hidden md:block"
        aria-hidden="true"
      />

      <Card className="bg-[var(--primary-bg)] border-[color:var(--highlight-color)] shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] glassmorphism-card">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <div className="flex flex-col">
              <CardTitle
                className="text-xl font-semibold text-[var(--dark-color)]"
                data-cy={`event-title-${event.id}`}
              >
                {event.title}
              </CardTitle>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <div className="inline-flex items-center gap-1 text-[var(--accent-color)] text-sm">
                  <TypeLabel type={event.type} />
                  <span>
                    {isPublication && (event as PublicationEvent).journal}
                    {event.type === "Presentation" &&
                      (event as PresentationEvent).event}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 text-[var(--accent-color)] text-sm">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  <span>{event.date}</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <p
            className="text-sm text-[var(--accent-color)] mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300"
            data-cy={`event-abstract-${event.id}`}
          >
            {event.abstract}
          </p>
          <Link
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={isPublication ? "View paper" : "View slides"}
            data-cy={`event-link-${event.id}`}
          >
            <motion.span
              className="inline-flex items-center gap-2 text-[var(--dark-color)] hover:text-[var(--accent-color)] transition-colors font-medium"
              whileHover={prefersReducedMotion ? {} : { x: 5 }}
            >
              {isPublication ? "View Paper" : "View Slides"}{" "}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </motion.span>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
});
EventCard.displayName = "EventCard";

// ----- Container Component -----
export default function PublicationsPresentations() {
  useEffect(() => {
    performance.mark("publications-presentations-mounted");
    return () => {
      performance.mark("publications-presentations-unmounted");
      performance.measure(
        "PublicationsPresentations lifecycle",
        "publications-presentations-mounted",
        "publications-presentations-unmounted",
      );
    };
  }, []);

  if (!Array.isArray(EVENTS) || EVENTS.length === 0) {
    return (
      <section
        id="publications"
        className="w-full py-12 md:py-24 lg:py-32 bg-[var(--primary-bg)] text-[var(--dark-color)]"
        aria-label="Publications and presentations empty state"
        data-cy="publications-empty"
      >
        <div className="container px-4 text-center">
          <p className="text-lg">
            No publications or presentations to display.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="publications"
      className="w-full px-5 py-12 md:py-24 lg:py-32 bg-[var(--primary-bg)] text-[var(--dark-color)]"
      aria-label="Publications & Presentations section"
      data-cy="publications-section"
    >
      <div className="container px-4 md:px-12 lg:px-16 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2
            className="text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[var(--dark-color)]"
            data-cy="publications-heading"
          >
            Publications & Presentations
          </h2>
          <p
            className="max-w-[900px] text-lg md:text-xl text-[var(--accent-color)]"
            data-cy="publications-subheading"
          >
            Sharing knowledge and contributing to the tech community through
            research and talks.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line on desktop */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[var(--highlight-color)] h-full hidden md:block"
            aria-hidden="true"
          />
          <div className="grid gap-10 md:grid-cols-2 md:gap-x-16">
            {EVENTS.map((event, idx) => (
              <EventCard key={event.id} event={event} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
