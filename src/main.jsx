import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './Template/Root'
import ErrorPage from "./Pages/ErrorPage"
import Start from "./Pages/Start"

import { LoadingProvider } from './Context/LoadingContext'

import "./Style/Style.scss"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    errorElement: <ErrorPage />,
    children:[
      {
      path:"/",
      element:<Start />
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadingProvider>
      <RouterProvider router={router} />
    </LoadingProvider>
  </StrictMode>,
)
