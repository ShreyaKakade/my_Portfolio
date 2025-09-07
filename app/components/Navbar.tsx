"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Added "skills" after "experience"
const sections = ["about", "education", "experience", "skills", "projects", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      let current = "about";
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop - 120; // offset for navbar height
          const bottom = top + element.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 z-50 flex justify-center w-full">
      <div
        className="bg-[#111827] border border-[#c5d3e0] backdrop-blur-md 
                   rounded-full shadow-md px-8 py-3 flex items-center"
      >
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12 items-center text-white font-medium text-base">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative pb-1 transition-colors ${
                activeSection === id
                  ? "text-white font-semibold"
                  : "hover:text-white"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ease-in-out ${
                  activeSection === id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white ml-4"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 w-[85%] left-1/2 -translate-x-1/2 
                       bg-[#eff2f8]/95 border border-[#c5d3e0] backdrop-blur-md 
                       rounded-2xl shadow-md px-6 py-5 space-y-3 text-gray-800 text-base text-center"
          >
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`block relative pb-1 transition-colors ${
                  activeSection === id
                    ? "text-white font-semibold"
                    : "hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-gray-900 transition-all duration-300 ease-in-out ${
                    activeSection === id ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
