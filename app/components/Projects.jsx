"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Projects() {
  const typingText = "$my_work";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="projects" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading + Typing effect */}
        <div className="mb-8 text-left">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-7xl font-bold text-[#111827]"
          >
            Projects
          </motion.h2>

          <motion.p
            className="text-green-400 font-mono mt-2 text-xl inline-block overflow-hidden whitespace-nowrap border-r-2 border-green-400"
            initial={{ width: 0 }}
            animate={{ width: "9ch" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            {typingText}
          </motion.p>
        </div>

        {/* Grid of projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              img: "/movies.jpg",
              title: "Mood Match",
              desc: "Developed a dynamic and responsive movie recommendation web app that suggests movies based on user-selected genre and mood. Used JavaScript DOM manipulation and object-based data to display movie cards including title, poster, description, and IMDb link.",
              tech: ["JavaScript", "HTML", "CSS"],
            },
            {
              img: "/churn.jpg",
              title: "Bank Churn Risk Analyzer",
              desc: "Utilized a pre-trained Logistic Regression/ML model to calculate churn probabilities. Built a Flask-based web app to predict churn for a bank with real-time preprocessing (scaling, encoding) and a clean HTML/CSS UI.",
              tech: ["Python", "Flask", "Machine Learning", "HTML", "CSS"],
            },
            {
              img: "/portfolio.jpg",
              title: "Portfolio Website",
              desc: "Designed and developed my personal portfolio showcasing projects, skills, and experience. Implemented smooth animations, reusable components, and responsive design for seamless cross-device accessibility.",
              tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
            },
            {
              img: "/zerodha.jpg",
              title: "Responsive Trading Platform UI",
              desc: "Designed and developed a full-stack replica of Zerodha, India’s leading stock trading platform, using the MERN stack. Built a dashboard to fetch, display, and perform CRUD operations with real-time stock APIs, mimicking real trading platforms.",
              tech: [
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
                "REST APIs",
                "Git",
              ],
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className="group [perspective:1000px] w-[400px] h-[300px] mx-auto"
            >
              <div
                className="relative w-full h-full rounded-2xl transition-transform duration-700 
                [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]
                shadow-[0_8px_20px_rgba(17,24,39,0.8),0_4px_12px_rgba(17,24,39,0.6),0_2px_6px_rgba(17,24,39,0.5)]"
              >
                {/* Front */}
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl [backface-visibility:hidden] overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <h3 className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] text-center text-2xl font-bold text-white leading-snug">
                    {project.title}
                  </h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 flex flex-col rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] bg-[#111827] text-white p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <p className="text-sm leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1 text-sm rounded-full border border-blue-300 text-blue-200 bg-[#1f2937] hover:bg-[#374151] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
