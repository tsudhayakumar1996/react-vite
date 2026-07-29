import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsIcon from '@mui/icons-material/Settings'
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined'
import { Box } from '@mui/material'

const EnableNotificationInfoUI = () => {
  return (
    <Box>
      <span>Click the </span>
      <InfoOutlinedIcon /> <span>icon and toggle the Notifications on </span>
      <ToggleOnOutlinedIcon />
      <hr />
      <span>Or go to site settings </span>
      <SettingsIcon />
      <span> and enable the </span>
      <br />
      <span>Notifications</span>
      <NotificationsNoneIcon />
    </Box>
  )
}

export default EnableNotificationInfoUI
