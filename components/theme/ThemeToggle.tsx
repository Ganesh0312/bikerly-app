'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-background border border-border">
      {/* Quick Toggle Button */}
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-hover transition-colors duration-200 font-medium flex items-center gap-2"
        aria-label="Toggle theme"
        title={`Current theme: ${theme === 'system' ? `system (${resolvedTheme})` : theme}`}
      >
        {resolvedTheme === 'dark' ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            <span className="hidden sm:inline">Light</span>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <span className="hidden sm:inline">Dark</span>
          </>
        )}
      </button>

      {/* Theme selector dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-3 py-2 rounded-md bg-secondary text-white hover:bg-secondary-hover transition-colors duration-200"
          aria-label="Theme options"
          aria-expanded={isOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-background border border-border rounded-md shadow-lg z-50">
            <button
              onClick={() => {
                setTheme('light')
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 hover:bg-primary/10 transition-colors ${
                theme === 'light' ? 'bg-primary/20 font-semibold' : ''
              }`}
            >
              Light
            </button>
            <button
              onClick={() => {
                setTheme('dark')
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 hover:bg-primary/10 transition-colors ${
                theme === 'dark' ? 'bg-primary/20 font-semibold' : ''
              }`}
            >
              Dark
            </button>
            <button
              onClick={() => {
                setTheme('system')
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 hover:bg-primary/10 transition-colors ${
                theme === 'system' ? 'bg-primary/20 font-semibold' : ''
              }`}
            >
              System
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
