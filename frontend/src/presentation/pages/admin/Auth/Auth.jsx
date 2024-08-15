import React from 'react'
import { Icon } from '../../../../assets'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'
import { RegisterForm } from '@/components/Admin/Auth'
import { LoginForm } from '../../../../components/Admin/Auth/LoginForm'

export const Auth = () => {
  return (
    <div className='auth bg-auth-bg min-h-screen bg-center bg-contain flex items-center flex-col pt-[100px]'>
      <Icon.LogoWhite className='logo w-[200px] mb-30' />
      <Tabs defaultValue='login' className='w-[400px]'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='login'>Login</TabsTrigger>
          <TabsTrigger value='register'>Registro</TabsTrigger>
        </TabsList>
        <TabsContent value='login'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center flex-col'>Login</CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
              <LoginForm />
            </CardContent>
            {/* <CardFooter>
              <Button>Save password</Button>
            </CardFooter> */}
          </Card>
        </TabsContent>
        <TabsContent value='register'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center flex-col'>Formulario De Registro</CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
              <RegisterForm />
            </CardContent>
            {/* <CardFooter>
              <Button>Save changes</Button>
            </CardFooter> */}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
