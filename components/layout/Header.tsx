'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, MessageCircle } from 'lucide-react'
import MobileMenu from './MobileMenu'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { useModal } from '@/hooks/useModal'

const navItems = [
  { label: 'Семье', href: '#family' },
  { label: 'Бизнесу', href: '#business' },
  { label: 'Блогерам', href: '#creators' },
  { label: 'Цены/Тарифы', href: '#pricing' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#footer' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme } = useTheme()
  const { openModal } = useModal()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 backdrop-blur-xl transition-shadow ${
          isScrolled ? 'shadow-card' : ''
        }`}
        style={{ backgroundColor: 'var(--header-bg)' }}
      >
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-stone-300 bg-clip-text text-transparent">
            Neuro<span className="text-text-primary">Vid</span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-primary hover:text-accent-warm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <ThemeToggle />
            
            <button
              onClick={() => openModal('contact')}
              className="hidden md:flex bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/20 items-center gap-1"
            >
              <MessageCircle size={18} />
              Связаться
            </button>

            <button
              onClick={() => openModal('order')}
              className="hidden md:block bg-gradient-to-r from-amber-500 to-amber-600 text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition"
            >
              Оставить заявку
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="block md:hidden text-2xl p-2 text-text-primary"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}