import { Container } from '@mui/material'
import { Outlet } from 'react-router'

import SuspenseBrandFallBackUI from '@/providers/reactRouter/components/SuspenseBrandFallBackUI'

const Layout = () => {
  return (
    <Container
      disableGutters
      sx={{ height: '100vh' }}
    >
      <SuspenseBrandFallBackUI>
        <Outlet />
      </SuspenseBrandFallBackUI>
    </Container>
  )
}

export default Layout
