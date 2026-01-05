"use client";

import { useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
  };

  return (
    <header className="border-b border-[rgb(var(--border))]">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold tracking-tight">
          Nearby
        </div>

        <button
          onClick={toggleTheme}
          className="px-3 py-1.5 text-sm rounded-md border border-[rgb(var(--border))]
                     hover:bg-[rgb(var(--border))] transition"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </header>
  );
}
