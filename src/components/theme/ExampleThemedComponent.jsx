'use client'

import React from 'react'
import { useTheme } from '@/components/theme/ThemeProvider'

/**
 * Example component showing how to use the theme system
 * Copy this pattern to any component where you need theme access
 */
export function ExampleThemedComponent() {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme()

  return (
    <div className="p-6 rounded-lg border border-border bg-background">
      <h2 className="text-2xl font-bold mb-4 text-foreground">
        Theme Usage Example
      </h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-foreground/70">Current theme mode: <span className="font-semibold text-primary">{theme}</span></p>
          <p className="text-foreground/70">Resolved theme: <span className="font-semibold text-secondary">{resolvedTheme}</span></p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setTheme('light')}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors"
          >
            Set Light
          </button>
          <button
            onClick={() => setTheme('dark')}
            className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-hover transition-colors"
          >
            Set Dark
          </button>
          <button
            onClick={() => setTheme('system')}
            className="px-4 py-2 bg-ternary text-white rounded-md hover:bg-ternary-hover transition-colors"
          >
            Set System
          </button>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 border border-border rounded-md hover:bg-background/50 transition-colors"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  )
}
