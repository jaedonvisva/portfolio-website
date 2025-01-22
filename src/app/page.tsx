import { Github, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TabNavigation } from "@/components/TabNavigation"

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] flex-col">
    <TabNavigation />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex flex-col gap-4 p-6">
          <p className="text-lg text-muted-foreground">Hi! I am</p>
          <h1 className="text-4xl font-bold">Jaedon Visva</h1>
          <p className="text-xl text-blue-400">{"> Engineering Student at the University of Waterloo"}</p>

          <div className="mt-8 space-y-4 text-muted-foreground">
            <p className="code-line">// quick links</p>
            <p className="code-line">
              <span className="text-purple-400">const</span> <span className="text-blue-400">linkedin</span> ={" "}
              <span className="text-orange-300"><a href="https://linkedin.com/in/jaedonvisva" target="_blank">"https://linkedin.com/in/jaedonvisva"</a></span>;
            </p>
            <p className="code-line">
              <span className="text-purple-400">const</span> <span className="text-blue-400">githubLink</span> ={" "}
              <span className="text-orange-300"><a href="https://github.com/jaedonvisva" target="_blank">"https://github.com/jaedonvisva"</a></span>;
            </p>
            <p className="code-line">
              <span className="text-purple-400">const</span> <span className="text-blue-400">resume</span> ={" "}
              <span className="text-orange-300"><a href="https://bit.ly/jaedons-resumes" target="_blank">"https://bit.ly/jaedons-resumes"</a></span>;
            </p>
          </div>
        </div>
      </div>
    </main>
    
  )
}

