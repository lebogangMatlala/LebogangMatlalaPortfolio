"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const socialLinks = [
    {
      label: "GitHub",
      url: "https://github.com/lebomatlala", // Replace with yours
      icon: "/github.svg",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/lebogangmatlala/", // Replace with yours
      icon: "/linkedin.svg",
    },
    {
      label: "Email",
      url: "mailto:lebomatlala@gmail.com", // Replace with your email
      icon: "/mail.svg",
    },
  ];
  
export default function Contact() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-20 font-sans">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Contact Me</h1>
        <p className="text-neutral-700 text-lg">
        Let’s talk tech, ideas, or opportunities! Drop your message below and I’ll get back to you soon 👇
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent successfully!");
        }}
      >
        <div>
          <label htmlFor="name" className="block text-left text-sm font-semibold text-neutral-800 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 border rounded-md bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-left text-sm font-semibold text-neutral-800 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 border rounded-md bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-left text-sm font-semibold text-neutral-800 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            required
            className="w-full px-4 py-3 border rounded-md bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          ></textarea>
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.03 }}
          type="submit"
          className="w-full bg-primary text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-secondary transition duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Social Links */}
<div className="mt-12 text-center">
  <h2 className="text-xl font-bold text-neutral-800 mb-4">Or reach me directly:</h2>
  <div className="flex justify-center items-center gap-6 flex-wrap">
  <div className="flex justify-center gap-6 mt-12">
  <a href="https://github.com/lebomatlala" target="_blank" rel="noopener noreferrer">
    <FaGithub className="text-2xl text-primary hover:text-secondary transition" />
  </a>
  <a href="https://www.linkedin.com/in/lebogangmatlala/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-2xl text-primary hover:text-secondary transition" />
  </a>
  <a href="mailto:lebomatlala@gmail.com">
    <FaEnvelope className="text-2xl text-primary hover:text-secondary transition" />
  </a>
</div>
  </div>
</div>

    </main>
  );
}
