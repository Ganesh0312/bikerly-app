'use client'

import React from 'react'
import LandingHeader from '@/components/layout/LandingHeader'
import { HeroSection } from '@/components/HomePage/HeroSection'
import { FeaturesSection } from '@/components/HomePage/FeaturesSection'
import { CTASection } from '@/components/HomePage/CTASection'
import { Footer } from '@/components/layout/Footer'

function HomePage() {
  return (
    <div className='min-h-screen bg-background text-foreground transition-colors bg-red-500 duration-300'>
      <LandingHeader />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default HomePage