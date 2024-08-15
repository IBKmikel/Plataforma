import { Icon } from '@/assets'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Logout () {
  const nav = useNavigate()
  const { logout } = useAuth()

  const onLogout = () => {
    logout()
    nav('/admin')
  }
  return (
    <Button type='button' variant='destructive' className='flex items-center justify-center p-2.5' onClick={onLogout}><Icon.LogoLogout /></Button>
  )
}
