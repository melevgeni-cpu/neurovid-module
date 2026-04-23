'use client'

import { ThemeProvider } from 'next-themes'
import { ReactLenis } from 'lenis/react'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        {children}
      </ReactLenis>
    </ThemeProvider>
  )
}