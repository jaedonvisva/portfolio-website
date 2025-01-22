"use client"

import { useState, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { TabNavigation } from "@/components/TabNavigation"

const experiences = [
    {
      id: 1,
      company: "Ammu IT Consulting",
      role: "Software Developer",
      description:
        "Created SQL queries and used APIs to integrate Gong with an existing CRM without first-party support. Assisted with customer tickets involving Crystal Reports.",
      duration: "June 2024 - August 2024",
      stack: ["Microsoft SQL Server", "APIs", "Problem Solving"],
    },
    {
      id: 2,
      company: "Tutor",
      role: "Computer Programming Tutor",
      description: "Provided personalized tutoring in game development and Python programming.",
      duration: "January 2020 - December 2022",
      stack: ["PyGame", "Python", "DSA"],
    },
    {
      id: 3,
      company: "Youth Professionals",
      role: "Executive Web Developer",
      description:
        "Led a team of four developers to design and build a website for a youth-run nonprofit supporting BIPOC and LGBTQ+ youth using HTML and CSS.",
      duration: "December 2020 - June 2021",
      stack: ["HTML", "CSS", "Web Development"],
    },
    {
      id: 4,
      company: "The Knowledge Society",
      role: "TKS Innovate",
      description:
        "Developed theoretical and practical solutions in hackathons, including using synthetic biology for safe drinking water and discovering ways to derive O-blood cells from embryonic stem cells. Won the best idea award at Explore Hackathon.",
      duration: "September 2021 - June 2022",
      stack: [
        "Build Strong Relationships",
        "Presentations",
        "Cross-functional Team Leadership",
        "Machine Learning",
        "Problem Solving",
      ],
    },
    {
      id: 5,
      company: "EllisDon",
      role: "Project Management Co-op",
      description:
        "Utilized estimating manuals and software to perform quantity surveys for construction projects. Reviewed engineering drawings and tender documents to calculate project estimates. Managed subcontractor relationships and performed subtrade solicitation duties.",
      duration: "March 2023 - June 2023",
      stack: [
        "Project Estimation",
        "Supplier Relationship Management",
        "Construction Estimating",
        "Problem Solving",
      ],
    },
    {
      id: 6,
      company: "University of Toronto",
      role: "Global Engineering Challenge for Mental Health",
      description:
        "Developed a mobile and web application to promote mental health among children aged 11-13. Participated in workshops on equity, ethics, privacy in design, and financial literacy.",
      duration: "September 2020 - December 2020",
      stack: [
        "Presentations",
        "Mobile Application Design",
        "Problem Solving",
      ],
    },
    {
      id: 7,
      company: "The STEAM Project",
      role: "Summer Camp Counselor",
      description:
        "Provided guidance and instruction to students, fostering teamwork and resolving conflicts in a STEM-oriented environment.",
      duration: "June 2023 - August 2023",
      stack: ["Counselor Training", "Team Leadership", "Conflict Resolution"],
    },
    {
      id: 8,
      company: "Shad Canada",
      role: "Shad Fellow",
      description:
        "Participated in STEM-oriented workshops and lectures on topics such as Cryptology, Computer Science, and Entrepreneurship. Designed and distributed branded clothing for the Shad UPEI 2022 cohort.",
      duration: "July 2022",
      stack: ["Build Strong Relationships"],
    },
    {
      id: 9,
      company: "University of Waterloo",
      role: "Engineering Science Quest Catalyst",
      description:
        "Participated in engineering workshops, design challenges, and business planning, while developing strong problem-solving skills.",
      duration: "July 2021",
      stack: ["Problem Solving"],
    },
    {
      id: 10,
      company: "Superior Pool Spa & Leisure",
      role: "Lifeguard",
      description: "Ensured the safety of pool patrons and maintained pool area standards.",
      duration: "June 2024 - July 2024",
      stack: [],
    },
  ];
  


export default function ExperiencesPage() {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)
  const experienceRefs = useRef<Record<number, HTMLDivElement | null>>({})

  const handleSidebarClick = (id: number) => {
    setSelectedExperience(id)
    experienceRefs.current[id]?.scrollIntoView({ behavior: "smooth" })
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
                <span className="text-gray-500">▼</span> experience
              </div>
              <div className="ml-4 space-y-1 text-gray-400">
                {experiences.map((experience) => (
                  <button
                    key={experience.id}
                    className={`folder-item block w-full text-left ${
                      selectedExperience === experience.id ? "text-gray-200" : "text-gray-400"
                    } hover:text-gray-300 transition-colors`}
                    onClick={() => handleSidebarClick(experience.id)}
                  >
                    📄 {experience.company.toLowerCase().replaceAll(" ", "-")}.ts
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
              {experiences.map((experience) => (
                <Card
                  key={experience.id}
                  className="p-6 bg-[#09090b] border-gray-800"
                  ref={(el) => {
                    experienceRefs.current[experience.id] = el
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">const</span>
                      <span className="text-blue-400">{experience.company.toLowerCase().replaceAll(" ", "_")}</span>
                      <span className="text-gray-400">=</span>
                      <span className="text-orange-300">{`{`}</span>
                    </div>
                    <div className="ml-4 space-y-2 text-gray-300">
                      <div>
                        company: <span className="text-green-300">"{experience.company}"</span>,
                      </div>
                      <div>
                        role: <span className="text-green-300">"{experience.role}"</span>,
                      </div>
                      <div>
                        description: <span className="text-green-300">"{experience.description}"</span>,
                      </div>
                      <div>
                        duration: <span className="text-green-300">"{experience.duration}"</span>,
                      </div>
                      <div className="flex items-start">
                        <span className="mr-2">tags: [</span>
                        <div className="flex flex-wrap gap-2">
                          {experience.stack.map((tech, index) => (
                            <Badge key={tech} variant="outline" className="bg-[#1a1a1a]">
                              {tech}
                              {index < experience.stack.length - 1}
                            </Badge>
                          ))}
                        </div>
                        <span>],</span>
                      </div>
                    </div>
                    <div className="text-orange-300">{`}`}</div>
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
