import Notification from '@/commonComponents/notification'
import { PwaUpdatePrompt } from '@/commonComponents/pwa/PwaUpdatePrompt'
import useGetHeaderLogics from '@/providers/reactRouter/components/layout/hooks/useGetHeaderLogics'
import LogoutIcon from '@mui/icons-material/Logout'
import { AppBar, Box, IconButton } from '@mui/material'

export const headerHeight = 56

const Header = () => {
  // hook
  const { isLgnPg, logoutCb } = useGetHeaderLogics()

  if (isLgnPg) return <></>

  return (
    <Box sx={{ mt: headerHeight + 'px' }}>
      <AppBar
        color="transparent"
        elevation={0}
        sx={{ p: 1, height: headerHeight }}
      >
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
          <PwaUpdatePrompt />
          <Box>
            <IconButton
              size="large"
              aria-label="show the notifications"
              color="inherit"
              onClick={logoutCb}
            >
              <LogoutIcon />
            </IconButton>
            <Notification />
          </Box>
        </Box>
      </AppBar>
    </Box>
  )
}

export default Header
