"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const skills = [
  { name: "Java & Spring Boot", level: 90 },
  { name: "React & Ionic", level: 85 },
  { name: "Azure & Cloud", level: 75 },
  { name: "TypeScript & Node.js", level: 80 },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-neutralLight text-neutralDark font-sans"
    >
      <main className="max-w-7xl mx-auto px-6 sm:px-20 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Text Section */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-6 text-center md:text-left"
        >
          <h1 className="text-5xl font-bold text-primary leading-tight">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg max-w-xl">
          {"I'm "} <span className="text-secondary font-semibold">Lebogang Matlala</span>, a full stack developer building impactful solutions with <strong>Java, Spring Boot, React</strong> and <strong>Azure</strong>. I’m passionate about clean code and user-first experiences.
          </p>
          <p className="italic text-sm text-neutral-600">
         
            
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-primary text-white rounded hover:bg-secondary hover:scale-105 transition duration-300 text-center"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-secondary text-secondary rounded hover:bg-accent hover:text-white transition duration-300 text-center"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center md:justify-end"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem]">
            <Image
              src="/lebogangmatlalaPor.gif"
              alt="Lebogang Matlala"
              fill
              className="rounded-full object-cover shadow-xl border-4 border-accent"
              unoptimized
            />
          </motion.div>
        </motion.div>
      </main>

      {/* What I Do Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold text-primary mb-10 text-center tracking-wide"
          >
            What I Do
          </motion.h2>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
            className="space-y-6 max-w-3xl mx-auto text-neutralDark text-lg leading-relaxed"
          >
            {[
              "🚀 Build scalable Java & Spring Boot backend services",
              "🎨 Develop modern React & Ionic frontend applications",
              "☁️ Deploy and manage applications on Microsoft Azure",
              "🤝 Collaborate with cross-functional teams to deliver quality software",
            ].map((text, idx) => (
              <motion.li
                key={idx}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              >
                {text}
              </motion.li>
            ))}
          </motion.ul>

          {/* Skills */}
          <motion.div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-primary font-bold text-2xl mb-8 text-center">Skill Proficiency</h3>
            {skills.map(({ name, level }) => (
              <div key={name} className="mb-8">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-neutralDark">{name}</span>
                  <span className="font-medium text-sm text-neutralDark">{level}%</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-6 bg-primary bg-opacity-10 rounded-full relative overflow-hidden"
                >
                  <div
                    className="absolute left-0 top-0 h-6 bg-secondary rounded-full"
                    style={{ width: `${level}%` }}
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
