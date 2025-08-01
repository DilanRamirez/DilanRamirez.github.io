"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactFooter() {
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setMessageSent(false);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSending(false);
    setMessageSent(true);
    // In a real app, you'd send form data here
    // e.g., fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="w-full py-12 md:py-24 lg:py-32 bg-[var(--primary-bg)] text-[var(--dark-color)]"
      >
        <div className="container px-8 md:px-12 lg:px-16">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[var(--dark-color)]">
              Get In Touch
            </h2>
            <p className="max-w-[900px] text-lg md:text-xl text-[var(--accent-color)]">
              Have a project in mind or just want to say hello? Feel free to
              reach out!
            </p>
          </div>

          <motion.div
            className="max-w-2xl mx-auto bg-[color:var(--secondary-bg)]/1 p-8 rounded-xl shadow-lg border border-[color:var(--highlight-color)/0.5] glassmorphism-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={formVariants}
          >
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-[var(--dark-color)]">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  className="bg-[var(--primary-bg)] border-[color:var(--highlight-color)] text-[var(--dark-color)] focus-visible:ring-[var(--accent-color)] focus-visible:ring-2 transition-all duration-200"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-[var(--dark-color)]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-[var(--primary-bg)] border-[color:var(--highlight-color)] text-[var(--dark-color)] focus-visible:ring-[var(--accent-color)] focus-visible:ring-2 transition-all duration-200"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message" className="text-[var(--dark-color)]">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="min-h-[120px] bg-[var(--primary-bg)] border-[color:var(--highlight-color)] text-[var(--dark-color)] focus-visible:ring-[var(--accent-color)] focus-visible:ring-2 transition-all duration-200"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[var(--dark-color)] text-[var(--primary-bg)] hover:bg-[color:var(--dark-color)/0.9] transition-all duration-300"
                disabled={isSending}
              >
                {isSending ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  >
                    Sending...
                  </motion.span>
                ) : (
                  "Send Message"
                )}
              </Button>
              {messageSent && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-green-600 mt-2"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Sticky Footer CTA */}
      <footer className="sticky bottom-0 z-50 w-full bg-[color:var(--secondary-bg)/0.7] backdrop-blur-lg border-t border-[color:var(--highlight-color)/0.5] py-4 px-8 md:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between shadow-lg">
        <p className="text-sm text-[var(--dark-color)] mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6 text-[var(--dark-color)] hover:text-[var(--accent-color)] transition-colors" />
            </motion.div>
          </Link>
          <Link
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6 text-[var(--dark-color)] hover:text-[var(--accent-color)] transition-colors" />
            </motion.div>
          </Link>
          <Link href="mailto:your.email@example.com" aria-label="Email">
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6 text-[var(--dark-color)] hover:text-[var(--accent-color)] transition-colors" />
            </motion.div>
          </Link>
        </div>
      </footer>
    </>
  );
}
