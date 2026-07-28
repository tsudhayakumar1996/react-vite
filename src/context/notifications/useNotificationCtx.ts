import { NotificationCtx } from '@/context/notifications/notificationCtx'
import { useContext } from 'react'

export const useNotificationStateCtx = () => useContext(NotificationCtx)
