import { createBrowserRouter } from 'react-router'

import Layout from '@/providers/reactRouter/components/layout'

// pages
import { ErrorBoundary, Home, Landing, Login, Profile } from '@/providers/reactRouter/components/RouteComponents'
import { PATH_NAMES } from '@/providers/reactRouter/const/pathNames'

export const router = createBrowserRouter([
  {
    path: PATH_NAMES.LANDING,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: PATH_NAMES.LOGIN,
        element: <Login />
      },
      {
        path: PATH_NAMES.PRIVATE_ROUTE,
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: PATH_NAMES.PROFILE,
            element: <Profile />
          }
        ]
      }
    ]
  }
])
