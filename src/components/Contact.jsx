import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaLocationDot, FaCode } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-cyan-400 mb-12"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
      >
        📬 Let’s Connect
      </motion.h2>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-8 text-zinc-200 text-lg"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
      >
        <a
          href="https://github.com/prism7ai"
          target="_blank"
          className="flex items-center gap-2 hover:text-fuchsia-400 transition"
        >
          <FaGithub size={20} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/priyaranjan-r-31885127a"
          target="_blank"
          className="flex items-center gap-2 hover:text-blue-400 transition"
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>
        <a
          href="https://leetcode.com/u/HoXyP2fbbE/"
          target="_blank"
          className="flex items-center gap-2 hover:text-yellow-300 transition"
        >
          <SiLeetcode size={20} /> LeetCode
        </a>
        <a
          href="mailto:rpriyaranjan63@gmail.com"
          className="flex items-center gap-2 hover:text-rose-300 transition"
        >
          <FaEnvelope size={20} /> Email
        </a>
        <div className="flex items-center gap-2 text-zinc-400">
          <FaLocationDot size={20} /> Chennai, India
        </div>
      </motion.div>
    </section>
  );
}
