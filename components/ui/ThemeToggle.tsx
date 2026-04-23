'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="theme-toggle bg-bg-card border border-border-light rounded-full px-4 py-2 flex items-center gap-2 shadow-card">
        <Moon size={20} />
        <span>Тёмная</span>
      </button>
    )
  }

  const isLight = theme === 'light'

  return (
    <button
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      className="theme-toggle bg-bg-card border border-border-light rounded-full px-4 py-2 flex items-center gap-2 shadow-card text-text-primary"
      aria-label="Переключить тему"
    >
      {isLight ? <Sun size={20} /> : <Moon size={20} />}
      <span>{isLight ? 'Светлая' : 'Тёмная'}</span>
    </button>
  )
}