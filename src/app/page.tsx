"use client";

import { Github, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TabNavigation } from "@/components/TabNavigation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#09090b]">
      <TabNavigation />
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-800 p-4">
          <div className="folder-structure">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-gray-500">▼</span> homepage
              </div>
              <div className="ml-4 space-y-1 text-gray-400">
                <button className="folder-item block w-full text-left text-gray-400 hover:text-gray-300 transition-colors">
                  📄 quick-links.tsx
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-gray-500">▼</span> pages
            </div>
            <div className="ml-4 space-y-1">
            <Link
                href="/"
                className="folder-item block w-full text-left text-gray-400 hover:text-gray-300 transition-colors"
              >
                📄 homepage.tsx
              </Link>
              <Link
                href="/about"
                className="folder-item block w-full text-left text-gray-400 hover:text-gray-300 transition-colors"
              >
                📄 about.tsx
              </Link>
              <Link
                href="/projects"
                className="folder-item block w-full text-left text-gray-400 hover:text-gray-300 transition-colors"
              >
                📄 projects.tsx
              </Link>
              <Link
                href="/experience"
                className="folder-item block w-full text-left text-gray-400 hover:text-gray-300 transition-colors"
              >
                📄 experience.tsx
              </Link>
            </div>
          </div>
        </div>
        {/* Main content */}
        <main className="flex-1 space-y-4 p-8 pt-6 font-mono">
          <div className="flex flex-col gap-4 p-6">
            <p className="text-lg text-muted-foreground">Hi! I am</p>
            <h1 className="text-4xl font-bold">Jaedon Visva</h1>
            <p className="text-xl text-blue-400">
              {"> Engineering Student at the University of Waterloo"}
            </p>

            <div className="mt-8 space-y-4 text-muted-foreground">
              <p className="code-line">// quick links</p>
              <p className="code-line">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">linkedin</span> ={" "}
                <span className="text-orange-300">
                  <a
                    href="https://linkedin.com/in/jaedonvisva"
                    target="_blank"
                  >
                    "https://linkedin.com/in/jaedonvisva"
                  </a>
                </span>
                ;
              </p>
              <p className="code-line">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">githubLink</span> ={" "}
                <span className="text-orange-300">
                  <a href="https://github.com/jaedonvisva" target="_blank">
                    "https://github.com/jaedonvisva"
                  </a>
                </span>
                ;
              </p>
              <p className="code-line">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">resume</span> ={" "}
                <span className="text-orange-300">
                  <a href="https://bit.ly/jaedons-resumes" target="_blank">
                    "https://bit.ly/jaedons-resumes"
                  </a>
                </span>
                ;
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
