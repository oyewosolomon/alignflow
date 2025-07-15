import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Perfect Alignment',
  description: 'Streamline cross-functional collaboration between product, design, and engineering. Our unified workspace ensures better alignment on features, timelines, and delivery expectations',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
