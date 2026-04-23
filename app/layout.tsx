import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'NeuroVid · Оживление памяти и AI-кинематограф',
  description: 'Верните живой взгляд близких, удивите команду и взорвите охваты с помощью нейро-реставрации и AI-видео.',
  keywords: 'нейро-реставрация, оживление фото, AI видео, семейный архив, HR бренд, Reels',
  authors: [{ name: 'NeuroVid' }],
  openGraph: {
    title: 'NeuroVid · Оживление памяти и AI-кинематограф',
    description: 'Верните живой взгляд близких, удивите команду и взорвите охваты.',
    url: 'https://neurovid.ai',
    siteName: 'NeuroVid',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}