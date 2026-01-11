'use client'

import React from 'react'
import { ArrowRightIcon } from '@/assets/SVGIcons/SVGIcons'

export const CTASection = () => {
  const handleStartTrial = () => {
    console.log('Start Free Trial clicked')
    // Add your navigation logic here
  }

  const handleLearnMore = () => {
    console.log('Learn More clicked')
    // Add your navigation logic here
  }

  return (
    <section className='bg-background text-foreground transition-colors duration-300 py-12 lg:py-16 px-4 lg:px-6'>
      <div className='container mx-auto max-w-4xl text-center'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 lg:mb-6'>
          Ready to Transform Your Riding Experience?
        </h2>
        <p className='text-base sm:text-lg lg:text-xl text-foreground/80 mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed'>
          Join thousands of riders who are already using RIDO to make their motorcycle journeys
          more organized, social, and memorable.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <button
            onClick={handleStartTrial}
            className='group bg-primary hover:bg-primary-hover text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/30 flex items-center justify-center gap-2 w-full sm:w-auto'
          >
            <span>Start Your Free Trial</span>
            <ArrowRightIcon className='w-5 h-5 transition-transform group-hover:translate-x-1' />
          </button>

          <button
            onClick={handleLearnMore}
            className='border-2 border-border hover:border-foreground/50 text-foreground hover:text-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 w-full sm:w-auto'
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
