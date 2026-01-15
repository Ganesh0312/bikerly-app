'use client'

import Link from 'next/link'
import React from 'react'
import {
  RidoLogo,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YouTubeIcon,
} from '@/assets/SVGIcons/SVGIcons'

interface LinkItem {
  label: string
  href: string
}

interface SocialLink {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export const Footer = () => {
  const platformLinks: LinkItem[] = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Mobile App', href: '#mobile' },
    { label: 'API', href: '#api' },
  ]

  const supportLinks: LinkItem[] = [
    { label: 'Help Center', href: '#help' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' },
  ]

  const socialLinks: SocialLink[] = [
    { name: 'Facebook', href: '#', icon: FacebookIcon },
    { name: 'Twitter', href: '#', icon: TwitterIcon },
    { name: 'Instagram', href: '#', icon: InstagramIcon },
    { name: 'YouTube', href: '#', icon: YouTubeIcon },
  ]

  return (
    <footer className='bg-background/95 border-t border-border/50 text-foreground transition-colors duration-300 pt-2'>
      <div className='container mx-auto px-4 lg:px-6 py-8 lg:py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12'>
          {/* Brand Column */}
          <div className='lg:col-span-1'>
            <Link href='/' className='flex items-center gap-2 mb-4 group'>
              <div className='bg-primary w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform text-white'>
                <RidoLogo className='w-6 h-6' />
              </div>
              <span className='text-xl lg:text-2xl font-bold text-foreground uppercase tracking-tight'>
                RIDO
              </span>
            </Link>
            <p className='text-sm sm:text-base text-foreground/70 mb-6 leading-relaxed'>
              The ultimate platform for motorcycle enthusiasts. Track, plan, and connect with the
              riding community.
            </p>
            <div className='flex items-center gap-3'>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className='w-10 h-10 rounded-full bg-background border border-border/50 hover:border-border hover:bg-background/50 flex items-center justify-center transition-all duration-200 hover:scale-110 text-foreground/70 hover:text-foreground'
                  >
                    <IconComponent className='w-5 h-5' />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h3 className='text-base lg:text-lg font-bold text-foreground mb-4 lg:mb-6'>Platform</h3>
            <ul className='space-y-3'>
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className='text-sm sm:text-base text-foreground/70 hover:text-foreground transition-colors duration-200'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className='text-base lg:text-lg font-bold text-foreground mb-4 lg:mb-6'>Support</h3>
            <ul className='space-y-3'>
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className='text-sm sm:text-base text-foreground/70 hover:text-foreground transition-colors duration-200'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-border/50 pt-6 lg:pt-8'>
          <p className='text-center text-sm sm:text-base text-foreground/60'>
            © 2024 RIDO. All rights reserved. Built for riders, by riders.
          </p>
        </div>
      </div>
    </footer>
  )
}
