import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins from next/font/google
import { GoogleAnalytics } from "@next/third-parties/google";

import { ThemeProvider } from "@/components/theme-provider";
import "../app/globals.css"; // Import global styles

// Configure Poppins font with desired weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  variable: "--font-sans", // Define a CSS variable for the font
});

export const metadata: Metadata = {
  title: "Dilan Ramirez - Full-Stack Software Engineer",
  description:
    "Portfolio of a Full-Stack Software Engineer and Cloud Specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable}>
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""}
        />

        {/* Apply the font variable to the body */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
