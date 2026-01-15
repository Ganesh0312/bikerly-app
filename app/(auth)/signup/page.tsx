'use client'
import { RidoLogoV2, UploadIcon } from '@/assets/SVGIcons/SVGIcons'
import Link from 'next/link'
import React, { useState, ChangeEvent, FormEvent } from 'react'

interface FormData {
  userName: string
  email: string
  password: string
  profilePicture: string | null
}

interface FormErrors {
  userName?: string
  email?: string
  password?: string
  profilePicture?: string
}

const SignUp = () => {
  const [formData, setFormData] = useState<FormData>({
    userName: '',
    email: '',
    password: '',
    profilePicture: null,
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [successMessage, setSuccessMessage] = useState<string>('')

  // Validation functions
  const validateUsername = (username: string): string => {
    if (!username.trim()) return 'Username is required'
    if (username.length < 3) return 'Username must be at least 3 characters'
    if (username.length > 20) return 'Username must not exceed 20 characters'
    if (!/^[a-zA-Z0-9_-]+$/.test(username)) return 'Username can only contain letters, numbers, underscores, and hyphens'
    return ''
  }

  const validateEmail = (email: string): string => {
    if (!email.trim()) return 'Email is required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return 'Please enter a valid email address'
    return ''
  }

  const validatePassword = (password: string): string => {
    if (!password) return 'Password is required'
    if (password.length < 8) return 'Password must be at least 8 characters'
    if (password.length > 50) return 'Password must not exceed 50 characters'
    if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter'
    if (!/[a-z]/.test(password)) return 'Password must contain at least one lowercase letter'
    if (!/[0-9]/.test(password)) return 'Password must contain at least one number'
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password))
      return 'Password must contain at least one special character (!@#$%^&* etc.)'
    return ''
  }

  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  // Handle profile picture change
  const handleProfilePictureChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, profilePicture: 'File size must be less than 5MB' }))
        return
      }
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, profilePicture: 'File must be an image' }))
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profilePicture: reader.result as string
        }))
        setErrors(prev => ({ ...prev, profilePicture: undefined }))
      }
      reader.readAsDataURL(file)
    }
  }

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    const userNameError = validateUsername(formData.userName)
    if (userNameError) newErrors.userName = userNameError

    const emailError = validateEmail(formData.email)
    if (emailError) newErrors.email = emailError

    const passwordError = validatePassword(formData.password)
    if (passwordError) newErrors.password = passwordError

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      console.log('Form submitted:', {
        userName: formData.userName,
        email: formData.email,
        password: '***hidden***',
        hasProfilePicture: !!formData.profilePicture
      })

      setSuccessMessage('Account created successfully! Redirecting...')

      // Reset form
      setFormData({
        userName: '',
        email: '',
        password: '',
        profilePicture: null,
      })
      setShowPassword(false)

      // Redirect after 2 seconds
      setTimeout(() => {
        // window.location.href = '/dashboard'
      }, 2000)
    } catch (error) {
      console.error('Signup error:', error)
      setErrors(prev => ({
        ...prev,
        email: 'An error occurred during signup. Please try again.'
      }))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className='bg-background flex flex-col items-center justify-center min-h-screen py-8'>
        <div className='w-full max-w-md'>
          <div className='border border-[#1e1e1e] bg-box-bg rounded-2xl shadow-lg'>
            {/* Header */}
            <div className='flex flex-col items-center justify-center p-6'>
              <RidoLogoV2 />
              <div className="flex flex-col items-center justify-center gap-2 mt-4">
                <span className='text-3xl font-bold'>Create an account</span>
                <span className='text-lg text-foreground/70'> Join the Bikerly community to start your journey </span>
              </div>
            </div>

            {/* Success Message */}
            {successMessage && (
              <div className='mx-4 mb-4 p-3 bg-green-500/20 border border-green-500 text-green-400 rounded-lg text-sm'>
                ✓ {successMessage}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className='flex flex-col p-6 gap-4'>
              {/* Username Field */}
              <div className='flex flex-col gap-2'>
                <div className='flex'>
                  <label className='text-lg font-medium'>
                    Username <span className='text-red-600'>*</span>
                  </label>
                  {errors.userName && (
                    <span className='text-red-500 text-sm flex items-center gap-1 ml-5'>
                      {errors.userName}
                    </span>
                  )}
                </div>
                <input
                  type='text'
                  name='userName'
                  value={formData.userName}
                  onChange={handleInputChange}
                  placeholder='Enter your username'
                  className={`w-full p-3 border rounded-md bg-background/50 transition-colors ${errors.userName ? 'border-red-500' : 'border-border hover:border-foreground/40'
                    } focus:outline-none focus:border-primary`}
                />

              </div>

              {/* Email Field */}
              <div className='flex flex-col gap-2'>
                <div className='flex'>
                  <label className='text-lg font-medium'>
                    Email <span className='text-red-600'>*</span>
                  </label>
                  {errors.email && (
                    <span className='text-red-500 text-sm flex items-center gap-1 ml-5'>
                      {errors.email}
                    </span>
                  )}
                </div>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='Enter your email'
                  className={`w-full p-3 border rounded-md bg-background/50 transition-colors ${errors.email ? 'border-red-500' : 'border-border hover:border-foreground/40'
                    } focus:outline-none focus:border-primary`}
                />

              </div>

              {/* Password Field with Toggle */}
              <div className='flex flex-col gap-2'>
                <div className='flex'>
                  <label className='text-lg font-medium'>
                    Password <span className='text-red-600'>*</span>
                  </label>
                  {errors.password && (
                    <span className='text-red-500 text-sm flex items-center gap-1 ml-5'>
                      {errors.password}
                    </span>
                  )}
                </div>
                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder='Enter your password'
                    className={`w-full p-3 pr-12 border rounded-md bg-background/50 transition-colors ${errors.password ? 'border-red-500' : 'border-border hover:border-foreground/40'
                      } focus:outline-none focus:border-primary`}
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground/90 transition-colors'
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      // Eye icon (open)
                      <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                        <circle cx='12' cy='12' r='3'></circle>
                      </svg>
                    ) : (
                      // Eye icon (closed)
                      <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                        <path d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24'></path>
                        <line x1='1' y1='1' x2='23' y2='23'></line>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Profile Picture Field */}
              <div className='flex flex-col gap-2'>
                <label className='text-lg font-medium'>Profile Picture <span className='text-foreground/50'>(optional)</span></label>
                <div className='flex items-center gap-4'>
                  <img
                    src={formData.profilePicture || "./profile.png"}
                    alt="profile preview"
                    className="w-16 h-16 rounded-full border border-border object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  />
                  <button
                    type='button'
                    onClick={() => document.getElementById("profile-upload")?.click()}
                    className='flex items-center gap-2 px-4 py-2 border border-border rounded-md hover:bg-box-bg/50 transition-all hover:scale-105 active:scale-95'
                  >
                    <UploadIcon className='w-5 h-5' />
                    <span>{formData.profilePicture ? 'Change' : 'Choose'} file</span>
                  </button>
                  <input
                    type="file"
                    id='profile-upload'
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    className="hidden"
                  />
                </div>
                {formData.profilePicture && (
                  <span className='text-green-500 text-sm flex items-center gap-1'>
                    ✓ Profile picture selected
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isLoading}
                className='w-full bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-base px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.97] shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/40 mt-2'
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>

              {/* Sign In Link */}
              <span className='text-center text-foreground/70'>
                Already have an account?{' '}
                <Link href={'/signin'} className='text-primary font-semibold hover:underline'>
                  Sign in
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
