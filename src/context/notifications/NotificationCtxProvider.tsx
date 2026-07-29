import type { ChildProp } from '@/commonType/childType'
// import RqstPrmsnMdl from '@/context/notifications/components/RqstPrmsnMdl'
import useCatchSWNotificationClickFallBack from '@/context/notifications/hooks/useCatchSWNotificationClickFallBack'
import useGetNotificationPermission from '@/context/notifications/hooks/useGetNotificationPermission'
import useSubscribeBackGroundMessage from '@/context/notifications/hooks/useSubscribeBackGroundMessage'
import useSubscribeForeGroundMessage from '@/context/notifications/hooks/useSubscribeForeGroundMessage'
import { NotificationCtx } from '@/context/notifications/notificationCtx'

const NotificationCtxProvider = ({ children }: ChildProp) => {
  // hook
  const { notificationState, getNotificationPermission } = useGetNotificationPermission()
  useCatchSWNotificationClickFallBack()
  useSubscribeBackGroundMessage(() => {})
  useSubscribeForeGroundMessage(() => {})

  return (
    <NotificationCtx.Provider
      value={{
        notificationState: {
          permission: notificationState
        },
        cb: {
          getNotificationPermission
        }
      }}
    >
      {children}
    </NotificationCtx.Provider>
  )
}

export default NotificationCtxProvider
