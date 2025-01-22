import Link from "next/link"

const pages = [
  { name: "About Me", path: "/about" },
  { name: "Projects", path: "/projects" },
]

export function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-[#0B1437] text-white p-4 border-l border-gray-800">
      <h2 className="text-2xl mb-4">Navigation</h2>
      <nav className="space-y-2">
        {pages.map((page) => (
          <Link key={page.name} href={page.path} className="block group">
            <div className="flex flex-col">
              <span className="text-[#4B8BF4] hover:underline">{page.name}</span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300">{page.path}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  )
}

