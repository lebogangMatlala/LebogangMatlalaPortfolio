"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ejoobi Platform",
    description:
      "Backend development, testing, deploying features, and setting up the development environment. Enhanced with JWT authentication, role-based access, MongoDB audit logging, real-time dashboards for job tracking and user activity, and integrated communication via WhatsApp, SMS (Twilio), and SendGrid email notifications.",
    tech: [
      "Java", "Spring Boot MVC", "MongoDB", "Maven", "SendGrid", "Azure",
      "Docker", "JWT", "WebSocket", "Chart.js", "WhatsApp API", "RESTful API"
    ],
    image: "/screening-and-selection.png",
  },
  {
    title: "USSD Upgrade",
    description:
      "Upgraded the USSD system using ASP.NET and integrated with Google Cloud Talent Solution for job matching and external API consumption. Added SMS notification capabilities to enhance user communication and provide real-time alerts.",
    tech: ["ASP.NET", "RESTful API", "MySQL", "Google Cloud Talent Solution", "Azure Web Apps", "Twilio SMS"],
    image: "/ussd.png",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "Built backend services as part of a qualification project to detect credit card fraud. Enhanced with validation layers, transaction security, fraud scoring logic, and email alerts on suspicious activity.",
    tech: ["Java", "Spring Boot MVC", "MongoDB", "Maven", "SendGrid", "Security Patterns", "RESTful API","Heroku"],
    image: "/cred.png",
  },
  {
    title: "Hotel Management Booking System",
    description:
      "Comprehensive system for managing hotel bookings, room availability, and customer details using Angular and TypeScript with SQL database. Integrated email notifications for booking confirmation and cancellation.",
    tech: ["Angular", "TypeScript", "SQL", "Bootstrap", "RESTful API", "HTML", "CSS", "SendGrid","JWT"],
    image: "/hotel.png",
  },
  {
    title: "Smart Campus",
    description:
      "Intelligent campus solution to manage resources, student services, and live activity dashboards. Includes JWT-secured backend, Docker deployment, and role-based access for admins and students. Features email notifications and API integration for student data.",
    tech: [
      "Next.js", "React", "Node.js", "MongoDB", "JWT", "Docker", "Chart.js",
      "SendGrid", "RESTful API","Vercel","Render"
    ],
    image: "/smart.png",
  },
  {
    title: "Quiz Mobile App",
    description:
      "Responsive mobile quiz app using Ionic and Angular, integrating Firebase for real-time database, authentication, and cloud storage. Includes email notifications for quiz results and password reset.",
    tech: ["TypeScript", "Ionic", "Angular", "Firebase", "RESTful API", "SendGrid"],
    image: "/quiz.png",
  },
  {
    title: "Cloud Talent Search",
    description:
      "Implemented machine learning job search using Google Cloud Talent solution hosted on Azure with seamless API integration.",
    tech: ["ASP.NET", "Google Cloud Talent Solution", "RESTful API", "MySQL", "Azure Web Apps"],
    image: "/talent.png",
  },
  {
    title: "Financial Literacy App",
    description:
      "Multi-platform app educating users on financial concepts using React Native frontend and Java backend. Includes Whatsapp reminders, and secure user login.",
    tech: [
      "React Native", "Bootstrap", "Spring Boot", "Hibernate",
      "JavaScript", "HTML", "CSS", "SendGrid", "Twilio SMS", "JWT",

    ],
    image: "/finn.png",
  },
  {
    title: "SAATPLAY Website",
    description:
      "Built a WordPress site with SEO, social media integration, and mobile responsiveness.",
    tech: ["WordPress", "SEO", "Responsive Design"],
    image: "/saat.png",
  },
  {
    title: "Citizen Reporting App",
    description:
      "Smart city app for reporting infrastructure issues to local authorities. Enhanced with role-based user access, Mongo audit trails, secured REST APIs, and SMS/WhatsApp notifications for case status.",
    tech: [
      "Next.js", "Spring Boot", "MongoDB", "JWT", "Audit Logs", "RESTful API","Docker", ,
      "Twilio SMS", "WhatsApp API"
    ],
    image: "/citi.png",
  },
  {
    title: "Ticket Tracking System",
    description:
      "Support system for technicians to manage and resolve issue tickets. Includes real-time status updates, role-based access, Docker deployment, and multi-channel notifications via SMS and Email.",
    tech: [
      "Java", "Spring Boot", "React", "Docker", "JWT", "WebSocket","RESTful API",
      "Twilio SMS", "SendGrid"
    ],
    image: "/ticket.png",
  },
  {
    title: "Smart Rental Management",
    description:
      "Mobile app streamlining applications for rental units under government property. Enhanced with secure tenant-agent access control, Docker deployment, application tracking, and integration with SMS and email for lease updates.",
    tech: [
      "React Native", "Node.js", "SQL", "Next.js", "Docker", "JWT","Render","RESTful API","Vercel",
      "SendGrid", "Twilio SMS"
    ],
    image: "/rental.png",
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain w-full h-full transition-transform duration-300 hover:scale-105 rounded-t-lg"
                unoptimized
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