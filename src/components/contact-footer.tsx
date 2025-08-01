"use client";

import React, { useState, useEffect, useCallback, useRef, memo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// ----- Types -----
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// ----- Hook: encapsulates form submission logic and side effects -----
function useContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      // mark unmounted to avoid state updates after unmount
      isMountedRef.current = false;
    };
  }, []);

  const sendMessage = useCallback(
    async (data: ContactFormData) => {
      if (isSending) return; // guard against double submits
      setError(null);
      setMessageSent(false);
      setIsSending(true);
      try {
        // simulate network call with cancellation awareness
        await new Promise<void>((resolve, reject) => {
          const timer = window.setTimeout(() => {
            resolve();
          }, 1500);
          // optional: you could add an abort mechanism here if using real API
          // cleanup if unmounted
          if (!isMountedRef.current) {
            clearTimeout(timer);
            reject(new Error("Component unmounted"));
          }
        });
        if (!isMountedRef.current) return;
        setMessageSent(true);
      } catch (e) {
        if (!isMountedRef.current) return;
        setError("Failed to send message. Please try again.");
      } finally {
        if (!isMountedRef.current) return;
        setIsSending(false);
      }
    },
    [isSending],
  );

  return {
    isSending,
    messageSent,
    error,
    sendMessage,
    reset: () => {
      setError(null);
      setMessageSent(false);
    },
  } as const;
}

// ----- Presentational Components -----

const SocialIconLink: React.FC<{
  href: string;
  label: string;
  children: React.ReactNode;
  "data-cy"?: string;
}> = memo(({ href, label, children, ...rest }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    {...rest}
  >
    <motion.div
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="inline-flex"
    >
      {children}
    </motion.div>
  </Link>
));
SocialIconLink.displayName = "SocialIconLink";

// Form field group is simple so we inline it; form itself is separated.
const ContactForm: React.FC = () => {
  const { isSending, messageSent, error, sendMessage, reset } =
    useContactForm();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  // Simple email pattern for basic validation
  const emailIsValid = React.useMemo(
    () => /\S+@\S+\.\S+/.test(formData.email),
    [formData.email],
  );
  const isFormValid =
    formData.name.trim() !== "" &&
    emailIsValid &&
    formData.message.trim() !== "";

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!isFormValid || isSending) return;
      await sendMessage(formData);
    },
    [formData, isFormValid, isSending, sendMessage],
  );

  useEffect(() => {
    if (messageSent) {
      // auto-clear after a short duration for UX
      const timer = window.setTimeout(() => {
        reset();
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [messageSent, reset]);

  return (
    <motion.div
      className="max-w-2xl mx-auto bg-[color:var(--secondary-bg)]/1 p-8 rounded-xl shadow-lg border border-[color:var(--highlight-color)/0.5] glassmorphism-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      data-cy="contact-form-container"
    >
      <form
        className="grid gap-6"
        onSubmit={handleSubmit}
        aria-label="Contact form"
        data-cy="contact-form"
      >
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-[var(--dark-color)]">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-[var(--primary-bg)] border-[color:var(--highlight-color)] text-[var(--dark-color)] focus-visible:ring-[var(--accent-color)] focus-visible:ring-2 transition-all duration-200"
            required
            data-cy="input-name"
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
            value={formData.email}
            onChange={handleChange}
            className="bg-[var(--primary-bg)] border-[color:var(--highlight-color)] text-[var(--dark-color)] focus-visible:ring-[var(--accent-color)] focus-visible:ring-2 transition-all duration-200"
            required
            aria-invalid={!emailIsValid && formData.email !== ""}
            data-cy="input-email"
          />
          {!emailIsValid && formData.email !== "" && (
            <p
              className="text-sm text-red-500 mt-1"
              role="alert"
              data-cy="email-error"
            >
              Please enter a valid email address.
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message" className="text-[var(--dark-color)]">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            className="min-h-[120px] bg-[var(--primary-bg)] border-[color:var(--highlight-color)] text-[var(--dark-color)] focus-visible:ring-[var(--accent-color)] focus-visible:ring-2 transition-all duration-200"
            required
            data-cy="textarea-message"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            type="submit"
            className="w-full bg-[var(--dark-color)] text-[var(--primary-bg)] hover:bg-[color:var(--dark-color)/0.9] transition-all duration-300"
            disabled={!isFormValid || isSending}
            aria-busy={isSending}
            data-cy="submit-button"
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
          <div aria-live="polite" className="min-h-[1.25rem]">
            {messageSent && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-green-600"
                data-cy="success-message"
              >
                Message sent successfully!
              </motion.p>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-red-600 flex flex-col items-center gap-2"
                data-cy="error-message"
              >
                <span>{error}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => sendMessage(formData)}
                  data-cy="retry-button"
                >
                  Retry
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </form>
    </motion.div>
  );
};
ContactForm.displayName = "ContactForm";

// ----- Footer Social Links Component -----
const SocialLinks: React.FC = () => (
  <div className="flex gap-4" data-cy="social-links">
    <SocialIconLink
      href="https://linkedin.com/in/yourprofile"
      label="LinkedIn"
      data-cy="link-linkedin"
    >
      <Linkedin
        className="h-6 w-6 text-[var(--dark-color)] hover:text-[var(--accent-color)] transition-colors"
        aria-hidden="true"
      />
    </SocialIconLink>
    <SocialIconLink
      href="https://github.com/yourprofile"
      label="GitHub"
      data-cy="link-github"
    >
      <Github
        className="h-6 w-6 text-[var(--dark-color)] hover:text-[var(--accent-color)] transition-colors"
        aria-hidden="true"
      />
    </SocialIconLink>
    <SocialIconLink
      href="mailto:your.email@example.com"
      label="Email"
      data-cy="link-email"
    >
      <Mail
        className="h-6 w-6 text-[var(--dark-color)] hover:text-[var(--accent-color)] transition-colors"
        aria-hidden="true"
      />
    </SocialIconLink>
  </div>
);
SocialLinks.displayName = "SocialLinks";

// ----- Container Component -----
export default function ContactFooter() {
  useEffect(() => {
    performance.mark("contact-footer-mounted");
    return () => {
      performance.mark("contact-footer-unmounted");
      performance.measure(
        "ContactFooter lifecycle",
        "contact-footer-mounted",
        "contact-footer-unmounted",
      );
    };
  }, []);

  return (
    <>
      <section
        id="contact"
        className="w-full py-12 px-5 md:py-24 lg:py-32 bg-[var(--primary-bg)] text-[var(--dark-color)]"
        aria-label="Contact section"
        data-cy="contact-section"
      >
        <div className="container px-8 md:px-12 lg:px-16">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <h2
              className="text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[var(--dark-color)]"
              data-cy="contact-heading"
            >
              Get In Touch
            </h2>
            <p
              className="max-w-[900px] text-lg md:text-xl text-[var(--accent-color)]"
              data-cy="contact-subheading"
            >
              Have a project in mind or just want to say hello? Feel free to
              reach out!
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer
        className="sticky bottom-0 z-50 w-full bg-[color:var(--secondary-bg)/0.7] backdrop-blur-lg border-t border-[color:var(--highlight-color)/0.5] py-4 px-8 md:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between shadow-lg"
        data-cy="footer"
      >
        <p
          className="text-sm text-[var(--dark-color)] mb-2 sm:mb-0"
          data-cy="copyright"
        >
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
        <SocialLinks />
      </footer>
    </>
  );
}
