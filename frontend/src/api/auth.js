import { urlAuth } from '@/utils/endpoints'

export class Auth {
  async register (info) {
    try {
      const params = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname: info.firstname,
          lastname: info.lastname,
          email: info.email,
          password: info.password
        })
      }

      const response = await fetch(`${urlAuth}/register`, params)
      const result = await response.json()

      if (response.status !== 201) throw result

      return result
    } catch (error) {
      return error
    }
  }

  async login (info) {
    try {
      const params = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: info.email,
          password: info.password
        })
      }

      const response = await fetch(`${urlAuth}/login`, params)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result
    } catch (error) {
      return error
    }
  }

  async refreshAccessToken (refreshToken) {
    try {
      const params = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: refreshToken
        })
      }

      const response = await fetch(`${urlAuth}/refresh_access_token`, params)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result
    } catch (error) {
      return error
    }
  }

  setAccessToken (token) {
    localStorage.setItem('access', token)
  }

  getAccessToken () {
    return localStorage.getItem('access')
  }

  setRefreshToken (token) {
    localStorage.setItem('refresh', token)
  }

  getRefreshToken () {
    return localStorage.getItem('refresh')
  }

  removeTokens () {
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
  }
}
