'use client'

import { motion } from 'framer-motion'
import { Heart, Briefcase, Zap } from 'lucide-react'

const cards = [
  {
    icon: Heart,
    color: 'from-[#F5F0EB] to-[#EADBC6]',
    textColor: 'text-[#1e1a16]',
    iconColor: '#D4A373',
    title: 'Вернуть живой взгляд',
    description: 'Фото рассыпается? Мы восстановим его, чтобы мама снова улыбнулась',
    cta: 'Оживить семейную реликвию',
    scrollTo: 'family',
    bgGradient: 'linear-gradient(145deg, #F5F0EB, #EADBC6)',
  },
  {
    icon: Briefcase,
    color: 'from-[#E9F0F5] to-[#CDDEE9]',
    textColor: 'text-[#0b1c26]',
    iconColor: '#457B9D',
    title: 'Удивить команду',
    description: 'Сделайте корпоратив историческим. Оживим фото основателя для HR-бренда',
    cta: 'Получить WOW-контент',
    scrollTo: 'business',
    bgGradient: 'linear-gradient(145deg, #E9F0F5, #CDDEE9)',
  },
  {
    icon: Zap,
    color: 'from-[#2A1B1D] to-[#1F1113]',
    textColor: 'text-[#fadfe2]',
    iconColor: '#E63946',
    title: 'Взорвать охваты',
    description: 'Нейро-рилсы, которые алгоритмы пушат в топ. Готовый визуал за 24 часа',
    cta: 'Запустить нейро-продакшн',
    scrollTo: 'creators',
    bgGradient: 'linear-gradient(145deg, #2A1B1D, #1F1113)',
  },
]

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-5 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-3xl p-8 flex flex-col min-h-[360px] shadow-xl"
            style={{ background: card.bgGradient }}
          >
            <card.icon size={40} style={{ color: card.iconColor }} className="mb-4" />
            <h2 className={`text-3xl font-bold mb-3 ${card.textColor}`}>{card.title}</h2>
            <p className={`opacity-80 mb-8 ${card.textColor}`}>{card.description}</p>
            <button
              onClick={() => handleScroll(card.scrollTo)}
              className={`mt-auto px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-transform hover:scale-105`}
              style={{ backgroundColor: card.iconColor, color: card.scrollTo === 'business' ? 'white' : '#0A0A0F' }}
            >
              <card.icon size={18} />
              {card.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}