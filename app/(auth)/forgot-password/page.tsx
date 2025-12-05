'use client'
import { KeyIcon } from '@/assets/svgIcons/SvgIcons'
import Link from 'next/link'
import React, { useState } from 'react'

interface FormState {
  email: string
}

interface ValidationErrors {
  email?: string
}

function ForgotPasswordPage() {
  const [formData, setFormData] = useState<FormState>({
    email: ''
  })

  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  // Email validation regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {}

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setSuccessMessage('')

    try {
      // Simulate API call (replace with actual API endpoint)
      await new Promise(resolve => setTimeout(resolve, 1500))

      setSuccessMessage(`✓ Reset link sent to ${formData.email}`)
      setEmailSent(true)
      setFormData({ email: '' })

      // Optional: Redirect after success
      setTimeout(() => {
        // window.location.href = '/signin'
      }, 3000)
    } catch (error) {
      setErrors({ email: 'Failed to send reset link. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  // Handle back to login
  const handleBackToLogin = () => {
    setFormData({ email: '' })
    setErrors({})
    setSuccessMessage('')
    setEmailSent(false)
  }

  return (
    <div className='bg-background flex flex-col items-center justify-center min-h-screen py-8'>
      <div className='w-full max-w-md p-6 bg-box-bg rounded-lg shadow-md border border-[#1e1e1e]'>
        <div className='flex flex-col justify-center items-center mb-6 space-y-3'>
          <div className='p-3 bg-primary rounded-lg'>
            <KeyIcon className='h-8 w-8 text-white' />
          </div>
          <span className='text-2xl font-bold'>Forgot Password</span>
          <span className='text-sm text-center text-muted-foreground'>
            Enter your email to receive a password reset link.
          </span>
        </div>

        {!emailSent ? (
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium mb-2'>
                Email Address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Enter your email address'
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                  errors.email
                    ? 'border-red-500 bg-red-500/5'
                    : 'border-border hover:border-gray-500'
                }`}
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1 flex items-center gap-1'>
                  {errors.email}
                </p>
              )}
              
            </div>

            <button
              type='submit'
              disabled={isLoading}
              className='w-full mt-6 bg-primary hover:bg-primary-hover disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-md transition-all transform hover:scale-105 active:scale-95 duration-300'
            >
              {isLoading ? (
                <span className='flex items-center justify-center gap-2'>
                  <span className='animate-spin'>⌛</span>
                  Sending...
                </span>
              ) : (
                'Send Reset Link'
              )}
            </button>

            <Link
              href='/auth/signin'
              className='block text-center mt-4 text-sm text-primary hover:underline transition-colors'
            >
              Back to Login
            </Link>
          </form>
        ) : (
          <div className='space-y-4 text-center'>
            <div className='p-4 bg-green-500/10 rounded-md border border-green-500/30'>
              <p className='text-green-500 font-semibold mb-2'>✓ Email Sent Successfully!</p>
              <p className='text-sm text-muted-foreground'>
                We've sent a password reset link to <span className='font-medium'>{formData.email || 'your email'}</span>
              </p>
              <p className='text-xs text-muted-foreground mt-2'>
                Please check your email and follow the instructions to reset your password.
              </p>
            </div>

            <p className='text-sm text-muted-foreground'>
              Didn't receive the email? Check your spam folder or
            </p>

            <button
              onClick={() => {
                setEmailSent(false)
                setFormData({ email: '' })
              }}
              className='w-full bg-secondary hover:bg-secondary/80 text-white font-semibold py-2 rounded-md transition-colors duration-300'
            >
              Try Another Email
            </button>

            <Link
              href='/signin'
              onClick={handleBackToLogin}
              className='block text-center mt-4 text-sm text-primary hover:underline transition-colors'
            >
              Back to Login
            </Link>
          </div>
        )}

        {successMessage && !emailSent && (
          <div className='mt-4 p-3 bg-green-500/10 rounded-md border border-green-500/30'>
            <p className='text-green-500 text-sm'>{successMessage}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ForgotPasswordPage