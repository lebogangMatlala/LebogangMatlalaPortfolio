"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const educationItems = [
  {
    date: "2023 - Present",
    title: "Advanced Diploma in Computer Science (Ongoing)",
    subtitle: "Tshwane University of Technology",
    description:
      "Deepening knowledge in computer science, including algorithms, software engineering, and system design.",
  },
  {
    date: "2013 - 2018",
    title: "N.DIP Information Technology (Technical Applications)",
    subtitle: "Tshwane University of Technology",
    description:
      "Focused on software development, system analysis, and IT project management with hands-on practical experience.",
  },
  {
    date: "2007 - 2012",
    title: "Grade 12 (South African Matric)",
    subtitle: "Thuto-Pele Secondary School",
    description:
      "South African National Senior Certificate, completing high school education with emphasis on Mathematics Literacy and Life Orientation.",
  },
];

const certifications = [
  {
    title: "Getting Started with AWS",
    issuer: "Simplilearn",
    date: "Issued Jun 2025",
    skills: "Amazon Web Services (AWS), Cloud Computing",
    credentialUrl: "/certificates/awsLebo.pdf",
    logoSrc: "/simplilearn.jpg",
    pdfFile: "/certificates/awsLebo.pdf",
  },
  {
    title: "Getting Started with DevOps",
    issuer: "Simplilearn",
    date: "Issued Apr 2023",
    skills: "DevOps",
    credentialUrl: "/certificates/devopsLebo.pdf",
    logoSrc: "/simplilearn.jpg",
    pdfFile: "/certificates/devopsLebo.pdf",
  },
  {
    title: "Getting Started with Full Stack Java Development",
    issuer: "Simplilearn",
    date: null,
    skills: "Java, Spring Boot, Full Stack",
    credentialUrl: "/certificates/fullstackLebo.pdf",
    logoSrc: "/simplilearn.jpg",
    pdfFile: "/certificates/fullstackLebo.pdf",
  },
];


const workItems = [
  {
    date: "Oct 2021 – Present",
    title: "Software Developer",
    subtitle: "SA@PLAY",
    description: [
      "Researching, designing, implementing, and managing software programs",
      "Integrate software components and third-party programs (RESTful API)",
      "Deploy apps to app store, Google Play Store, etc.",
      "Verify and deploy programs and systems (Afrihost CPanel)",
      "Maintaining and upgrading existing systems",
      "Collaborating with developers, UX designers, business and systems analysts",
      "Writing and implementing efficient code",
    ],
  },
  {
    date: "Oct 2018 – Sep 2021",
    title: "Junior Software Developer",
    subtitle: "Ejoobi (Resigned)",
    description: [
      "Develop, test, and implement new software programs or features in Java",
      "Set up the environment for development",
      "Design and update software databases (SQL, MongoDB)",
      "Taking lead on projects, as needed",
      "Collaborate with front-end developers and team members",
      "Learn new programming languages and cloud computing",
    ],
  },
  {
    date: "Mar 2018 – Oct 2018",
    title: "Mobile Development Intern",
    subtitle: "MLab (End of Contract)",
    description: [
      "Developing mobile applications using Ionic Framework (Typescript) and Firebase",
      "Brainstorming new tech applications such as cloud storage (Firebase) and mobile technology",
      "Collaborating with developers to implement new web features using AngularJS",
    ],
  },
  {
    date: "Feb 2017 – Sep 2017",
    title: "Software Development Intern",
    subtitle: "Reverside (End of Contract)",
    description: [
      "Developing web applications using Java",
      "Writing assessments for specific programming languages",
      "Setting up environment for applications and testing",
      "Testing websites using Selenium",
    ],
  },
];

const achievements = [
  {
    title: "Microsoft Azure Administrator Associate",
    description:
      "Certified Microsoft Azure Administrator Associate, demonstrating skills in managing Azure cloud environments.",
  },
  {
    title: "Ionic Course Completion",
    description:
      "Awarded certificate for completing an Ionic mobile app development course at MLab.",
  },
  {
    title: "Distinction in Maths Literacy",
    description:
      "Received certificate for achieving distinction in Mathematics Literacy during matric at Thuto-Pele Secondary School.",
  },
];

const softSkills = [
  "Disciplined and Responsible",
  "Excellent Communication Skills",
  "Effective Time Management",
  "Collaborative Team Player",
  "Adaptable and Flexible",
  "Strong Task Prioritization",
];

const technicalSkills = [
  "Java, Spring Boot MVC, TypeScript",
  "Google Cloud Platform, Microsoft Azure, DevOps,Docker",
  "React, Ionic Framework, JavaScript",
  "AngularJS, Node.js, JSP",
  "HTML5, CSS3, Bootstrap, Web Services, WordPress",
];

const databases = [
  "SQL",
  "MongoDB",
  "Firebase",
  "MySQL",
  "PostgreSQL",
  "Microsoft SQL Server",
];


export default function About() {
  const [activeSkillTab, setActiveSkillTab] = useState("soft");

  return (
    <motion.div
      className="min-h-screen font-sans px-6 sm:px-20 py-16 max-w-7xl mx-auto bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <section className="mb-20 max-w-4xl mx-auto">
        <header className="mb-16 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-primary mb-4">About Me</h1>
          <p className="max-w-3xl mx-auto md:mx-0 text-lg leading-relaxed">
            {"I"}&apos;{"m"} Lebogang Matlala, a passionate full stack software developer specializing in Java backend and modern frontend technologies such as React and Ionic. With hands-on experience deploying cloud-native applications on Microsoft Azure and Google Cloud, I excel in delivering scalable, maintainable, and user-friendly software solutions. I thrive in collaborative environments and continuously sharpen my skills to keep up with the evolving tech landscape. Below you will find
            my educational background, work experience, achievements, and skills.
          </p>
        </header>
      </section>

      {/* Education Section */}
      <section className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-primary mb-10 text-center md:text-left">
          Education & Certifications
        </h2>
        <div className="space-y-8">
          {educationItems.map(({ date, title, subtitle, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white dark:bg-[#1a1a1a] shadow-md rounded-md p-6 border-l-4 border-primary"
            >
              <div className="text-sm font-semibold text-secondary mb-1">{date}</div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
              <h4 className="text-md font-medium text-neutral-700 dark:text-neutral-300 mb-2">{subtitle}</h4>
              <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-primary mb-10 text-center md:text-left">Certifications</h2>
        <div className="space-y-6">
          {certifications.map(({ title, issuer, date, skills, credentialUrl, logoSrc, pdfFile }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white dark:bg-[#1a1a1a] shadow-md rounded-md p-6 border-l-4 border-accent flex items-start gap-4 hover:bg-accent/10 transition"
            >
              {logoSrc && (
                <Image
                  src={logoSrc}
                  alt={`${issuer} logo`}
                  className="h-12 w-12 object-contain mt-1"
                  loading="lazy"
                  width={400} height={300}
                />
              )}
              <div>
                <h4 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{title}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {issuer} {date && <>· <span>{date}</span></>}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 italic">{skills}</p>

                <div className="flex gap-4 mt-3 flex-wrap">
                  {credentialUrl && (
                    <a
                      href={credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary underline"
                    >
                      View Credential
                    </a>
                  )}
                  {pdfFile && (
                    <a
                      href={pdfFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-secondary underline"
                    >
                      Download Certificate (PDF)
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-primary mb-10 text-center md:text-left">
          Work Experience
        </h2>
        <div className="space-y-8">
          {workItems.map(({ date, title, subtitle, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white dark:bg-[#1a1a1a] shadow-md rounded-md p-6 border-l-4 border-secondary"
            >
              <div className="text-sm font-semibold text-secondary mb-1">{date}</div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
              <h4 className="text-md font-medium text-neutral-700 dark:text-neutral-300 mb-2">{subtitle}</h4>
              <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
                {description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="mt-20 max-w-7xl mx-auto px-6 sm:px-20">
        <h2 className="text-4xl font-extrabold text-primary mb-10 text-center">
          Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {achievements.map(({ title, description }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(59,130,246,0.4)" }}
              className="cursor-pointer rounded-lg border border-primary/50 bg-white dark:bg-[#1a1a1a] p-6 shadow-sm transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
              <p className="text-[var(--foreground)]/90 text-sm">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-20 max-w-7xl mx-auto px-6 sm:px-20">
        <h2 className="text-4xl font-extrabold text-primary mb-8 text-center">
          Skills
        </h2>

        <div className="flex justify-center space-x-6 mb-8">
          {['soft', 'technical', 'databases'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSkillTab(tab)}
              className={`px-6 py-2 rounded-md font-semibold transition-colors duration-300 ${activeSkillTab === tab
                ? "bg-primary text-white shadow-lg"
                : "bg-primary/20 text-primary hover:bg-primary/40"}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Skills
            </button>
          ))}
        </div>

        <motion.div
          key={activeSkillTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <ul className="list-disc list-inside text-[var(--foreground)]/90 text-lg space-y-2">
            {(activeSkillTab === "soft"
              ? softSkills
              : activeSkillTab === "technical"
                ? technicalSkills
                : databases
            ).map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </motion.div>
      </section>
    </motion.div>
  );
}

