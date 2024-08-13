export const hasExpiredToken = (token) => {
  const arrayToken = token.split('.')
  const tokenPayload = JSON.parse(atob(arrayToken[1]))
  const currentData = new Date().getTime()
  return tokenPayload?.exp <= currentData
}
