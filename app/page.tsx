import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import FamilySection from '@/components/sections/FamilySection'
import BusinessSection from '@/components/sections/BusinessSection'
import CreatorsSection from '@/components/sections/CreatorsSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import PricingSection from '@/components/sections/PricingSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import FAQSection from '@/components/sections/FAQSection'
import OrbitNav from '@/components/layout/OrbitNav'

export const metadata: Metadata = {
  title: 'NeuroVid · Оживление памяти и AI-кинематограф',
  description: 'Верните живой взгляд близких, удивите команду и взорвите охваты с помощью нейро-реставрации и AI-видео.',
}

export default function HomePage() {
  return (
    <>
      <main className="relative">
        <Hero />
        <FamilySection />
        <BusinessSection />
        <CreatorsSection />
        <WhyUsSection />
        <PricingSection />
        <PortfolioSection />
        <ReviewsSection />
        <FAQSection />
      </main>
      <OrbitNav />
    </>
  )
}