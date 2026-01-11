'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('system')
  const [resolvedTheme, setResolvedTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get theme from localStorage or default to system
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setThemeState(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const getResolvedTheme = () => {
      if (theme === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      }
      return theme
    }

    const resolved = getResolvedTheme()
    setResolvedTheme(resolved)

    // Apply theme to document
    const root = document.documentElement
    root.setAttribute('data-theme', resolved)

    // Listen for system theme changes if using system theme
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e) => {
        const newTheme = e.matches ? 'dark' : 'light'
        setResolvedTheme(newTheme)
        root.setAttribute('data-theme', newTheme)
      }

      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme, mounted])

  const setTheme = (newTheme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('light')
    } else {
      // If system, toggle to opposite of current resolved theme
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    }
  }

  // Always provide context, even during SSR
  // Use safe defaults during initial render to prevent hydration issues
  const contextValue = {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
