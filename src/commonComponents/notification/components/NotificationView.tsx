import AllowNotificationUI from '@/commonComponents/notification/components/AllowNotificationUI'
import EnableNotificationInfoUI from '@/commonComponents/notification/components/EnableNotificationInfoUI'
import type { ExtentedNotificationPermission } from '@/context/notifications/typeGeneric/extendedNotificationPermission'
import CloseIcon from '@mui/icons-material/Close'
import { Box, IconButton, Typography } from '@mui/material'

const NotificationView = ({
  closeCb,
  permission
}: {
  closeCb: () => void
  permission: ExtentedNotificationPermission
}) => {
  return (
    <Box sx={{ width: 400, p: 2, borderRadius: 16 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Notifications</Typography>
        <IconButton onClick={closeCb}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box>
        {permission === 'default' && <AllowNotificationUI />}
        {permission === 'denied' && <EnableNotificationInfoUI />}
        {permission === 'granted' && <Typography variant="h6">Notification List</Typography>}
        {permission === 'unknown-error' && <Typography variant="h6">Please contact tech support</Typography>}
        {permission === 'not-supported' && (
          <Typography variant="h6">Use different browser to get the notifications</Typography>
        )}
      </Box>
    </Box>
  )
}

export default NotificationView
