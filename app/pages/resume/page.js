"use client";

import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";
import Image from "next/image";

export default function Resume() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 font-sans bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-primary mb-10 text-center"
      >
        My Resume
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-[#1a1a1a] shadow-lg rounded-xl p-8 w-full max-w-xl text-center border-t-4 border-primary transition-colors duration-300"
      >
        <Image 
          src="/resumeicon.png"
          alt="Resume icon"
          className="w-16 h-16 mx-auto mb-4"
          width={400} height={300}
        />

        <p className="text-neutral-700 dark:text-neutral-300 text-lg mb-6">
          View or download my latest resume to explore my work experience,
          technical skills, and education.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/certificates/LebogangMatlalaCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-all duration-300"
          >
            <FaEye />
            View Resume
          </a>

          <a
            href="/certificates/LebogangMatlalaCV.pdf"
            download="Lebogang_Matlala_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg hover:bg-accent/10 dark:hover:bg-white/10 transition-all duration-300"
          >
            <FaDownload />
            Download PDF
          </a>
        </div>
      </motion.div>
    </main>
  );
}
