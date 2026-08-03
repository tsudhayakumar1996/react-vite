import { createBrowserRouter } from 'react-router'

// pages
import {
  ErrorBoundary,
  Home,
  Landing,
  Layout,
  Login,
  Logout,
  MeWrapper,
  Profile
} from '@/providers/reactRouter/components/RouteComponents'
import { PATH_NAMES } from '@/providers/reactRouter/const/pathNames'

export const router = createBrowserRouter([
  {
    path: PATH_NAMES.LANDING,
    element: <MeWrapper />,
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
        path: PATH_NAMES.LOGOUT,
        element: <Logout />
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
