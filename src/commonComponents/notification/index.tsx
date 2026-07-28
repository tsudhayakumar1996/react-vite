import { useNotificationStateCtx } from '@/context/notifications/useNotificationCtx'

import NotificationsIcon from '@mui/icons-material/Notifications'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined'
import { Badge, IconButton } from '@mui/material'
import NotificationView from './components/NotificationView'

const Notification = () => {
  const {
    notificationState: { permission }
  } = useNotificationStateCtx()
  const hasNewNotification = true

  return (
    <>
      <IconButton
        size="large"
        aria-label="show the notifications"
        color="inherit"
        onClick={() => {}}
      >
        <Badge
          badgeContent={10}
          color="error"
        >
          {permission === 'granted' ? (
            hasNewNotification ? (
              <NotificationsActiveIcon />
            ) : (
              <NotificationsIcon />
            )
          ) : (
            <NotificationsOffOutlinedIcon />
          )}
        </Badge>
      </IconButton>
      <NotificationView
        closeCb={() => {}}
        permission={permission}
      />
    </>
  )
}

export default Notification
