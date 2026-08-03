import { RouterProvider } from 'react-router'

import { router } from '@/providers/reactRouter/components'

const ReactRouterProvider = () => {
  return <RouterProvider router={router} />
}

export default ReactRouterProvider
