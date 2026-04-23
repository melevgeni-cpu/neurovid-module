'use client'

import Link from 'next/link'
import { Mail, Send } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-bg-card text-gray-300 pt-16 pb-8 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="text-2xl font-bold text-white mb-3">NeuroVid</div>
          <p className="text-sm opacity-70">
            Искусство оживлять воспоминания и взрывать алгоритмы
          </p>
          <p className="text-sm mt-2 flex items-center gap-2">
            <Mail size={16} />
            hello@neurovid.ai
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Услуги</h4>
          <ul className="space-y-2">
            <li><Link href="#family" className="hover:text-accent-warm">Семье</Link></li>
            <li><Link href="#business" className="hover:text-accent-business">Бизнесу</Link></li>
            <li><Link href="#creators" className="hover:text-accent-creator">Блогерам</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Мессенджеры</h4>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-accent-warm" aria-label="Telegram">
              <Send size={24} className="rotate-45" />
            </a>
            <a href="#" className="hover:text-accent-warm" aria-label="WhatsApp">
              <span className="w-6 h-6 flex items-center justify-center text-xl">💬</span>
            </a>
            <a href="#" className="hover:text-accent-warm" aria-label="Viber">
              <span className="w-6 h-6 flex items-center justify-center text-xl">📞</span>
            </a>
            <a href="#" className="hover:text-accent-warm" aria-label="Messages">
              <span className="w-6 h-6 flex items-center justify-center text-xl">💬</span>
            </a>
          </div>
          <p className="text-sm mt-4 flex items-center gap-2">
            <Mail size={16} />
            support@neurovid.ai
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Соцсети</h4>
          <div className="flex gap-4 text-2xl">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span className="w-6 h-6 flex items-center justify-center text-xl">📷</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <span className="w-6 h-6 flex items-center justify-center text-xl">🎵</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="VK">
              <span className="w-6 h-6 flex items-center justify-center text-xl">📰</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <Send size={24} className="rotate-45" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm opacity-50 mt-12 pt-6 border-t border-white/10">
        © NeuroVid, {currentYear}
      </div>
    </footer>
  )
}