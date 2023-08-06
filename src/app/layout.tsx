import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basic Patient Information Dashboard',
  description: ' Basic Patient Information Dashboard with a 3D Visualizer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full bg-gray-100" lang="en">
      <body className="h-full">{children}</body>
    </html>
  )
}
