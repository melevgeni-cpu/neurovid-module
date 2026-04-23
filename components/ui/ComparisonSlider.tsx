'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Play, Pause } from 'lucide-react'

interface SlideData {
  before: string
  after: string
  video?: string
}

interface ComparisonSliderProps {
  slides: SlideData[]
}

export default function ComparisonSlider({ slides }: ComparisonSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mode, setMode] = useState<'photo' | 'video'>('photo')
  const [sliderValue, setSliderValue] = useState(50)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (mode === 'photo' && isPlaying) {
      intervalRef.current = setInterval(() => {
        setSliderValue((prev) => {
          const next = prev >= 100 ? 0 : prev + 1
          return next
        })
      }, 50)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [mode, isPlaying])

  const handleModeChange = (newMode: 'photo' | 'video') => {
    setMode(newMode)
    setIsPlaying(true)
    if (newMode === 'video' && videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleDotClick = (idx: number) => {
    setCurrentIndex(idx)
    setSliderValue(50)
  }

  const togglePlayPause = () => {
    if (mode === 'video' && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    } else {
      setIsPlaying(!isPlaying)
    }
  }

  const currentSlide = slides[currentIndex]

  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
        <AnimatePresence>
          {mode === 'photo' && (
            <motion.div
              key="photo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src={currentSlide.before}
                  alt="Before"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                >
                  <Image
                    src={currentSlide.after}
                    alt="After"
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-10"
                  style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }}
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  className="absolute bottom-4 left-[10%] w-[80%] z-20 cursor-grab accent-accent-warm"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {mode === 'video' && currentSlide.video && (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <video
                ref={videoRef}
                src={currentSlide.video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-accent-warm scale-125 shadow-[0_0_10px_var(--accent-warm)]'
                  : 'bg-white/30 border border-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => handleModeChange('photo')}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              mode === 'photo'
                ? 'bg-accent-warm text-black'
                : 'bg-transparent border border-white/30 text-text-primary'
            }`}
          >
            📸 Фото
          </button>
          <button
            onClick={() => handleModeChange('video')}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              mode === 'video'
                ? 'bg-accent-warm text-black'
                : 'bg-transparent border border-white/30 text-text-primary'
            }`}
          >
            🎬 Видео
          </button>
          <button
            onClick={togglePlayPause}
            className="p-2 rounded-full bg-white/10 border border-white/20 text-text-primary hover:bg-white/20 transition"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>
      </div>
    </div>
  )
}