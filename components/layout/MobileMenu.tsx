'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { useModal } from '@/hooks/useModal'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

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

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { openModal } = useModal()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1100] bg-bg-primary/95 backdrop-blur-xl flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-4xl text-text-primary"
            aria-label="Закрыть меню"
          >
            <X size={36} />
          </button>

          <nav className="flex-1 flex flex-col items-center justify-center gap-6 text-2xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="text-text-primary hover:text-accent-warm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-4 pb-10 px-6">
            <div className="flex gap-4">
              <ThemeToggle />
              <button
                onClick={() => {
                  onClose()
                  openModal('contact')
                }}
                className="bg-white/10 border border-white/20 px-6 py-3 rounded-full text-xl flex items-center gap-2"
              >
                <MessageCircle size={24} />
                Связаться
              </button>
            </div>
            <button
              onClick={() => {
                onClose()
                openModal('order')
              }}
              className="w-full bg-accent-warm text-black py-4 rounded-full text-xl font-bold"
            >
              Оставить заявку
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}