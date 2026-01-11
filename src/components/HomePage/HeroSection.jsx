'use client'

import React from 'react'
import { ArrowRightIcon, PlayIcon } from '@/assets/SVGIcons/SVGIcons'

const stats = [
  { value: '10K+', label: 'Active Rides', color: 'text-primary' },
  { value: '500K+', label: 'Miles Tracked', color: 'text-secondary' },
  { value: '1K+', label: 'Group Rides', color: 'text-ternary' },
]

export const HeroSection = () => {
  const handleGetStarted = () => {
    console.log('Get Started clicked')
    // Add your navigation logic here
  }

  const handleWatchDemo = () => {
    console.log('Watch Demo clicked')
    // Add your video modal logic here
  }

  return (
    <section className='min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-20rem)] flex items-center bg-background text-foreground transition-colors duration-300 py-2 lg:py-12 border-b border-border/50'>
      <div className='container mx-auto px-4 lg:px-2'>
        <div className='grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-16 items-center max-w-7xl mx-auto'>
          {/* Left Column - Text Content */}
          <div className='space-y-4 lg:space-y-5 order-2 lg:order-1'>
            {/* Main Heading */}
            <div className='space-y-1'>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] tracking-tight'>
                <span className='block text-foreground'>Ride, Track,</span>
                <span className='block text-foreground'>Connect</span>
                <span className='block text-primary'>The Ultimate</span>
                <span className='block text-foreground'>Bikers&apos;</span>
                <span className='block text-primary'>Community</span>
              </h1>
            </div>

            {/* Description */}
            <p className='text-sm sm:text-base lg:text-base text-foreground/75 max-w-lg leading-relaxed'>
              Manage your bikes and expenses, plan epic rides with friends, and connect with
              passionate riders in your area. Everything you need for the perfect riding
              experience.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2'>
              <button
                onClick={handleGetStarted}
                className='group relative bg-primary hover:bg-primary-hover text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 flex items-center justify-center gap-2.5 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 before:ease-in-out'
              >
                <span className='relative z-10'>Get Started Free</span>
                <ArrowRightIcon className='relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1' />
              </button>

              <button
                onClick={handleWatchDemo}
                className='group relative bg-secondary/90 hover:bg-secondary text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border border-secondary/30 hover:border-secondary/50 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/35 flex items-center justify-center gap-2.5 overflow-hidden backdrop-blur-sm'
              >
                <div className='relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110'>
                  <PlayIcon className='w-3 h-3 sm:w-4 sm:h-4 ml-0.5 transition-transform duration-300 group-hover:scale-110' />
                </div>
                <span className='relative z-10'>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className='order-1 lg:order-2 relative'>
            <div className='relative rounded-lg lg:rounded-xl overflow-hidden shadow-lg h-70 md:h-[389px] inset-0'>
              <img
                src='/bikeimage/landingbike.png'
                alt='Bikers on road'
                className='w-full h-full object-fill object-center'
              />
            </div>
            {/* Decorative glow elements */}
            <div className='absolute -z-10 -top-2 -right-2 w-20 h-20 lg:w-24 lg:h-24 bg-primary/10 rounded-full blur-3xl' />
            <div className='absolute -z-10 -bottom-2 -left-2 w-24 h-24 lg:w-28 lg:h-28 bg-secondary/10 rounded-full blur-3xl' />
          </div>
        </div>
        <div className='max-w-sm'>
          <div className='grid grid-cols-3 sm:grid-cols-3 gap-1 lg:gap-2 mt-4'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className='text-center space-y-1 group cursor-default py-4'
              >
                <div className={`text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold ${stat.color} transition-all duration-300 group-hover:scale-105`}>
                  {stat.value}
                </div>
                <div className='text-xs sm:text-sm lg:text-base text-foreground/65 font-medium tracking-wide'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
