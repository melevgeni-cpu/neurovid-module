'use client'

import { motion } from 'framer-motion'
import { FileText, MessageCircle } from 'lucide-react'
import { useModal } from '@/hooks/useModal'

export default function BusinessSection() {
  const { openModal } = useModal()

  return (
    <section
      id="business"
      className="py-20 px-5"
      style={{
        background: 'linear-gradient(135deg, #1A2F3D, #0D1C26)',
        color: '#e6f0f7',
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            AI-спецэффекты для HR и Event.{' '}
            <span className="text-accent-business">Создаем WOW-контент без бюджета Голливуда</span>
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/business-poster.jpg"
              className="w-full"
            >
              <source src="/videos/business-preview.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-xl">
            Кейс: Оживление основателя компании к 50-летию фирмы. Окупилось 
            лояльностью команды и репостами во всех корп-чатах. Работаем по NDA.
          </p>

          <button
            onClick={() => openModal('business')}
            className="bg-accent-business text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-business/80 shadow-lg flex items-center gap-3"
          >
            <FileText size={20} />
            Получить презентацию для руководства
          </button>

          <button
            onClick={() => openModal('contact')}
            className="w-full md:w-auto bg-white/10 border border-white/30 px-8 py-4 rounded-full text-lg flex items-center gap-2 hover:bg-white/20 transition"
          >
            <MessageCircle size={20} />
            Обсудить проект
          </button>
        </motion.div>
      </div>
    </section>
  )
}