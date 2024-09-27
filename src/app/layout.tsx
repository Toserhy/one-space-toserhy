import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Toserhy",
  description: "personal page",
  icons: {
    icon: "/favicon.svg"
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
