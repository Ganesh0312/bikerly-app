# Theme System Documentation

## Overview

This project uses a comprehensive theme system that supports **Light**, **Dark**, and **System** themes. The theme preference is persisted in localStorage and automatically applies across all components.

## Architecture

### Core Components

1. **`ThemeProvider.tsx`** - Context provider that manages theme state
2. **`ThemeToggle.tsx`** - UI component for switching themes
3. **`globals.css`** - CSS variables for theme colors

### Theme Types

- **`light`** - Light theme (white background, dark text)
- **`dark`** - Dark theme (dark background, light text)
- **`system`** - Follows user's OS preference

## Quick Start

### Basic Usage in a Component

```tsx
'use client'

import { useTheme } from '@/components/ThemeProvider'

function MyComponent() {
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme()
  
  return (
    <div className="bg-background text-foreground">
      <p>Current theme: {theme}</p>
      <p>Resolved theme: {resolvedTheme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
```

### Using Theme Toggle Component

```tsx
'use client'

import { ThemeToggle } from '@/components/ThemeToggle'

function MyPage() {
  return (
    <div>
      <ThemeToggle />
      {/* Your content */}
    </div>
  )
}
```

## Theme Hook API

### `useTheme()`

Returns an object with the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `theme` | `'light' \| 'dark' \| 'system'` | Current theme mode |
| `resolvedTheme` | `'light' \| 'dark'` | Actual theme being applied (if system, shows resolved value) |
| `setTheme` | `(theme: 'light' \| 'dark' \| 'system') => void` | Set a specific theme |
| `toggleTheme` | `() => void` | Toggle between light and dark |

### Examples

```tsx
// Get theme info
const { theme, resolvedTheme } = useTheme()

// Set specific theme
const { setTheme } = useTheme()
setTheme('dark')    // Force dark mode
setTheme('light')   // Force light mode
setTheme('system')  // Use system preference

// Toggle theme
const { toggleTheme } = useTheme()
toggleTheme() // Switches between light and dark
```

## Available Theme Colors

### CSS Variables

All theme colors are available as CSS variables and Tailwind classes:

#### Background & Foreground
- `--background` / `bg-background` - Main background color
- `--foreground` / `text-foreground` - Main text color

#### Primary Colors
- `--primary` / `bg-primary`, `text-primary` - Primary accent color
- `--primary-hover` / `bg-primary-hover` - Primary hover state

#### Secondary Colors
- `--secondary` / `bg-secondary`, `text-secondary` - Secondary accent color
- `--secondary-hover` / `bg-secondary-hover` - Secondary hover state

#### Ternary Colors
- `--ternary` / `bg-ternary`, `text-ternary` - Ternary accent color
- `--ternary-hover` / `bg-ternary-hover` - Ternary hover state

#### Semantic Colors
- `--error` / `bg-error`, `text-error` - Error states
- `--warning` / `bg-warning`, `text-warning` - Warning states
- `--success` / `bg-success`, `text-success` - Success states
- `--info` / `bg-info`, `text-info` - Info states

#### Border
- `--border` / `border-border` - Border color

### Color Values

#### Light Theme
```css
--background: #ffffff
--foreground: #171717
--primary: #ff5722
--primary-hover: #dc3d0d
--secondary: #2962ff
--secondary-hover: #0039cb
--ternary: #4ade80
--ternary-hover: #0fdf5b
--border: #ff5722
```

#### Dark Theme
```css
--background: #0a0a0a
--foreground: #ededed
--primary: #ff784e
--primary-hover: #ff9567
--secondary: #82b1ff
--secondary-hover: #9bc3ff
--ternary: #34d399
--ternary-hover: #4ade80
--border: #ff784e
```

## Usage Examples

### Example 1: Themed Card Component

```tsx
'use client'

import React from 'react'

export function ThemedCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg border border-border bg-background">
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-foreground/70">{description}</p>
      <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors">
        Click Me
      </button>
    </div>
  )
}
```

### Example 2: Themed Button Component

```tsx
'use client'

import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ternary'

interface ThemedButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  onClick?: () => void
}

export function ThemedButton({ 
  children, 
  variant = 'primary',
  onClick 
}: ThemedButtonProps) {
  const baseClasses = "px-4 py-2 rounded-md text-white transition-colors font-medium"
  
  const variantClasses = {
    primary: "bg-primary hover:bg-primary-hover",
    secondary: "bg-secondary hover:bg-secondary-hover",
    ternary: "bg-ternary hover:bg-ternary-hover",
  }
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

### Example 3: Themed Input Component

```tsx
'use client'

import React from 'react'

export function ThemedInput({ 
  label, 
  ...props 
}: { 
  label: string 
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-foreground font-medium">
        {label}
      </label>
      <input
        className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:border-secondary focus:outline-none transition-colors"
        {...props}
      />
    </div>
  )
}
```

### Example 4: Conditional Theming Based on Theme

```tsx
'use client'

import { useTheme } from '@/components/ThemeProvider'

export function ConditionalComponent() {
  const { resolvedTheme } = useTheme()
  
  return (
    <div className={`p-4 rounded-lg ${
      resolvedTheme === 'dark' 
        ? 'bg-secondary/20 border-secondary' 
        : 'bg-primary/10 border-primary'
    }`}>
      <p className="text-foreground">
        This component looks different in dark vs light mode
      </p>
    </div>
  )
}
```

### Example 5: Full Page with Theme

```tsx
'use client'

import React from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useTheme } from '@/components/ThemeProvider'

export default function MyPage() {
  const { resolvedTheme } = useTheme()
  
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header with theme toggle */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">My App</h1>
          <ThemeToggle />
        </div>
      </header>
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Welcome
          </h2>
          <p className="text-foreground/80 text-lg">
            Current theme: <span className="font-semibold text-secondary">{resolvedTheme}</span>
          </p>
        </section>
        
        {/* Themed cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-lg border border-border bg-background">
            <h3 className="text-xl font-semibold mb-2 text-primary">Card 1</h3>
            <p className="text-foreground/70">This card adapts to the theme</p>
          </div>
          
          <div className="p-6 rounded-lg border border-border bg-background">
            <h3 className="text-xl font-semibold mb-2 text-secondary">Card 2</h3>
            <p className="text-foreground/70">This card also adapts</p>
          </div>
        </div>
      </main>
    </div>
  )
}
```

## Best Practices

### ✅ DO

1. **Always use theme variables** - Use CSS variables or Tailwind classes instead of hardcoded colors
   ```tsx
   ✅ className="bg-background text-foreground"
   ❌ className="bg-white text-black"
   ```

2. **Use opacity modifiers** for subtle text
   ```tsx
   ✅ className="text-foreground/70"  // 70% opacity
   ✅ className="text-foreground/50"  // 50% opacity
   ```

3. **Add transitions** for smooth theme changes
   ```tsx
   ✅ className="bg-background transition-colors duration-300"
   ```

4. **Use semantic color names** for different purposes
   ```tsx
   ✅ className="bg-error text-white"    // For errors
   ✅ className="bg-success text-white"  // For success messages
   ```

5. **Make components theme-aware** by using theme classes
   ```tsx
   ✅ <div className="border border-border bg-background">
   ```

### ❌ DON'T

1. **Don't hardcode colors** - Always use theme variables
   ```tsx
   ❌ style={{ backgroundColor: '#ffffff' }}
   ❌ className="bg-white"
   ```

2. **Don't assume light theme** - Your components should work in both themes
   ```tsx
   ❌ className="bg-white text-black"  // Won't work in dark mode
   ```

3. **Don't forget hover states** - Use hover variants for interactive elements
   ```tsx
   ❌ className="bg-primary"
   ✅ className="bg-primary hover:bg-primary-hover"
   ```

## Advanced Usage

### Programmatic Theme Control

```tsx
'use client'

import { useTheme } from '@/components/ThemeProvider'
import { useEffect } from 'react'

export function AutoThemeSwitcher() {
  const { setTheme } = useTheme()
  
  useEffect(() => {
    // Example: Switch to dark mode at night
    const hour = new Date().getHours()
    if (hour >= 18 || hour < 6) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [setTheme])
  
  return null
}
```

### Theme-Aware Conditional Rendering

```tsx
'use client'

import { useTheme } from '@/components/ThemeProvider'

export function ThemeSpecificContent() {
  const { resolvedTheme } = useTheme()
  
  return (
    <>
      {resolvedTheme === 'dark' ? (
        <div className="bg-secondary/20 p-4 rounded">
          Dark mode specific content
        </div>
      ) : (
        <div className="bg-primary/10 p-4 rounded">
          Light mode specific content
        </div>
      )}
    </>
  )
}
```

### Custom Theme Hook

```tsx
'use client'

import { useTheme } from '@/components/ThemeProvider'

// Custom hook for theme-specific logic
export function useThemeAware() {
  const { resolvedTheme } = useTheme()
  
  const isDark = resolvedTheme === 'dark'
  const isLight = resolvedTheme === 'light'
  
  return {
    isDark,
    isLight,
    theme: resolvedTheme,
  }
}

// Usage
function MyComponent() {
  const { isDark } = useThemeAware()
  
  return (
    <div className={isDark ? 'dark-mode-styles' : 'light-mode-styles'}>
      Content
    </div>
  )
}
```

## Theme Toggle Component

The `ThemeToggle` component provides a complete UI for theme switching:

```tsx
import { ThemeToggle } from '@/components/ThemeToggle'

// Simple usage
<ThemeToggle />
```

### Features

- **Quick Toggle Button** - Toggles between light/dark
- **Dropdown Menu** - Select Light/Dark/System
- **Responsive** - Works on mobile and desktop
- **Accessible** - Proper ARIA labels

## Troubleshooting

### Theme not persisting

- Check browser localStorage is enabled
- Verify `ThemeProvider` wraps your app in `layout.tsx`

### Hydration errors

- Ensure `suppressHydrationWarning` is on `<html>` tag
- Theme script runs before React hydration

### Colors not updating

- Verify CSS variables are defined in `globals.css`
- Check Tailwind config includes theme colors
- Ensure `data-theme` attribute is set on `<html>`

## File Structure

```
bikerly-app/
├── app/
│   ├── layout.tsx          # ThemeProvider wrapper
│   ├── page.tsx            # Example usage
│   └── globals.css         # Theme CSS variables
└── components/
    ├── ThemeProvider.tsx   # Theme context & hook
    ├── ThemeToggle.tsx     # Theme toggle UI
    └── ExampleThemedComponent.tsx  # Usage examples
```

## Summary

The theme system provides:

- ✅ **3 theme modes**: Light, Dark, System
- ✅ **Persistent storage**: Theme preference saved in localStorage
- ✅ **Easy to use**: Simple `useTheme()` hook
- ✅ **Type-safe**: Full TypeScript support
- ✅ **Tailwind integration**: Works seamlessly with Tailwind classes
- ✅ **Accessible**: Proper ARIA labels and keyboard navigation
- ✅ **No flash**: Theme applied before React hydration

Start building your components with theme-aware classes and they'll automatically adapt to the user's theme preference!

