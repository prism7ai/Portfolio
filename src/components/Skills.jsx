import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "MQTT",
  "OpenCV",
  "MongoDB",
  "C/C++",
  "Framer Motion",
  "PostgreSQL",
  "Git & GitHub",
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 sm:px-16 bg-zinc-950 text-white text-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🛠️ Tech I Use
      </motion.h2>

      <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            className="px-4 py-2 rounded-full border border-zinc-700 bg-zinc-800 text-sm text-white hover:bg-zinc-700 transition"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
