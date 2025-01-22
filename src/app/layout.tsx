import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

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
        {/* Link to the favicon */}
        <link rel="icon" href="/letter-j.png" />
      </head>
      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  )
}

