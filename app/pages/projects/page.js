"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ejoobi Platform",
    description:
      "Responsible for backend development, testing, deploying features, and setting up the development environment.",
    tech: ["Spring Boot MVC", "MongoDB", "Maven", "SendGrid", "Google Cloud Talent Solution"],
    image: "/tech.jpg",
  },
  {
    title: "USSD Upgrade",
    description:
      "Upgraded the USSD system using ASP.NET and integrated with Google Cloud Talent Solution.",
    tech: ["ASP.NET", "Restful API", "MySQL Server", "Google Cloud Talent Solution"],
    image: "/tech.jpg",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "Built backend services as part of a qualification project to detect credit card fraud.",
    tech: ["Spring Boot MVC", "MongoDB", "Maven", "SendGrid"],
    image: "/tech.jpg",
  },
  {
    title: "Mobile App",
    description:
      "Worked on backend and feature development using Ionic framework and Firebase.",
    tech: ["TypeScript", "Ionic", "Angular", "Firebase"],
    image: "/tech.jpg",
  },
  {
    title: "Cloud Talent Search",
    description:
      "Implemented machine learning job search using Google Cloud Talent solution hosted on Azure.",
    tech: ["ASP.NET", "Google Cloud Talent Solution", "Azure Web App"],
    image: "/tech.jpg",
  },
  {
    title: "Financial Literacy App",
    description:
      "Helped educate users on financial concepts using a multi-platform stack.",
    tech: ["React Native", "Bootstrap", "HTML", "CSS", "Spring Boot", "Hibernate"],
    image: "/tech.jpg",
  },
  {
    title: "SAATPLAY Website",
    description:
      "Built a WordPress site with SEO, social media integration, and mobile responsiveness.",
    tech: ["WordPress", "SEO", "Responsive Design"],
    image: "/tech.jpg",
  },
  {
    title: "Citizen Reporting App",
    description:
      "Developed a smart city app for reporting infrastructure issues to local authorities.",
    tech: ["Next.js", "Spring Boot", "MongoDB"],
    image: "/tech.jpg",
  },
  {
    title: "Ticket Tracking System",
    description:
      "Created a support system for technicians to manage and resolve issue tickets.",
    tech: ["Java", "Spring Boot", "React.js"],
    image: "/tech.jpg",
  },
  {
    title: "Smart Rental Management",
    description:
      "Mobile app that streamlines application for rental units under government property.",
    tech: ["React Native", "Node.js", "SQL", "Next.js"],
    image: "/tech.jpg",
  },
];

export default function Projects() {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-10 py-20 font-sans bg-[var(--background)] text-[var(--foreground)]">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-primary mb-12 text-center"
      >
        My Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-neutral-200 dark:border-neutral-800"
          >
            <div className="h-56 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="bg-primary text-accent border border-accent text-xs px-3 py-1 rounded-full font-medium shadow-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}