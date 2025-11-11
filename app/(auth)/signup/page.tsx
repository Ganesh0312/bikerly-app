'use client'
import { RidoLogoV2, UploadIcon } from '@/assets/svgIcons/SvgIcons'
import Link from 'next/link'
import React, { useState } from 'react'
// import RidoLogoV2 from '@/assets/svgIcons/SvgIcons'

function SignUp() {
  const [profilePicture, setProfilePicture] = useState<string | null>(null)

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfilePicture(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <div className='bg-background flex flex-col items-center justify-center h-screen '>
        <div>
          <div className='border border-[#1e1e1e] bg-box-bg rounded-2xl  h-full w-lg shadow-lg'>
            <div className='flex flex-col items-center justify-center p-4'>
              <RidoLogoV2 />
              <div className="flex flex-col items-center justify-center gap-2 ">
                <span className=' text-3xl font-bold'>Create an account</span>
                <span className='text-lg'> Join the Bikerly community to start your journey </span>
              </div>
            </div>
            <div className='flex flex-col p-4  gap-2'>
              <div className='flex flex-col items-start justify-center gap-2'>
                <span className='text-lg'>UserName </span>
                <input type='text' placeholder='Enter your username' className='w-full p-2 border border-border rounded-md' />
              </div>
              <div className='flex flex-col items-start justify-center gap-2'>
                <span className='text-lg'>Email</span>
                <input type='email' placeholder='Enter your email' className='w-full p-2 border border-border rounded-md' />
              </div>
              <div className='flex flex-col items-start justify-center gap-2'>
                <span className='text-lg'>Password</span>
                <input type='password' placeholder='Enter your password' className='w-full p-2 border border-border rounded-md' />
                <div className='flex flex-row items-center justify-start gap-2'>
                </div>
              </div>
              <div className='flex flex-col items-start justify-center gap-2'>
                <span className='text-lg'>Profile Picture (optional)</span>
                <div className='flex flex-row items-center justify-start gap-4 w-full'>
                  <img 
                    src={profilePicture || "./profile.png"} 
                    alt="profile picture" 
                    className="w-14 h-14 rounded-full border border-gray-600 object-cover cursor-pointer hover:opacity-80 transition-opacity" 
                  />
                  <button 
                    type='button'
                    onClick={() => document.getElementById("profile-upload")?.click()} 
                    className='flex flex-row items-center justify-center gap-2 py-2 px-4 border border-gray-600 rounded-md hover:bg-box-bg/50 transition-colors duration-200 hover:transform hover:scale-105 active:scale-95 '
                  >
                    <UploadIcon className='w-5 h-5'/>
                    <span>{profilePicture ? 'Change' :  'Choose'} a file</span>
                  </button>
                  <input 
                    type="file" 
                    id='profile-upload' 
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    className="hidden" 
                  />
                </div>
                {profilePicture && (
                  <span className='text-sm text-foreground/60'>Profile picture selected</span>
                )}
              </div>
              <button className='bg-primary hover:bg-primary-hover text-white font-semibold text-base px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.97] shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/40 mt-4'>
                Create Account
              </button>
              <span className='items-center justify-center flex gap-2'>Already have an account? <Link className='font-semibold' href={'./signin'}>Sign in</Link> </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp