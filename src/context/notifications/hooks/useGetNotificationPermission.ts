import useGetFCMTokenLogics from '@/context/notifications/hooks/useGetFCMTokenLogics'
import type { ExtentedNotificationPermission } from '@/context/notifications/typeGeneric/extendedNotificationPermission'
import { useState } from 'react'

const useGetNotificationPermission = () => {
  // state
  const [notificationState, setNotificationState] = useState<ExtentedNotificationPermission>(Notification.permission)

  // hook
  const { getFcmToken } = useGetFCMTokenLogics()
  // const { openPrompt, closePrompt, showNotificationPrompt } = useGetNotificationPrompt()

  const getNotificationPermission = () => {
    setNotificationState('checking')
    Notification.requestPermission()
      .then((res) => {
        setNotificationState(res)
        // closePrompt()
        if (res === 'granted') return getFcmToken()
      })
      .catch((e) => {
        console.log(e, 'Error in service worker registration or FCM token fetch')
        setNotificationState('unknown-error')
      })
  }

  // const subscribeNotification = useCallback(() => {
  //   if (!('Notification' in window)) {
  //     setNotificationState('not-supported')
  //     return
  //   }

  //   const currentPermission = Notification.permission
  //   setNotificationState(currentPermission)

  //   // permission denied
  //   if (currentPermission === 'denied') return

  //   if (currentPermission === 'granted') {
  //     // fetching fcm token
  //     getFcmToken().catch((e) => {
  //       console.log(e, 'Error in service worker registration or FCM token fetch')
  //       setNotificationState('unknown-error')
  //     })
  //   }
  //   // if (currentPermission === 'default') {
  //   //   openPrompt()
  //   // }
  // }, [getFcmToken])

  // useEffect(() => {
  //   const dontSubscribeNotification = [PATH_NAMES.HOME, PATH_NAMES.LOGIN].includes(pathname) || hasFetchedRef.current
  //   if (dontSubscribeNotification) return
  //   hasFetchedRef.current = true
  //   queueMicrotask(() => {
  //     subscribeNotification()
  //   })
  // }, [pathname, subscribeNotification])

  return {
    notificationState,
    // closePrompt,
    // openPrompt,
    // show: showNotificationPrompt,
    getNotificationPermission
  }
}

export default useGetNotificationPermission
