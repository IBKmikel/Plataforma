import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Auth } from '@/api/auth'
import { toast, Toaster } from 'sonner'
// import { useAuth } from '@/context/AuthContext'
import { useAuth } from '@/hooks/useAuth'

export function LoginForm () {
  const schema = yup.object().shape({
    email: yup.string().required('El campo correo es requerido').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Correo inválido'),
    password: yup.string().required('El campo password es requerido').min(8, 'El campo Contraseña debe tener mínimo 8 caracteres')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
    // reset
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })
  const { login } = useAuth()

  const onSubmit = handleSubmit(async (data) => {
    const auth = new Auth()
    const result = await auth.login(data)

    if (result.error) {
      toast.error(result.error)
    } else {
      auth.setAccessToken(result.access)
      auth.setRefreshToken(result.refresh)
      login(result.access)
      // reset()
    }
  })

  return (
    <div>
      <Toaster position='top-center' richColors />
      <form onSubmit={onSubmit}>
        <div className='space-y-1'>
          <label htmlFor='email'>Correo:</label>
          <Input
            type='email' id='email' {...register('email')}
          />
          {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
        </div>
        <div className='space-y-1'>
          <label htmlFor='password'>Contraseña:</label>
          <Input
            type='password' id='password' {...register('password')}
          />
          {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
        </div>
        <div className='space-y-1 p-3'>
          <Button type='submit'>Entrar</Button>
        </div>
      </form>
    </div>
  )
}
