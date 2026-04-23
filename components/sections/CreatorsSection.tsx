'use client'

import { motion } from 'framer-motion'
import { Download, Video, Wand2 } from 'lucide-react'
import { useModal } from '@/hooks/useModal'

const reels = [
  { id: 1, src: '/videos/reels/reel1.mp4', label: '1920-е → нейро' },
  { id: 2, src: '/videos/reels/reel2.mp4', label: '70-е → цвет' },
  { id: 3, src: '/videos/reels/reel3.mp4', label: 'Ожившая классика' },
]

export default function CreatorsSection() {
  const { openModal } = useModal()

  return (
    <section
      id="creators"
      className="py-20 px-5 relative"
      style={{ background: '#0F0C0E' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: '#f1d3d6' }}
        >
          Статичные посты мертвы.{' '}
          <span className="text-accent-creator">Превращаем контент в виральные Reels</span>
        </motion.h2>
        <p className="text-lg text-gray-300 mb-10 max-w-3xl">
          Вы получаете не просто генерацию, а нейро-продакшн под ключ: цветкор, музыка, 
          удержание внимания с первой секунды.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reels.map((reel) => (
            <div key={reel.id}>
              <div className="reel-card bg-black/40 rounded-2xl p-1 aspect-[9/16] relative group overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-xl"
                >
                  <source src={reel.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end p-3 opacity-0 group-hover:opacity-100 transition">
                  <span className="text-sm flex items-center gap-1">
                    <Video size={16} /> {reel.label}
                  </span>
                </div>
              </div>
              <button
                onClick={() => openModal('order')}
                className="btn-primary w-full mt-3 py-2 rounded-full text-sm flex items-center justify-center gap-1"
              >
                <Wand2 size={16} />
                Хочу так же
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          <button
            onClick={() => {
              // Имитация скачивания каталога
              alert('Каталог отправлен в Telegram (демо)')
            }}
            className="bg-accent-creator text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-accent-creator/80 transition"
          >
            <Download size={20} />
            Скачать каталог виральных нейро-стилей (15+)
          </button>
          <button
            onClick={() => openModal('order')}
            className="bg-transparent border border-accent-creator text-accent-creator px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-accent-creator hover:text-white transition"
          >
            <Video size={20} />
            Заказать Reels
          </button>
        </div>
      </div>
    </section>
  )
}