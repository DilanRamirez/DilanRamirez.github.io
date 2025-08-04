"use client";

import React, { useEffect, memo } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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

// ----- Footer Social Links Component -----
export const SocialLinks: React.FC = () => (
  <div className="flex gap-4" data-cy="social-links">
    <SocialIconLink
      href="https://www.linkedin.com/in/dilanramirez/"
      label="LinkedIn"
      data-cy="link-linkedin"
    >
      <Linkedin
        className="h-6 w-6 text-[var(--dark-color)] hover:text-[var(--accent-color)] transition-colors"
        aria-hidden="true"
      />
    </SocialIconLink>
    <SocialIconLink
      href="https://github.com/DilanRamirez"
      label="GitHub"
      data-cy="link-github"
    >
      <Github
        className="h-6 w-6 text-[var(--dark-color)] hover:text-[var(--accent-color)] transition-colors"
        aria-hidden="true"
      />
    </SocialIconLink>
    <SocialIconLink
      href="mailto:drramirezra@example.com"
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
      <footer
        className="sticky bottom-0 z-50 w-full bg-[color:var(--secondary-bg)/0.7] backdrop-blur-lg border-t border-[color:var(--highlight-color)/0.5] py-4 px-8 md:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between shadow-lg"
        data-cy="footer"
      >
        <p
          className="text-sm text-[var(--dark-color)] mb-2 sm:mb-0"
          data-cy="copyright"
        >
          &copy; {new Date().getFullYear()} Dilan Ramirez. All rights reserved.
        </p>
        <SocialLinks />
      </footer>
    </>
  );
}
