"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen px-6 py-20 font-sans bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Contact Me</h1>
        <p className="text-lg">
          Have a question, proposal, or just want to say hi? Fill out the form below 👇
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto bg-white dark:bg-[#111] rounded-lg shadow-md p-8 space-y-6"
        onSubmit={async (e) => {
          e.preventDefault();
        
          const formData = new FormData(e.target);
          const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
          };
        
          try {
            const res = await fetch("/api/send-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });
        
            if (res.ok) {
              alert("✅ Message sent successfully!");
              e.target.reset();
            } else {
              const result = await res.json();
              alert(`❌ Failed: ${result.error}`);
            }
          } catch (err) {
            console.error(err);
            alert("❌ An error occurred while sending the message.");
          }
        }}
        
      >
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border rounded-md bg-neutral-50 dark:bg-neutral-800 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email Address"
            name="email"
            required
            className="w-full px-4 py-3 border rounded-md bg-neutral-50 dark:bg-neutral-800 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here..."
            rows="5"
            required
            className="w-full px-4 py-3 border rounded-md bg-neutral-50 dark:bg-neutral-800 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-primary resize-none"
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

      {/* Direct Info & Socials */}
      <div className="mt-16 text-center">
        <h2 className="text-xl font-bold mb-6">Or reach me directly:</h2>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-[var(--foreground)]">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-primary" />
            <span>+27 65 557 4201</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-primary" />
            <a href="mailto:lebogangmatlala94@gmail.com" className="hover:underline">lebogangmatlala94@gmail.com</a>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-primary" />
            <span>Krugersdorp, South Africa</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <a href="https://github.com/lebomatlala" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-primary hover:text-secondary transition" />
          </a>
          <a href="https://www.linkedin.com/in/lebogang-matlala-001872ba/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-primary hover:text-secondary transition" />
          </a>
        </div>
      </div>
    </main>
  );
}

