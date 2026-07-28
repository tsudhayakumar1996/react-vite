import RqstPrmsnMdlBdy from '@/context/notifications/components/RqstPrmsnMdlBdy'
import { useNotificationStateCtx } from '@/context/notifications/useNotificationCtx'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsIcon from '@mui/icons-material/Settings'
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined'
import { Box } from '@mui/material'

const EnableNotificationInfoUI = () => {
  // ctx
  const {
    notificationState: { permission },
    cb: { getNotificationPermission }
  } = useNotificationStateCtx()

  if (permission === 'denied')
    return (
      <Box>
        <span>Click the </span>
        <InfoOutlinedIcon sx={{ color: (t) => t.palette.info.main }} />{' '}
        <span>icon and toggle the Notifications on </span>
        <ToggleOnOutlinedIcon />
        <hr />
        <span>Or go to site settings </span>
        <SettingsIcon sx={{ color: (t) => t.palette.info.main }} />
        <span> and enable the </span>
        <br />
        <span>Notifications</span>
        <NotificationsNoneIcon />
      </Box>
    )
  else if (permission === 'default') return <RqstPrmsnMdlBdy actnCb={getNotificationPermission} />
}

export default EnableNotificationInfoUI
