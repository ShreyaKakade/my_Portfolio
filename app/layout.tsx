import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar"; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreya Kakade - Full Stack Developer",
  description:
    "Welcome to my portfolio! I am a passionate full stack developer specializing in building scalable server architectures, robust APIs, and high-performance distributed systems.",
  authors: [{ name: "Shreya Kakade" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        {/* ✅ Navbar with links */}
        <Navbar />

        {children}
      </body>
    </html>
  );
}
