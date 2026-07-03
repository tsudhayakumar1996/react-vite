import { Container } from '@mui/material'
import { Outlet } from 'react-router'

import SuspenseBrandFallBackUI from '@/providers/reactRouter/components/SuspenseBrandFallBackUI'
import Header from '@/providers/reactRouter/components/layout/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <SuspenseBrandFallBackUI>
          <Outlet />
        </SuspenseBrandFallBackUI>
      </Container>
    </>
  )
}

export default Layout
