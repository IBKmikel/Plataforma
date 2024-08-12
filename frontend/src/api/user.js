import { urlUser } from '@/utils/endpoints'

export class User {
  async getMe (accessToken) {
    try {
      const params = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }

      const response = await fetch(`${urlUser}/me`, params)
      const result = await response.json()

      if (response.status !== 200) throw result

      return result
    } catch (error) {
      return error
    }
  }
}
