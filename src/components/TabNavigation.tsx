"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const tabs = [
  { name: "_jaedon-visva", href: "/" },
  { name: "_about-me", href: "/about" },
  { name: "_projects", href: "/projects" },
]

export function TabNavigation() {
  const pathname = usePathname()

  return (
    <div className="flex bg-[#000000] border-b border-gray-800">
      {tabs.map((tab) => {
        const isActive = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href)

        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={cn(
              "px-4 py-2 text-sm font-mono relative",
              isActive ? "text-gray-200" : "text-gray-400 hover:text-gray-300",
            )}
          >
            {tab.name}
            {isActive && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e06c75]" />}
          </Link>
        )
      })}
    </div>
  )
}

