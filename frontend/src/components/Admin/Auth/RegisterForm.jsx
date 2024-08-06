// import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'

export function RegisterForm () {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
      terminos: false
    }
  })
  const onSubmit = handleSubmit((data) => { console.log(data) })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='space-y-1'>
          <label htmlFor='email'>Correo:</label>
          <Input
            type='email' id='email' {...register('email', {
              required: {
                value: true,
                message: 'El campo correo es requerido'
              },
              pattern: {
                value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                message: 'Correo inválido'
              }
            })}
          />
          {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
        </div>
        <div className='space-y-1'>
          <label htmlFor='password'>Contraseña:</label>
          <Input
            type='password' id='password' {...register('password', {
              required: { value: true, message: 'El campo password es requerido' },
              minLength: {
                value: 8,
                message: 'El campo password debe tener mínimo 8 caracteres'
              }
            })}
          />
          {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
        </div>
        <div className='space-y-1'>
          <label htmlFor='repeatPassword'>Repetir Contraseña:</label>
          <Input
            type='password' id='repeatPassword' {...register('repeatPassword', {
              required: { value: true, message: 'El campo repetir contraseña es requerido' },
              validate: (value) => value === watch('password') || 'Las contraseñas no coinciden'
            })}
          />
          {errors.repeatPassword && <span className='text-red-600'>{errors.repeatPassword.message}</span>}
        </div>
        <div className='items-top flex space-x-2 p-1'>
          <Controller
            name='terminos'
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Es necesario aceptar las políticas de privacidad'
              }
            }}
            render={({ field: { onChange, value } }) => <Checkbox checked={value} onCheckedChange={onChange} />}
          />
          <div className='grid gap-1.5 leading-none'>
            <label htmlFor='terminos' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'> He leído y acepto las políticas de privacidad</label>
            {errors.terminos && <span className='text-red-600'>{errors.terminos.message}</span>}
          </div>
        </div>
        <div className='space-y-1 p-3'>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </div>
  )
}
