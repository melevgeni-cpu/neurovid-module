'use client'

import { motion } from 'framer-motion'
import { Upload, Wand2 } from 'lucide-react'
import ComparisonSlider from '@/components/ui/ComparisonSlider'
import { useModal } from '@/hooks/useModal'

// Данные для слайдера (замените на свои)
const slides = [
  {
    before: '/images/Foto-Rosa1.jpg',
    after: '/images/Foto-Rosa2.jpg',
    video: '/videos/Rosa1_1280x720.mp4',
  },
  {
    before: '/images/Foto-Rosa1.jpg',
    after: '/images/Foto-Rosa2.jpg',
    video: '/videos/Rosa1_1280x720.mp4',
  },
  {
    before: '/images/Foto-Rosa1.jpg',
    after: '/images/Foto-Rosa2.jpg',
    video: '/videos/Rosa1_1280x720.mp4',
  },
]

export default function FamilySection() {
  const { openModal } = useModal()

  return (
    <section
      id="family"
      className="noise-overlay py-20 px-5 relative"
      style={{
        background: 'linear-gradient(120deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Спасите семейный архив от забвения <br />
          <span className="text-accent-warm">Бережная нейро-реставрация с гарантией сходства</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
          <div>
            <ComparisonSlider slides={slides} />
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Мы не пользуемся шаблонными приложениями. Вручную дорабатываем мимику, 
              чтобы ваши бабушка и прадед остались родными, а не превратились в «кукол» 
              из бесплатного приложения.
            </p>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-3 mb-3">
                <span className="font-semibold">Бесплатные приложения</span>
                <span className="font-bold text-accent-warm">NEUROVID</span>
              </div>
              <div className="space-y-2">
                {[
                  'Убираем артефакты',
                  'Ручная постобработка',
                  '100% сходство',
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span>{item}</span>
                    <div className="flex gap-4">
                      <span className="text-red-500 w-5 text-center">✕</span>
                      <span className="text-green-600 w-5 text-center">✓</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => openModal('upload')}
                className="bg-accent-warm text-gray-900 px-8 py-4 rounded-full text-lg font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition"
              >
                <Upload size={20} />
                Бесплатно оценить сложность фото
              </button>
              <button
                onClick={() => openModal('order')}
                className="bg-amber-100 dark:bg-amber-900/30 text-gray-900 dark:text-amber-100 px-8 py-4 rounded-full text-lg font-bold border border-amber-300 dark:border-amber-700 flex items-center gap-2 hover:scale-105 transition"
              >
                <Wand2 size={20} />
                Оживить сейчас
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}