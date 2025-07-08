import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-black/50 backdrop-blur-md border-b border-fuchsia-800 flex justify-between items-center font-mono text-white text-sm sm:text-base">
      {/* Logo */}
      <a
        href="#hero"
        className="text-cyan-300 text-xl font-bold tracking-wide hover:scale-105 transition-transform drop-shadow-[0_0_8px_#00f2ff]"
      >
        &lt;Priyaranjan<span className="text-pink-400">Dev</span>/&gt;
      </a>

      {/* Navigation Links */}
      <div className="space-x-4 text-fuchsia-300">
        <a
          href="#about"
          className="hover:text-pink-300 transition-all duration-200 hover:underline"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:text-pink-300 transition-all duration-200 hover:underline"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-pink-300 transition-all duration-200 hover:underline"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
