import { BrowserRouter } from 'react-router-dom'
import { AdminRoutes, WebRoutes } from './presentation/router'
import { AuthProvider } from './context/AuthContext'

function App () {
  return (
    <BrowserRouter>
      <AuthProvider>
        <WebRoutes />
        <AdminRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
