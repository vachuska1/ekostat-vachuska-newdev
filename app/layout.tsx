import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Navigation from "@/components/navigation"
import "./globals.css"

export const metadata: Metadata = {
  title: "EKOSTAT a.s. - Ekologické řešení pro budoucnost",
  description:
    "Komplexní řešení pro nakládání s odpady, modulové ploty a umělé kamenivo. Moderní technologie pro udržitelnou budoucnost.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div className="h-16 bg-primary"></div>}>
          <Navigation />
        </Suspense>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
