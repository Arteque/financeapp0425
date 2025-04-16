import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './Template/Root'
import ErrorPage from "./Pages/Dashboard/ErrorPage"
import Start from "./Pages/Dashboard/Start"


import "./Style/Style.scss"
import Transactions from './Pages/Dashboard/Transactions'
import Budgets from './Pages/Dashboard/Budgets'
import Pots from './Pages/Dashboard/Pots'
import RecurringBills from './Pages/Dashboard/RecurringBills'

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
      <RouterProvider router={router} />
  </StrictMode>,
)
