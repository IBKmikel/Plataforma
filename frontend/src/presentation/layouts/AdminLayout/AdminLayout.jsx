import { Icon } from '@/assets'
import { Logout } from '@/components/Admin'
import { AdminMenu } from '@/components/Admin/AdminLayout'
import React from 'react'

export function AdminLayout (props) {
  const { children } = props
  return (
    <div className='flex min-h-screen max-h-screen bg-gray-100'>
      <div className='bg-black w-[200px]'>
        <Icon.LogoWhite className='logo w-full h-[30px] my-[10px]' />
        <AdminMenu />
      </div>
      <div className='w-[calc(100%_-_200px)]'>
        <div className='bg-black h-[50px] flex items-center justify-end py-[10px]'>
          <Logout />
        </div>
        <div className='m-[20px] relative'>
          {children}
        </div>
      </div>
    </div>
  )
}
