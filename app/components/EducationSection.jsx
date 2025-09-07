'use client';

import { motion } from "framer-motion";
import Particles from "./Particles"; // ✅ Import Particles

export default function EducationSection() {
  const timeline = [
    {
      id: 1,
      circle: "10th",
      title: "Blossom Children's Academy, Wai",
      degree: "SSC",
      details: ["2020", "Grade: 89.60%"],
      duration: "I have completed my SSC education from Blossom Children's Academy, Wai.",
    },
    {
      id: 2,
      circle: "12th",
      title: "Kalasagar Academy and Junior College, Wai",
      degree: "HSC",
      details: ["2020 - 2022", "Grade: 79.67%"],
      duration: "I have completed my HSC from Kalasagar Academy and Junior College, Wai.",
    },
    {
      id: 3,
      circle: "BE",
      title:
        "Dr. D. Y. Patil Institute of Engineering, Management and Research, Akurdi, Pune",
      degree:
        "Bachelor of Engineering (Artificial Intelligence and Data Science)",
      details: ["2022 - Present"],
      duration:
        "I am currently pursuing my BE in Artificial Intelligence & Data Science.",
    },
  ];

  const typingText = "$my_education_journey_till_now";

  return (
    <section
      id="education"
      className="w-full py-12 text-blue-600 relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse, #0c2f7bff, transparent, white) white",
      }}
    >
      {/* 🎇 Particles Overlay */}
      <Particles
        className="absolute inset-0 -z-0"
        quantity={90}
        speed={0.50}
        particleBaseSize={100}
        ease={90}
        color={"#060010"}
        refresh
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="mb-10">
          <h2 className="text-6xl font-extrabold text-[#111827]">Education</h2>

          {/* Typing Animation */}
          <motion.p
            className="text-green-400 font-mono mt-2 text-lg md:text-xl inline-block overflow-hidden whitespace-nowrap border-r-2 border-green-400"
            initial={{ width: 0 }}
            animate={{ width: "31ch" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            {typingText}
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#111827] hidden md:block"></div>

          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            const contentOnRight = isLeft;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: contentOnRight ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`mb-12 flex flex-col md:flex-row items-center ${
                  contentOnRight ? "md:justify-end" : "md:justify-start"
                }`}
              >
                <div
                  className={`relative w-full md:w-1/2 px-6 ${
                    contentOnRight
                      ? "md:pl-12 md:text-left"
                      : "md:pr-12 md:text-right"
                  }`}
                >
                  {/* Circle */}
                  <span
                    className={`absolute hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-[#111827] text-white text-base font-bold shadow-lg top-6 ${
                      isLeft ? "-left-7" : "-right-7"
                    }`}
                  >
                    {item.circle}
                  </span>

                  {/* Card */}
                  <div
                    className="bg-[#111827] text-white rounded-2xl shadow-xl p-6 relative"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.56) 0px 18px 50px 2px",
                    }}
                  >
                    {/* Arrow */}
                    <div
                      className={`absolute top-6 w-0 h-0 border-t-6 border-b-6 border-transparent ${
                        contentOnRight
                          ? "left-[-10px] border-r-[10px] border-r-[#232631]"
                          : "right-[-10px] border-l-[10px] border-l-[#232631]"
                      }`}
                    />

                    <h3 className="text-2xl md:text-2.5xl font-bold mb-2">{item.title}</h3>
                    <p className="text-blue-300 font-semibold text-base">
                      {item.degree}
                    </p>

                    {/* Details */}
                    <div
                      className={`mt-3 space-y-2 text-gray-200 text-sm tracking-wide leading-relaxed ${
                        contentOnRight ? "text-right" : "text-left"
                      }`}
                    >
                      {item.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>

                    {/* Duration */}
                    <span
                      className={`block mt-3 text-xs text-gray-400 italic ${
                        contentOnRight ? "text-right" : "text-left"
                      }`}
                    >
                      {item.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
