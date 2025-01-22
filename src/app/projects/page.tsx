"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TabNavigation } from "@/components/TabNavigation"

const projects = [
  {
    id: 1,
    title: "Trendify",
    description:
      "Flask web app integrating Spotify Web API for collaborative playlist creation, voting, and leaderboard features.",
    image: "/trendify.png?height=200&width=400",
    github: "https://github.com/jaedonvisva/trendify",
  },
  {
    id: 2,
    title: "NeuroBlocks",
    description:
      "A block-based coding interface for developing in the BCI space, designed to remove the barrier of entry into the space.",
    image: "/neuroblocks.png?height=200&width=400",
    github: "https://github.com/hareshgoyal06/neuroblock",
  },
  {
    id: 3,
    title: "AirCursor",
    description:
      "Real-time computer vision application that utilizes OpenCV and Mediapipe to implement gesture-based interactions using PyAutoGUI for seamless integration with the desktop environment.",
    image: "/placeholder.svg?height=200&width=400",
    github: "https://github.com/jaedonvisva/aircursor",
  },
  {
    id: 4,
    title: "Mesh",
    description:
      "An LLM-powered platform using Cohere models to allow users to find hackathon team members, project members, and freelancers.",
    image: "/mesh.png?height=200&width=400",
    github: "https://github.com/jaedonvisva/mesh",
  },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const projectRefs = useRef<Record<number, HTMLDivElement | null>>({})

  const handleSidebarClick = (id: number) => {
    setSelectedProject(id)
    projectRefs.current[id]?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#09090b]">
      <TabNavigation />
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-800 p-4 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
          <div className="folder-structure">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-gray-500">▼</span> projects
              </div>
              <div className="ml-4 space-y-1">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    className={`folder-item block w-full text-left ${
                      selectedProject === project.id ? "font-bold text-gray-200" : "text-gray-400"
                    } hover:text-gray-300 transition-colors`}
                    onClick={() => handleSidebarClick(project.id)}
                  >
                    📄 {project.title.toLowerCase().replace(" ", "-")}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-gray-500">▼</span> pages
            </div>
            <div className="ml-4 space-y-1">
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
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-4">
            <div className="code-line text-gray-400"> * Projects *</div>

            <div className="space-y-8 mt-4">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="p-6 bg-[#09090b] border-gray-800"
                  ref={(el) => {
                    projectRefs.current[project.id] = el
                  }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative h-[200px] md:w-1/2">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="md:w-1/2 space-y-4">
                      <h2 className="text-xl font-semibold text-gray-200">{project.title}</h2>
                      <p className="text-sm text-gray-400">{project.description}</p>
                      <div className="space-y-2">
                        <h3 className="text-sm text-gray-400">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">React</Badge>
                          <Badge variant="secondary">Next.js</Badge>
                          <Badge variant="secondary">Tailwind CSS</Badge>
                        </div>
                      </div>
                      <Button
                        variant="secondary"
                        className="w-full bg-[#2a2f3a] text-gray-300 hover:bg-[#3a3f4a] hover:text-gray-200"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        view-project-on-github
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

