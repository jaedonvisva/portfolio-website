import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { TabNavigation } from "@/components/TabNavigation"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#09090b]">
      <TabNavigation />
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-800 p-4">
          <div className="folder-structure">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-gray-500">▼</span> personal-info
              </div>
              <div className="ml-4 space-y-1 text-gray-400">
                <div className="folder-item hover:text-gray-300 transition-colors">📄 bio.ts</div>
                <div className="folder-item hover:text-gray-300 transition-colors">📄 education.ts</div>
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
              {/* Bio Section */}
              <Card className="p-6 bg-[#09090b] border-gray-800">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">const</span>
                    <span className="text-blue-400">bio</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-orange-300">{`{`}</span>
                  </div>
                  <div className="ml-4 space-y-2 text-gray-300">
                    <div>
                      name: <span className="text-green-300">"Jaedon Visva"</span>,
                    </div>
                    <div>
                      role: <span className="text-green-300">"Engineering Student"</span>,
                    </div>
                    <div>
                      currentFocus: <span className="text-green-300">"Crafting cutting-edge solutions at the intersection of AI, brain-computer interfaces, and software development, driving innovation through technology and collaboration."</span>
                    </div>
                  </div>
                  <div className="text-orange-300">{`}`}</div>
                </div>
              </Card>

              {/* Education Section */}
              <Card className="p-6 bg-[#09090b] border-gray-800">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">const</span>
                    <span className="text-blue-400">education</span>
                    <span className="text-gray-400">=</span>
                    <span className="text-orange-300">{`{`}</span>
                  </div>
                  <div className="ml-4 space-y-2 text-gray-300">
                    <div>
                      degree: <span className="text-green-300">"BASc in Management Engineering"</span>,
                    </div>
                    <div>
                      university: <span className="text-green-300">"University of Waterloo"</span>,
                    </div>
                    <div>
                      duration: <span className="text-green-300">"2024 - 2029"</span>,
                    </div>

                  </div>
                  <div className="text-orange-300">{`}`}</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

