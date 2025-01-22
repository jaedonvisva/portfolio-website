"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function NavBar() {
  const pathname = usePathname()

  return (
    <header className="border-b border-border/40">
      <div className="flex h-14 items-center px-4 gap-4">
        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
          _portfolio
        </Link>
        <nav className="flex items-center gap-4 flex-1">
          <Link
            href="/"
            className={cn(
              "text-muted-foreground hover:text-foreground transition-colors",
              pathname === "/" && "text-foreground border-b-2 border-foreground",
            )}
          >
            _hello
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-muted-foreground hover:text-foreground transition-colors",
              pathname === "/about" && "text-foreground border-b-2 border-foreground",
            )}
          >
            _about-me
          </Link>
          <Link
            href="/projects"
            className={cn(
              "text-muted-foreground hover:text-foreground transition-colors",
              pathname === "/projects" && "text-foreground border-b-2 border-foreground",
            )}
          >
            _projects
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-muted-foreground hover:text-foreground transition-colors",
              pathname === "/contact" && "text-foreground border-b-2 border-foreground",
            )}
          >
            _contact-me
          </Link>
        </nav>
      </div>
    </header>
  )
}

