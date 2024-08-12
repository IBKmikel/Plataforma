import { User } from '@/api/user'
import { createContext, useEffect, useState } from 'react'

const userController = new User()
export const AuthContext = createContext()

export function AuthProvider ({ children }) {
// export function AuthProvider (props) {
//   const { children } = props
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {

  }, [])

  const login = async (accessToken) => {
    try {
      const response = await userController.getMe(accessToken)
      setUser(response)
      setToken(accessToken)
    } catch (error) {
      console.error(error)
    }
  }

  const data = {
    accessToken: token,
    user,
    login
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
