'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-[80vh] flex items-center justify-center bg-white">
      {/* ⬆️ Changed min-h-screen → min-h-[80vh] (less tall) */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
        {/* ⬆️ Reduced py-20 → py-12 and gap-16 → gap-12 */}

        {/* Left Side - Content Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#111827] text-white rounded-2xl p-8 flex-1 border border-[#476f95]"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px' }}
        >
          {/* Terminal style header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Command line style */}
          <p className="text-green-400 font-mono mb-3">$ about_me</p>
          
          {/* Intro */}
          <p className="text-base md:text-lg text-white leading-relaxed mb-4">
            I’m <span className="text-green-400 font-semibold">Shreya Kakade</span>, 
            a passionate future engineer focused on creating intelligent, user-centric 
            digital experiences. With skills in <span className="text-blue-400 font-semibold">AI/ML, 
            Web Development, and Data Science</span>, I love building solutions that 
            empower people and enhance everyday life.
          </p>
          
          {/* Hobbies */}
          <p className="text-base md:text-lg text-white leading-relaxed mb-4">
            Beyond technology, I find joy in <span className="text-blue-400">dancing</span>, 
            exploring new innovations, and <span className="text-blue-400">reading books</span> 
            &nbsp;that spark creativity and learning.
          </p>

          {/* Growth + Leadership */}
          <p className="text-base md:text-lg text-white leading-relaxed">
            I strongly believe in <span className="text-green-400 font-semibold">continuous learning</span> 
            and constantly work on developing and improving my skills. I am currently 
            learning <span className="text-blue-400">German</span> Language to expand my global perspective 
            and communication abilities.  
            In addition, I serve as the <span className="text-green-400 font-semibold">Technical Head</span> 
            &nbsp;of my college’s tech club, where I organize technical sessions, lead workshops, 
            and foster a culture of collaboration and knowledge-sharing.
          </p>
        </motion.div>

        {/* Right Side - Photo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center flex-shrink-0"
        >
          {/* Photo */}
          <img
            src="/photo1.jpg"
            alt="Shreya Kakade"
            className="rounded-full w-[280px] h-[280px] object-cover border-4 border-[#111827] transform scale-x-[-1]"
          />

          {/* Social Media Icons below photo */}
          <div className="flex gap-6 mt-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shreya-kakade9099"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex justify-center items-center w-16 h-16 rounded-2xl bg-[#111827] shadow-lg transition-all duration-500 hover:rounded-[50%] hover:bg-gray-200"
            >
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8 transition-all duration-500 group-hover:scale-125"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ShreyaKakade"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex justify-center items-center w-16 h-16 rounded-2xl bg-[#111827] shadow-lg transition-all duration-500 hover:rounded-[50%] hover:bg-gray-200"
            >
              <img
                src="/github.png"
                alt="GitHub"
                className="w-8 h-8 transition-all duration-500 group-hover:scale-125"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
