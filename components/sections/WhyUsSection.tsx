'use client'

import { motion } from 'framer-motion'
import { Paintbrush, Shield, Clock, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Paintbrush,
    color: 'text-amber-300',
    title: 'Ручная постобработка',
    description: 'Не оставляем глитчей. Доводим до киношного качества',
  },
  {
    icon: Shield,
    color: 'text-blue-300',
    title: 'Безопасность и NDA',
    description: 'Фото на защищенных серверах. Договор о конфиденциальности',
  },
  {
    icon: Clock,
    color: 'text-green-300',
    title: 'Скорость 24/7',
    description: 'Дедлайн горит? Сделаем за ночь с доплатой за срочность',
  },
  {
    icon: TrendingUp,
    color: 'text-rose-300',
    title: 'Попадание в тренды',
    description: 'Мы сами в TikTok, знаем, какой звук и монтаж залетит завтра',
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-20 px-5 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Почему выбирают NeuroVid
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <feature.icon className={`text-3xl mb-4 ${feature.color}`} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}