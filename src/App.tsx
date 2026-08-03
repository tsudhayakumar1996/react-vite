import EmtySuspnsFallBack from '@/commonComponents/loader/EmtySuspnsFallBack'
import { lazy } from 'react'

// pages
const RctQryPrvdr = lazy(() => import('@/providers/reactQuery/index'))
const MuiThmePrvdr = lazy(() => import('@/providers/theme/mui'))
const SnckBarPrvdr = lazy(() => import('@/providers/snackbar'))
const OAuthPrvdr = lazy(() => import('@/providers/oAuth'))
const ReactRouterPrvdr = lazy(() => import('@/providers/reactRouter'))

const App = () => {
  return (
    <EmtySuspnsFallBack>
      <RctQryPrvdr>
        <MuiThmePrvdr>
          <OAuthPrvdr>
            <ReactRouterPrvdr />
          </OAuthPrvdr>
          <SnckBarPrvdr />
        </MuiThmePrvdr>
      </RctQryPrvdr>
    </EmtySuspnsFallBack>
  )
}

export default App
