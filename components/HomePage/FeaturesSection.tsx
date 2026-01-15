'use client'

import React, { ReactNode } from 'react'
import { BikeIcon, RouteIcon, CommunityIcon } from '@/assets/SVGIcons/SVGIcons'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
  iconBgColor: string
  checkmarkColor: string
}

const FeatureCard = ({
  icon,
  title,
  description,
  features,
  iconBgColor,
  checkmarkColor,
}: FeatureCardProps) => {
  return (
    <div className='bg-background/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 lg:p-8 hover:border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group'>
      {/* Icon */}
      <div className={`${iconBgColor} w-12 h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>

      {/* Title */}
      <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 lg:mb-4'>
        {title}
      </h3>

      {/* Description */}
      <p className='text-sm sm:text-base text-foreground/70 mb-4 lg:mb-6 leading-relaxed'>
        {description}
      </p>

      {/* Features List */}
      <ul className='space-y-2 lg:space-y-3'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-start gap-2 lg:gap-3'>
            <span className={`${checkmarkColor} text-lg lg:text-xl font-bold mt-0.5 flex-shrink-0`}>
              ✓
            </span>
            <span className='text-sm sm:text-base text-foreground/70 leading-relaxed'>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface Feature {
  icon: ReactNode
  title: string
  description: string
  features: string[]
  iconBgColor: string
  checkmarkColor: string
}

const features: Feature[] = [
  {
    icon: <BikeIcon className='w-7 h-7 text-white' />,
    title: 'Bike & Expense Management',
    description:
      'Track maintenance schedules, log expenses, and keep detailed records of all your bikes. Never miss a service or forget a receipt again.',
    features: [
      'Service reminders & tracking',
      'Expense categorization',
      'Multi-bike management',
    ],
    iconBgColor: 'bg-primary',
    checkmarkColor: 'text-primary',
  },
  {
    icon: <RouteIcon className='w-7 h-7 text-white' />,
    title: 'Smart Ride Planning',
    description:
      'Plan epic routes, track your rides, and get in-depth insights about your journeys. Turn every ride into an adventure worth remembering.',
    features: ['GPS route planning', 'Trip summaries', 'Weather integration'],
    iconBgColor: 'bg-secondary',
    checkmarkColor: 'text-secondary',
  },
  {
    icon: <CommunityIcon className='w-7 h-7 text-white' />,
    title: 'Community & Social Groups',
    description:
      'Connect with fellow riders, join local groups, and organize group rides. Share experiences and build lasting friendships on the road.',
    features: ['Local rider groups', 'Event organization', 'Real-time messaging'],
    iconBgColor: 'bg-ternary',
    checkmarkColor: 'text-ternary',
  },
]

export const FeaturesSection = () => {
  return (
    <section id='features' className='bg-background text-foreground transition-colors duration-300 py-12 lg:py-20 px-4 lg:px-6'>
      <div className='container mx-auto max-w-7xl'>
        {/* Header */}
        <div className='text-center mb-10 lg:mb-16 space-y-3 lg:space-y-4'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground'>
            Everything You Need for the Perfect Ride
          </h2>
          <p className='text-base sm:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed'>
            From bike maintenance to group adventures, RIDO brings together all the tools
            passionate riders need in one powerful platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
