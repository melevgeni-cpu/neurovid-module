'use client'

import { motion } from 'framer-motion'
import { Heart, Briefcase, Zap, Check } from 'lucide-react'
import { useModal } from '@/hooks/useModal'

const plans = [
  {
    icon: Heart,
    color: 'text-accent-warm',
    title: 'Семье',
    subtitle: 'Реставрация и оживление',
    price: 'от 5 900 ₽',
    features: ['1 фото (восстановление)', 'Ручная ретушь', 'Оживление мимики'],
    popular: false,
  },
  {
    icon: Briefcase,
    color: 'text-accent-business',
    title: 'Бизнесу',
    subtitle: 'HR-бренд и мероприятия',
    price: 'от 19 900 ₽',
    features: ['Оживление фото/видео', 'NDA и договор', 'Презентация для руководства'],
    popular: true,
  },
  {
    icon: Zap,
    color: 'text-accent-creator',
    title: 'Креаторам',
    subtitle: 'Виральные Reels',
    price: 'от 9 900 ₽',
    features: ['1 рилс (до 30 сек)', 'Цветкор + музыка', 'Срок 2-3 дня'],
    popular: false,
  },
]

export default function PricingSection() {
  const { openModal } = useModal()

  return (
    <section id="pricing" className="py-20 px-5 bg-bg-secondary">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Цены / Тарифы
        </motion.h2>
        <p className="text-text-secondary mb-12">
          Выберите направление. Все услуги включают постобработку и конфиденциальность.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card rounded-3xl p-8 relative ${
                plan.popular ? 'ring-2 ring-accent-warm' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-warm text-black px-4 py-1 rounded-full text-xs font-bold">
                  ПОПУЛЯРНЫЙ
                </span>
              )}
              <plan.icon className={`text-3xl mb-3 mx-auto ${plan.color}`} />
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <div className="text-sm opacity-70 mb-3">{plan.subtitle}</div>
              <div className="text-3xl font-bold text-accent-warm mb-4">{plan.price}</div>
              <ul className="text-left space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check size={18} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openModal('order')}
                className="w-full bg-accent-warm hover:bg-accent-warm/80 text-black py-3 rounded-full font-bold transition"
              >
                {plan.popular ? 'Обсудить проект' : 'Заказать'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}