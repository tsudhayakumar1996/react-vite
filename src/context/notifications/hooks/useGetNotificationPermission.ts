import useGetFCMTokenLogics from '@/context/notifications/hooks/useGetFCMTokenLogics'
import type { ExtentedNotificationPermission } from '@/context/notifications/typeGeneric/extendedNotificationPermission'
import { useCallback, useEffect, useRef, useState } from 'react'

const useGetNotificationPermission = () => {
  // ref
  const mountRef = useRef(false)

  // state
  const [notificationState, setNotificationState] = useState<ExtentedNotificationPermission>(() => {
    if (!('Notification' in window)) return 'not-supported'
    else return Notification.permission
  })

  // hook
  const { getFcmToken } = useGetFCMTokenLogics()

  // cb
  const getNotificationPermission = useCallback(() => {
    Notification.requestPermission()
      .then((res) => {
        setNotificationState(res)
        if (res === 'granted') return getFcmToken()
      })
      .catch((e) => {
        console.log(e, 'Error in service worker registration or FCM token fetch')
        setNotificationState('unknown-error')
      })
  }, [getFcmToken])

  // effect
  useEffect(() => {
    if (notificationState === 'granted' && !mountRef.current) getFcmToken()
    mountRef.current = true
  }, [notificationState, getFcmToken])

  return {
    notificationState,
    getNotificationPermission
  }
}

export default useGetNotificationPermission
