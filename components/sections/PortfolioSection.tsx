'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Wand2 } from 'lucide-react'
import { useModal } from '@/hooks/useModal'

const portfolioItems = [
  { type: 'image', src: '/images/portfolio/1.jpg', alt: 'Работа 1' },
  { type: 'video', src: '/videos/reels/reel1.mp4', alt: 'Видео 1' },
  { type: 'image', src: '/images/portfolio/2.jpg', alt: 'Работа 2' },
  { type: 'image', src: '/images/portfolio/3.jpg', alt: 'Работа 3' },
]

export default function PortfolioSection() {
  const { openModal } = useModal()

  return (
    <section id="portfolio" className="py-20 px-5 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Наши работы
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="aspect-square bg-gray-800 rounded-xl overflow-hidden"
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => openModal('order')}
            className="btn-primary px-8 py-3 rounded-full text-lg inline-flex items-center gap-2"
          >
            <Wand2 size={20} />
            Хочу так же
          </button>
        </div>
      </div>
    </section>
  )
}