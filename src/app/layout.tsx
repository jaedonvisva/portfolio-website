import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { TabBar } from "@/components/tab-bar"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jaedon Visva",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/letter-j.png" />
      </head>
      <body className={jetbrainsMono.className}>
        <TabBar />
        {children}
      </body>
    </html>
  )
}

