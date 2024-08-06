import React from 'react'
import { Icon } from '../../../../assets'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'
import { RegisterForm } from '@/components/Admin/Auth'

export const Auth = () => {
  return (
    <div className='auth bg-auth-bg min-h-screen bg-center bg-contain flex items-center flex-col pt-[100px]'>
      <Icon.LogoWhite className='logo w-[200px] mb-30' />
      <Tabs defaultValue='register' className='w-[400px]'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='register'>Registro</TabsTrigger>
          <TabsTrigger value='login'>Login</TabsTrigger>
        </TabsList>
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
        <TabsContent value='login'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center flex-col'>Login</CardTitle>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='current'>Current password</Label>
                <Input id='current' type='password' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='new'>New password</Label>
                <Input id='new' type='password' />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
