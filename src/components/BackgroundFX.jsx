import React from "react";

export default function BackgroundFX() {
  return (
    <div
      className="fixed inset-0 -z-10 bg-cover bg-center animate-fade-in"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
    </div>
  );
}
