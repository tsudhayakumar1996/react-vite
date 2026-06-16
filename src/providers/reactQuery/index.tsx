import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import type { ChildProp } from '@/commonType/childType'

const queryClient = new QueryClient()

declare global {
   interface Window {
      __TANSTACK_QUERY_CLIENT__: import('@tanstack/query-core').QueryClient
   }
}

if (import.meta.env.VITE_BUILD_MODE === 'DEVELOPMENT') {
   window.__TANSTACK_QUERY_CLIENT__ = queryClient
}

export const ReactQueryClientProvider = ({ children }: ChildProp) => {
   return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
