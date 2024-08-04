import { BrowserRouter } from 'react-router-dom'
import { AdminRoutes, WebRoutes } from './presentation/router'

function App () {
  return (
    <BrowserRouter>
      <WebRoutes />
      <AdminRoutes />
    </BrowserRouter>
  )
}

export default App
