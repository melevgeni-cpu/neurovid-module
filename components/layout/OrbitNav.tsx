'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, Heart, Briefcase, Zap } from 'lucide-react'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const sections = ['family', 'business', 'creators']
const colors: Record<string, string> = {
  family: '#D4A373',
  business: '#457B9D',
  creators: '#E63946',
  default: '#2d2d3a',
}

export default function OrbitNav() {
  const [isVisible, setIsVisible] = useState(false)
  const activeSection = useScrollSpy(sections, 200)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const currentColor = activeSection ? colors[activeSection] : colors.default

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed right-6 bottom-6 z-50"
        >
          <div className="relative">
            {/* Expandable menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute right-16 bottom-0 flex gap-2"
                >
                  <button
                    onClick={() => scrollToSection('family')}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                    style={{ backgroundColor: colors.family }}
                    aria-label="Семье"
                  >
                    <Heart size={20} />
                  </button>
                  <button
                    onClick={() => scrollToSection('business')}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                    style={{ backgroundColor: colors.business }}
                    aria-label="Бизнесу"
                  >
                    <Briefcase size={20} />
                  </button>
                  <button
                    onClick={() => scrollToSection('creators')}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
                    style={{ backgroundColor: colors.creators }}
                    aria-label="Блогерам"
                  >
                    <Zap size={20} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main button */}
            <button
              onClick={() => (isMenuOpen ? scrollToTop() : setIsMenuOpen(true))}
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
              className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-colors"
              style={{ backgroundColor: currentColor }}
              aria-label="Навигация"
            >
              <ChevronUp size={24} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}