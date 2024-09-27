import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Toserhy",
  description: "personal page",
  icons: {
    icon: "/profile_cover.jpg"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
