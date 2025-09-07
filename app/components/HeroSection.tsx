'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Particles from './Particles'; // ✅ Import particles

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-[#194a7a]">
      {/* 🎇 Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={200}
          particleSpread={12}
          speed={0.5}
          particleColors={['#060010']} // Dark particles
          alphaParticles
          particleBaseSize={130}
          cameraDistance={18}
        />
      </div>

      {/* 💻 Foreground Terminal Card */}
      <div className="relative z-10 max-w-4xl w-full mx-6 -mt-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="card"
        >
          <div className="card-info p-10 border border-[#476f95] rounded-2xl font-sans">
            {/* Terminal style header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div>
              {/* whoami */}
              <p className="text-green-400 font-mono">$ whoami</p>
              <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-3 text-white">
                SHREYA KAKADE
              </h1>

              {/* short intro */}
              <p className="text-base md:text-lg text-white mb-4 leading-relaxed">
                Hello, I’m a developer who enjoys building intuitive applications across frontend and
                backend. Now exploring and learning Data Analytics field to combine development and
                data-driven decision-making.
              </p>

              {/* Resume */}
              <p className="text-green-400 font-mono">$ download_resume</p>
              <div className="mt-6">
                <a
                  href="/ResumeShreya.pdf"
                  download
                  className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full 
                             border border-blue-300 text-blue-200 bg-[#1f2937] 
                             hover:bg-[#374151] transition dark:bg-blue-500/10 
                             dark:border-blue-500/20 dark:text-blue-300"
                >
                  <FontAwesomeIcon icon={faDownload} className="text-blue-200 dark:text-blue-200" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
