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
    stack: ["Python", "Flask", "Spotify API", "MongoDB"],
  },
  {
    id: 2,
    title: "NeuroBlocks",
    description:
      "A block-based coding interface for developing in the BCI space, designed to remove the barrier of entry into the space.",
    image: "/neuroblocks.png?height=200&width=400",
    github: "https://github.com/hareshgoyal06/neuroblock",
    stack: ["React", "TypeScript", "Blockly", "Brainflow", "JavaScript", "Flask", "Python"],
    demo: "https://www.youtube.com/watch?v=j6_oXbUtO08",
  },
  {
    id: 3,
    title: "AirCursor",
    description:
      "Real-time computer vision application that utilizes OpenCV and Mediapipe to implement gesture-based interactions using PyAutoGUI for seamless integration with the desktop environment.",
    github: "https://github.com/jaedonvisva/aircursor",
    stack: ["Python", "OpenCV", "Mediapipe", "PyAutoGUI"],
  },
  {
    id: 4,
    title: "Mesh",
    description:
      "An LLM-powered platform using Cohere models to allow users to find hackathon team members, project members, and freelancers.",
    image: "/mesh.png?height=200&width=400",
    github: "https://github.com/jaedonvisva/mesh",
    stack: ["Next.js", "TypeScript", "Cohere", "Python", "Flask", "MongoDB"],
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
        <div className="w-64 border-r border-gray-800 p-4">
          <div className="folder-structure">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-gray-500">▼</span> projects
              </div>
              <div className="ml-4 space-y-1 text-gray-400">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    className={`folder-item block w-full text-left ${
                      selectedProject === project.id ? "text-gray-200" : "text-gray-400"
                    } hover:text-gray-300 transition-colors`}
                    onClick={() => handleSidebarClick(project.id)}
                  >
                    📄 {project.title.toLowerCase().replace(" ", "-")}.ts
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
        <div className="flex-1 p-6 font-mono">
          <div className="space-y-4">
            <div className="space-y-8 mt-4">
              {projects.map((project) => (
                <Card
                key={project.id}
                className="p-6 bg-[#09090b] border-gray-800"
                ref={(el) => {
                  projectRefs.current[project.id] = el
                }}
              >
                <div className={`flex ${project.image ? 'flex-col-reverse md:flex-row gap-6' : 'flex-col'} `}>
                  <div className={`${project.image ? 'md:w-2/5' : 'w-full'} space-y-4`}>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">const</span>
                      <span className="text-blue-400">{project.title.toLowerCase().replace(" ", "_")}</span>
                      <span className="text-gray-400">=</span>
                      <span className="text-orange-300">{`{`}</span>
                    </div>
                    <div className="ml-4 space-y-2 text-gray-300">
                      <div>
                        title: <span className="text-green-300">"{project.title}"</span>,
                      </div>
                      <div>
                        description: <span className="text-green-300">"{project.description}"</span>,
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2">stack: [</span>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech, index) => (
                            <Badge key={tech} variant="outline" className="bg-[#1a1a1a]">
                              {tech}
                              {index < project.stack.length - 1}
                            </Badge>
                          ))}
                        </div>
                        <span>],</span>
                      </div>
                      <div>
                        github: <span className="text-green-300"><a href={project.github} target="_blank">"{project.github}"</a></span>,
                      </div>
                      {project.demo && (
                        <div>
                          demo: <span className="text-green-300"><a href={project.demo} target="_blank">"{project.demo}"</a></span>,
                        </div>
                      )}
                    </div>
                    <div className="text-orange-300">{`}`}</div>
                  </div>
                  {project.image && (
                    <div className="md:w-3/5">
                      <div className="relative h-[400px] w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                    </div>
                  )}
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

