'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

const formSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  contact: z.string().min(5, 'Укажите телефон или Telegram'),
  email: z.string().email('Некорректный email').optional().or(z.literal('')),
  service: z.enum(['family', 'business', 'creators']),
  file: z.any().optional(),
})

type FormData = z.infer<typeof formSchema>

interface ContactFormProps {
  onSuccess?: () => void
  onClose?: () => void
}

export default function ContactForm({ onSuccess, onClose }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: 'family',
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('contact', data.contact)
      if (data.email) formData.append('email', data.email)
      formData.append('service', data.service)
      if (data.file && data.file[0]) {
        formData.append('file', data.file[0])
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Ошибка отправки')
      }

      setSubmitSuccess(true)
      reset()
      onSuccess?.()
      setTimeout(() => {
        onClose?.()
      }, 2000)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Произошла ошибка')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-6"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
          <Send className="text-green-500" size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Заявка отправлена!</h3>
        <p className="text-gray-400">Мы свяжемся с вами в ближайшее время.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Имя <span className="text-red-500">*</span>
        </label>
        <input
          {...register('name')}
          className="w-full px-4 py-3 rounded-xl border bg-input-bg text-input-text border-border-light focus:outline-none focus:ring-2 focus:ring-accent-warm"
          placeholder="Ваше имя"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Телефон или Telegram <span className="text-red-500">*</span>
        </label>
        <input
          {...register('contact')}
          className="w-full px-4 py-3 rounded-xl border bg-input-bg text-input-text border-border-light focus:outline-none focus:ring-2 focus:ring-accent-warm"
          placeholder="Телефон или @username"
        />
        {errors.contact && (
          <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Email <span className="text-gray-500 text-xs">(необязательно)</span>
        </label>
        <input
          {...register('email')}
          type="email"
          className="w-full px-4 py-3 rounded-xl border bg-input-bg text-input-text border-border-light focus:outline-none focus:ring-2 focus:ring-accent-warm"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Услуга <span className="text-red-500">*</span>
        </label>
        <select
          {...register('service')}
          className="w-full px-4 py-3 rounded-xl border bg-input-bg text-input-text border-border-light focus:outline-none focus:ring-2 focus:ring-accent-warm"
        >
          <option value="family">Оживить фото / Семейная реставрация</option>
          <option value="business">Бизнес / HR</option>
          <option value="creators">Контент для блогера</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Прикрепить файл{' '}
          <span className="text-gray-500 text-xs">(фото/видео, необязательно)</span>
        </label>
        <input
          {...register('file')}
          type="file"
          accept="image/*,video/*"
          className="w-full px-4 py-2 rounded-xl border bg-input-bg text-input-text border-border-light file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent-warm file:text-black hover:file:bg-accent-warm/80"
        />
      </div>

      {submitError && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-3 rounded-xl text-sm">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent-warm text-black py-3 rounded-xl font-bold hover:bg-accent-warm/90 transition flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Отправка...
          </>
        ) : (
          <>
            <Send size={20} />
            Отправить заявку
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        <span className="text-red-500">*</span> — обязательные поля
      </p>
    </form>
  )
}