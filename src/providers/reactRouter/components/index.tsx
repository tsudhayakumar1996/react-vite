import { createBrowserRouter } from 'react-router'

import Layout from '@/providers/reactRouter/components/Layout'
// pages
import { ErrorBoundary, Home, Login } from '@/providers/reactRouter/components/RouteComponents'
import { PATH_NAMES } from '@/providers/reactRouter/const/pathNames'

export const router = createBrowserRouter([
   {
      path: PATH_NAMES.HOME,
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
         {
            index: true,
            element: <Home />
         },
         {
            path: PATH_NAMES.LOGIN,
            element: <Login />
         }
      ]
   }
])
