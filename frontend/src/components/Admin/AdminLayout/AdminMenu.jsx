import { Icon } from '@/assets'
import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { NavLink } from 'react-router-dom'

export function AdminMenu () {
  const { user: { role } } = useAuth()
  const isAdmin = role === 'admin'

  return (
    <nav className='navbar text-white'>
      {isAdmin && (
        <>
          <NavLink
            to='/admin/users' className={({ isActive }) =>
              isActive
                ? 'flex justify-center items-center bg-blue-700 rounded-md p-2 transition-colors'
                : 'flex justify-center items-center hover:bg-blue-700 rounded-md p-2 transition-colors'}
          >
            <Icon.LogoUser className='h-[30px] my-[3px]' />
            <div className='flex flex-col flex-grow'>
              <span>Usuario</span>
            </div>
          </NavLink>
          <NavLink
            to='/admin/menu' className={({ isActive }) =>
              isActive
                ? 'flex justify-center items-center bg-blue-700 rounded-md p-2 transition-colors'
                : 'flex justify-center items-center hover:bg-blue-700 rounded-md p-2 transition-colors'}
          >
            <Icon.LogoMenu className='h-[30px] my-[3px]' />
            <div className='flex flex-col flex-grow'>
              <span>Menú</span>
            </div>
          </NavLink>
          <NavLink
            to='/admin/courses' className={({ isActive }) =>
              isActive
                ? 'flex justify-center items-center bg-blue-700 rounded-md p-2 transition-colors'
                : 'flex justify-center items-center hover:bg-blue-700 rounded-md p-2 transition-colors'}
          >
            <Icon.LogoCourses className='h-[35px] my-[3px]' />
            <div className='flex flex-col flex-grow'>
              <span>Cursos</span>
            </div>
          </NavLink>
          <NavLink
            to='/admin/newsletter' className={({ isActive }) =>
              isActive
                ? 'flex justify-center items-center bg-blue-700 rounded-md p-2 transition-colors'
                : 'flex justify-center items-center hover:bg-blue-700 rounded-md p-2 transition-colors'}
          >
            <Icon.LogoEmail className='h-[25px] my-[3px]' />
            <div className='flex flex-col flex-grow'>
              <span>
                Newsletter
              </span>
            </div>
          </NavLink>
        </>
      )}
      <NavLink
        to='/admin/blog' className={({ isActive }) =>
          isActive
            ? 'flex justify-center items-center bg-blue-700 rounded-md p-2 transition-colors'
            : 'flex justify-center items-center hover:bg-blue-700 rounded-md p-2 transition-colors'}
      >
        <Icon.LogoBlog className='h-[28px] my-[3px]' />
        <div className='flex flex-col flex-grow'>
          <span>Blog</span>
        </div>
      </NavLink>
    </nav>
  )
}
