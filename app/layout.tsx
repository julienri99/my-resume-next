import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import SKill from "./components/skill";
import Project from "./components/project";
import Contact from "./components/contact";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-3">
        <Navbar />
        <div className="mb-20">
          <Hero />
        </div>
        <div className="mb-20">
          {children}
        </div>
        <div className="mb-20">
          <SKill />
        </div>
        <div className="mb-20">
          <Project />
        </div>
        <div className="mb-20">
          <Contact />
        </div>
      </body>
    </html>
  );
}
