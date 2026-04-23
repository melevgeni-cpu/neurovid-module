'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Сколько времени занимает реставрация одного фото?',
    answer: 'Обычно 1-3 дня, в зависимости от сложности. Срочные заказы — от 6 часов.',
  },
  {
    question: 'Работаете ли вы с повреждёнными архивами?',
    answer: 'Да, восстанавливаем разрывы, царапины, выцветание. Даже сильно испорченные снимки.',
  },
  {
    question: 'Как происходит оплата?',
    answer: '50% предоплата, остальное после утверждения результата. Работаем по договору.',
  },
  {
    question: 'Можно ли заказать срочно?',
    answer: 'Да, экспресс-режим с доплатой 50%. Свяжитесь с нами для уточнения.',
  },
  {
    question: 'Предоставляете ли исходники?',
    answer: 'Конечно. Вы получаете все файлы в высоком разрешении.',
  },
  {
    question: 'Есть ли гарантия конфиденциальности?',
    answer: 'Да, подписываем NDA. Фото хранятся на защищённых серверах.',
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 px-5 bg-bg-primary">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-10 text-center"
        >
          Часто задаваемые вопросы
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.details
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card rounded-xl group"
            >
              <summary className="font-semibold cursor-pointer p-4 flex items-center justify-between list-none">
                {faq.question}
                <ChevronDown className="transition-transform group-open:rotate-180" size={20} />
              </summary>
              <p className="px-4 pb-4 text-text-secondary">{faq.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}