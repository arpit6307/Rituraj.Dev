import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rituraj Srivastava | Full Stack Developer & UI/UX Craftsman",
  description:
    "Portfolio of Rituraj Srivastava — Full Stack Engineer specializing in Next.js 14, React, TypeScript, Glassmorphism UI design, and scalable backend applications.",
  keywords: [
    "Rituraj Srivastava",
    "Developer Portfolio",
    "Full Stack Developer",
    "Next.js Developer",
    "React Engineer",
    "Glassmorphism UI",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Rituraj Srivastava" }],
  openGraph: {
    title: "Rituraj Srivastava | Developer Portfolio",
    description:
      "Full Stack Developer building ultra-fast web apps with Glassmorphic visual style.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rituraj Srivastava | Full Stack Developer",
    description:
      "Full Stack Developer building ultra-fast web apps with Glassmorphic visual style.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden w-full`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen flex flex-col justify-between overflow-x-hidden w-full">
            <Navbar />
            <main className="flex-1 w-full overflow-x-hidden">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
