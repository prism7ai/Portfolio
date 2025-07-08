import React from "react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen text-white flex items-center justify-center overflow-hidden"
    >
      {/* Fullscreen moon background image */}
      <img
        src="/moon.png"
        alt="Moon Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Dark glass overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-10" />

      {/* Main Hero Text */}
      <div className="relative z-20 max-w-4xl px-6 sm:px-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-fuchsia-400 drop-shadow-[0_0_15px_#f0f]">
          Priyaranjan Ravi
        </h1>
        <div className="text-lg sm:text-2xl text-zinc-200 font-mono mb-6">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer 💻",
                "IoT Innovator ⚙️",
                "Real-time Systems Builder",
                "Problem Solver 🧠"
              ],
              autoStart: true,
              loop: true,
              delay: 40,
            }}
          />
        </div>
        <a
          href="#contact\"
          className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-pink-500 hover:from-pink-400 hover:to-fuchsia-400 text-white rounded-full font-semibold shadow-md hover:scale-105 transition-transform\"
        >
          Contact Me →
        </a>
      </div>
    </section>
  );
}
