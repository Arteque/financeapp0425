import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './Template/Root'
import ErrorPage from "./Pages/ErrorPage"
import Start from "./Pages/Start"

import { LoadingProvider } from './Context/LoadingContext'

import "./Style/Style.scss"
import Transactions from './Pages/Transactions'
import Budgets from './Pages/Budgets'
import Pots from './Pages/Pots'
import RecurringBills from './Pages/RecurringBills'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    errorElement: <ErrorPage />,
    children:[
      {
      path:"/",
      element:<Start />
    },
      {
      path:"/overview",
      element:<Start />
    },
      {
      path:"/transactions",
      element:<Transactions />
    },
      {
      path:"/budgets",
      element:<Budgets />
    },
      {
      path:"/pots",
      element:<Pots />
    },
      {
      path:"/recurring_bills",
      element:<RecurringBills />
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
