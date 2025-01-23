"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"

type Tab = {
  path: string
  label: string
}

export function TabBar() {
  const [tabs, setTabs] = useState<Tab[]>([])
  const pathname = usePathname()

  useEffect(() => {
    const newTab = { path: pathname, label: getTabLabel(pathname) }
    if (!tabs.some((tab) => tab.path === pathname)) {
      setTabs((prevTabs) => [...prevTabs, newTab])
    }
  }, [pathname])

  const closeTab = (path: string) => {
    setTabs((prevTabs) => prevTabs.filter((tab) => tab.path !== path))
  }

  const getTabLabel = (path: string) => {
    const parts = path.split("/")
    const lastPart = parts[parts.length - 1]
    if (lastPart) {
      return lastPart.concat(".tsx")
    }
    return "home.tsx"
  }

  return (
    <div className="flex bg-black text-white border-b border-gray-700">
      {tabs.map((tab) => (
        <div key={tab.path} className="flex items-center px-4 py-2 border-r border-gray-700">
          <Link href={tab.path} className={`mr-2 ${pathname === tab.path ? "text-blue-400" : ""}`}>
            {tab.label}
          </Link>
          <button onClick={() => closeTab(tab.path)} className="text-gray-400 hover:text-white">
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  )
}

