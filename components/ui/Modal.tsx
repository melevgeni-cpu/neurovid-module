'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import ContactForm from './ContactForm'

export type ModalType = 'contact' | 'upload' | 'business' | 'order'

interface ModalProps {
  isOpen: boolean
  type: ModalType | null
  onClose: () => void
}

export default function Modal({ isOpen, type, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const getModalContent = () => {
    switch (type) {
      case 'contact':
        return (
          <div className="bg-modal-bg p-8 rounded-3xl max-w-sm w-full text-text-primary">
            <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="bg-[#2AABEE] p-4 rounded-xl text-center text-white">
                <i className="fab fa-telegram text-2xl"></i>
                <span className="block mt-1">Telegram</span>
              </a>
              <a href="#" className="bg-[#25D366] p-4 rounded-xl text-center text-white">
                <i className="fab fa-whatsapp text-2xl"></i>
                <span className="block mt-1">WhatsApp</span>
              </a>
              <a href="#" className="bg-[#7360F2] p-4 rounded-xl text-center text-white">
                <i className="fab fa-viber text-2xl"></i>
                <span className="block mt-1">Viber</span>
              </a>
              <a href="mailto:hello@neurovid.ai" className="bg-gray-600 p-4 rounded-xl text-center text-white">
                <i className="far fa-envelope text-2xl"></i>
                <span className="block mt-1">Email</span>
              </a>
            </div>
            <button onClick={onClose} className="mt-6 w-full border border-white/20 py-2 rounded-full">
              Закрыть
            </button>
          </div>
        )
      case 'upload':
        return (
          <div className="bg-modal-bg p-8 rounded-3xl max-w-md w-full text-text-primary">
            <h3 className="text-2xl font-bold mb-4">Оценить сложность</h3>
            <p className="text-sm mb-3">Загрузите фото или видео для предварительной оценки</p>
            <input type="file" accept="image/*,video/*" className="mb-4 w-full" />
            <input type="text" placeholder="Telegram / WhatsApp / Email" className="w-full p-3 border rounded-xl mb-4 bg-input-bg text-input-text" />
            <button className="w-full bg-accent-warm py-3 rounded-xl font-bold">Отправить</button>
            <button onClick={onClose} className="w-full mt-3 text-gray-500">Отмена</button>
          </div>
        )
      case 'business':
        return (
          <div className="bg-modal-bg p-8 rounded-3xl max-w-md w-full text-text-primary">
            <h3 className="text-2xl font-bold mb-4">Презентация для руководства</h3>
            <input type="text" placeholder="Имя" className="w-full p-3 border rounded-xl mb-3 bg-input-bg text-input-text" />
            <input type="text" placeholder="Компания" className="w-full p-3 border rounded-xl mb-3 bg-input-bg text-input-text" />
            <input type="text" placeholder="Telegram / Email" className="w-full p-3 border rounded-xl mb-4 bg-input-bg text-input-text" />
            <button className="w-full bg-accent-business text-white py-3 rounded-xl font-bold">Получить</button>
            <button onClick={onClose} className="w-full mt-3 text-gray-500">Отмена</button>
          </div>
        )
      case 'order':
        return (
          <div className="bg-modal-bg p-6 md:p-8 rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <ContactForm onSuccess={onClose} onClose={onClose} />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              aria-label="Закрыть"
            >
              <X size={28} />
            </button>
            {getModalContent()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}