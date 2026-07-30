import { useNotificationStateCtx } from '@/context/notifications/useNotificationCtx'

import useGetNotificationLogics from '@/commonComponents/notification/hooks/useGetNotificationLogics'
import NotificationsIcon from '@mui/icons-material/Notifications'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined'
import { Badge, IconButton, Menu } from '@mui/material'
import NotificationView from './components/NotificationView'

const Notification = () => {
  // ctx
  const {
    notificationState: { permission }
  } = useNotificationStateCtx()

  // hooks
  const { hasNewNotification, anchorEl, handleClick, handleClose, open } = useGetNotificationLogics()

  return (
    <>
      <IconButton
        size="large"
        aria-label="show the notifications"
        color="inherit"
        onClick={anchorEl ? handleClose : handleClick}
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
      {/* notification list */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <NotificationView
          closeCb={handleClose}
          permission={permission}
        />
      </Menu>
    </>
  )
}

export default Notification
