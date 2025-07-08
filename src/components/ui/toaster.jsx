import React from "react";

export function Toaster() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-zinc-800 text-white px-4 py-2 rounded shadow-lg z-50">
      🔔 This is a toast!
    </div>
  );
}
