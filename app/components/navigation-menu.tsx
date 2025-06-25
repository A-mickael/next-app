"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav className="w-full p-4 border-b bg-white dark:bg-zinc-900 dark:border-zinc-700">
      <div className="mx-auto max-w-5xl flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          MonSite
        </Link>

        <div className="flex items-center gap-4">
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>

          <button
            aria-label="Changer le thème"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10"
          >
            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
