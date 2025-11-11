'use client'

import React from 'react'
import { useTheme } from '@/components/ThemeProvider'

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

// <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
    //   <div className="container mx-auto px-4 py-8">
    //     {/* Theme Toggle */}
    //     <div className="flex justify-end mb-8">
    //       <ThemeToggle />
    //     </div>

    //     {/* Main Content */}
    //     <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
    //       <h1 className="text-4xl md:text-5xl font-bold text-center">
    //         Welcome to Bikerly App
    //       </h1>
          
    //       <div className="text-center space-y-4">
    //         <p className="text-lg text-foreground/80">
    //           Current theme: <span className="font-semibold text-primary">{resolvedTheme}</span>
    //         </p>
            
    //         {/* Theme Demo Cards */}
    //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
    //           <div className="p-6 rounded-lg border border-border bg-background">
    //             <h3 className="text-xl font-semibold mb-2 text-primary">Primary</h3>
    //             <p className="text-foreground/70">This card uses primary colors</p>
    //             <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors">
    //               Primary Button
    //             </button>
    //           </div>
              
    //           <div className="p-6 rounded-lg border border-border bg-background">
    //             <h3 className="text-xl font-semibold mb-2 text-secondary">Secondary</h3>
    //             <p className="text-foreground/70">This card uses secondary colors</p>
    //             <button className="mt-4 px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-hover transition-colors">
    //               Secondary Button
    //             </button>
    //           </div>
              
    //           <div className="p-6 rounded-lg border border-border bg-background">
    //             <h3 className="text-xl font-semibold mb-2 text-ternary">Ternary</h3>
    //             <p className="text-foreground/70">This card uses ternary colors</p>
    //             <button className="mt-4 px-4 py-2 bg-ternary text-white rounded-md hover:bg-ternary-hover transition-colors">
    //               Ternary Button
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>