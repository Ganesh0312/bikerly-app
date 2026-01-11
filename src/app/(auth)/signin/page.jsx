'use client'
import { RidoLogoV2 } from '@/assets/SVGIcons/SVGIcons'
import Link from 'next/link'
import React from 'react'

function SignInPage() {
  return (
    <>
      <div className='bg-background flex flex-col items-center justify-center h-screen '>
        <div>
          <div className='border border-[#1e1e1e] bg-box-bg rounded-2xl  h-full w-lg shadow-lg'>
            <div className='flex flex-col items-center justify-center p-4'>
              <RidoLogoV2 />
              <div className="flex flex-col items-center justify-center gap-2 ">
                <span className=' text-3xl font-bold'>Welcome Back</span>
                <span className='text-lg'> SignIn to your Bikerly account </span>
              </div>
            </div>
            <div className='flex flex-col p-4  gap-2'>
              <div className='flex flex-col items-start justify-center gap-2'>
                <span className='text-lg'>Email or Username</span>
                <input type='email' placeholder='Enter your email or username' className='w-full p-2 border border-border rounded-md' />
              </div>
              <div className='flex flex-col items-start justify-center gap-2'>
                <span className='text-lg'>Password</span>
                <input type='password' placeholder='Enter your password' className='w-full p-2 border border-border rounded-md' />
                <div className='flex flex-row items-center justify-start gap-2'>
                </div>
              </div>
              <div className=' flex justify-between items-center flex-row'>
                <div className='flex items-center justify-center gap-2 '>
                  <input type="checkbox" id="rememberMe" className=' cursor-pointer' />
                  <label htmlFor="rememberMe" className='text-sm whitespace-nowrap cursor-pointer'>Remember me</label>
                </div>
                <Link href={'./forgot-password'} className='font-semibold'>Forgot Password?</Link>
              </div>
              <button className='bg-primary hover:bg-primary-hover text-white font-semibold text-base px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.97] shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/40 mt-4'>
                Sign In
              </button>
              <span className='items-center justify-center flex gap-2'>Don't have an account? <Link className='font-semibold' href={'./signup'}>Sign Up</Link> </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignInPage
