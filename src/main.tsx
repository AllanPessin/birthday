import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'
import Home from './pages/Home'
import Aniversary from './pages/Aniversary'
import Love from './pages/Love'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/feliz-aniversario",
        element: <Aniversary/>
      },
      {
        path: "/eu-te-amo",
        element: <Love />,
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
