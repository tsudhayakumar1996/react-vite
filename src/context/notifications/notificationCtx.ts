import type { ExtentedNotificationPermission } from '@/context/notifications/typeGeneric/extendedNotificationPermission'
import { createContext } from 'react'

export type NotificationState = {
  notificationState: {
    permission: ExtentedNotificationPermission
  }
  cb: {
    getNotificationPermission: () => void
  }
}

type NotificationCtxProps = NotificationState

export const NotificationCtx = createContext({} as NotificationCtxProps)
