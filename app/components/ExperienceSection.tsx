'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const typingText = "$worked_what_i_learned";

  return (
    <section id="experience" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading with typing effect subtitle */}
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl font-bold text-[#111827]"
          >
            Experience
          </motion.h2>

          {/* Typing animation */}
          <motion.p
            className="text-green-400 font-mono mt-2 text-lg md:text-xl inline-block overflow-hidden whitespace-nowrap border-r-2 border-green-400"
            initial={{ width: 0 }}
            animate={{ width: "23ch" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            {typingText}
          </motion.p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 gap-8">
          {[
            {
              company: "Elite Softwares",
              role: "Web Developer Intern",
              period: "Dec 2024 - Jan 2025",
              highlights: [
                "Developed full-stack applications using Python and Django",
                "Built and integrated SQLite databases with Django backend",
                "Implemented dynamic web pages using HTML, CSS, and JavaScript",
                "Strengthened concepts of OOP, file handling, and Python modules",
              ],
              tech: ["Python", "Django", "SQLite", "HTML5", "CSS3", "JavaScript", "Git"],
            },
            {
              company: "Pantech e Learning",
              role: "Data Science Intern",
              period: "Jan 2025",
              highlights: [
                "Worked on data collection, preprocessing, and exploratory data analysis (EDA)",
                "Created dashboards and visualizations using Power BI",
                "Queried structured datasets using SQL for insights",
                "Collaborated using Google Colab and Jupyter notebooks",
              ],
              tech: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "Power BI", "Google Colab"],
            },
          ].map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#111827] text-white rounded-xl border border-[#476f95] shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 30px",
              }}
            >
              {/* Terminal-style header with 3 dots */}
              <div className="flex items-center gap-2 px-5 py-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-sm text-gray-300">{exp.period}</span>
                </div>

                <p className="text-blue-300 font-medium mb-3">{exp.company}</p>

                <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4 text-sm">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[#1f2937] border border-blue-300 rounded-full text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
