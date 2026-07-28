import { Container } from '@mui/material'
import { Outlet } from 'react-router'

import NotificationCtxProvider from '@/context/notifications/NotificationCtxProvider'
import SuspenseBrandFallBackUI from '@/providers/reactRouter/components/SuspenseBrandFallBackUI'
import Header from '@/providers/reactRouter/components/layout/Header'

const Layout = () => {
  return (
    <NotificationCtxProvider>
      <Header />
      <Container>
        <SuspenseBrandFallBackUI>
          <Outlet />
        </SuspenseBrandFallBackUI>
      </Container>
    </NotificationCtxProvider>
  )
}

export default Layout
