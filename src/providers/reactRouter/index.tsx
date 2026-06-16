import { RouterProvider } from 'react-router'

import { router } from '@/providers/reactRouter/components'

export const ReactRouterProvider = () => {
   return <RouterProvider router={router} />
}
