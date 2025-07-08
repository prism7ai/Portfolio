import React from "react";
import { motion } from "framer-motion";

const techs = [
  "React", "Vite", "Tailwind", "Node.js",
  "Python", "C", "C++", "MQTT",
  "NumPy", "Matplotlib", "Git", "Linux",
  "Arduino", "OpenCV", "Flask", "HTML", "CSS", "JavaScript"
];

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function TechWall() {
  return (
    <motion.section
      className="max-w-5xl mx-auto px-4 py-10 text-center"
      initial="hidden"
      whileInView="visible"
      variants={stagger}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-emerald-300 text-center mb-10 drop-shadow-[0_0_10px_#00ffcc]"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tools I Use 💻
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-3">
        {techs.map((tech, i) => (
          <motion.span
            key={i}
            className="px-4 py-2 rounded-full border border-emerald-400 text-emerald-300 bg-black/30 backdrop-blur shadow-md hover:scale-105 transition-all text-sm"
            variants={fadeIn}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}
