import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-fuchsia-400 mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
      >
        🧩 Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl shadow hover:shadow-fuchsia-600/20 transition"
          >
            <h3 className="text-xl font-semibold text-fuchsia-300 mb-2">{project.title}</h3>
            <p className="text-zinc-400 text-sm mb-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-fuchsia-800/30 text-fuchsia-300 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                className="text-sm text-fuchsia-400 hover:text-white underline"
              >
                View Code →
              </a>
            ) : (
              <p className="text-sm text-zinc-500 italic">Private Repo</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
