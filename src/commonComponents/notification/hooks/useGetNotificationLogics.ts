import { useState } from 'react'

const useGetNotificationLogics = () => {
  // const
  const hasNewNotification = true

  // state
  const [anchorEl, setanchorEl] = useState<null | HTMLElement>(null)

  // cb
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setanchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setanchorEl(null)
  }

  // const
  const open = Boolean(anchorEl)

  return {
    hasNewNotification,
    anchorEl,
    handleClick,
    handleClose,
    open
  }
}

export default useGetNotificationLogics
