import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import SKill from "./components/skill";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-3">
        <Navbar />
        <Hero />
        {children}
        <SKill />
      </body>
    </html>
  );
}
