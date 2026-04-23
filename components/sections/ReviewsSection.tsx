'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Анна К.',
    role: 'Семейный архив',
    text: 'Мама плакала 20 минут. Спасибо за папу живым. Качество невероятное!',
    bgColor: 'bg-[#1e1a16]',
  },
  {
    name: 'ООО "Технопром"',
    role: 'HR-бренд',
    text: 'Самый обсуждаемый корпоратив 2026 года. Оживили основателя — команда в восторге.',
    bgColor: 'bg-[#16262e]',
  },
  {
    name: '@alex_creator',
    role: 'Блогер',
    text: '+15к подписчиков с одного рилса. ROI x10, ребята знают своё дело.',
    bgColor: 'bg-[#2d1a1c]',
  },
]

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 px-5 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Отзывы клиентов
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${review.bgColor} p-6 rounded-3xl`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-lg font-bold">{review.name[0]}</span>
                </div>
                <div>
                  <div className="font-bold">{review.name}</div>
                  <div className="text-sm opacity-60">{review.role}</div>
                </div>
              </div>
              <p className="italic mb-3">"{review.text}"</p>
              <div className="flex text-accent-warm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}