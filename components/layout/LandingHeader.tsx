'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { RidoLogo } from '@/assets/svgIcons/SvgIcons'
import { useRouter } from 'next/navigation'
function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Community', href: '#community' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
  ]
  const router = useRouter();

  return (
    <header className='bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50 transition-colors duration-300'>
      <div className='container mx-auto px-4 lg:px-6'>
        <div className='flex justify-between items-center h-16 lg:h-20'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2 group'>
            <div className='text-white bg-primary rounded-lg p-1 transition-transform group-hover:scale-110'>
              <RidoLogo className='w-8 h-8 lg:w-10 lg:h-10' />
            </div>
            <span className='text-xl lg:text-2xl font-bold text-foreground uppercase tracking-tight'>
              RIDO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-6 lg:gap-8'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-sm lg:text-base font-medium text-foreground/80 hover:text-foreground transition-colors relative group'
              >
                {link.label}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full' />
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className='flex items-center gap-3 lg:gap-4'>
            <button
              onClick={() => router.push('signin')}
              className='bg-primary/80 hover:bg-primary-hover hidden text-white sm:block text-sm lg:text-base font-medium hover:text-foreground px-6 py-2 md:py-2.5  rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20'
            >
              Login
            </button>
            <button
              onClick={() => router.push('signup')}
              className='bg-primary/80 hover:bg-primary-hover text-white font-medium text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20'
            >
              Sign Up
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden p-2 text-foreground hover:text-primary transition-colors'
              aria-label='Toggle menu'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                {isMenuOpen ? (
                  <>
                    <line x1='18' y1='6' x2='6' y2='18' />
                    <line x1='6' y1='6' x2='18' y2='18' />
                  </>
                ) : (
                  <>
                    <line x1='3' y1='12' x2='21' y2='12' />
                    <line x1='3' y1='6' x2='21' y2='6' />
                    <line x1='3' y1='18' x2='21' y2='18' />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden border-t border-border/50 py-4 animate-in slide-in-from-top-2'>
            <nav className='flex flex-col gap-3'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className='text-base font-medium text-foreground/80 hover:text-foreground px-2 py-2 transition-colors'
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  console.log('Mobile Login clicked')
                  setIsMenuOpen(false)
                }}
                className='text-left text-base font-medium text-foreground/80 hover:text-foreground px-2 py-2 transition-colors'
              >
                Login
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default LandingHeader