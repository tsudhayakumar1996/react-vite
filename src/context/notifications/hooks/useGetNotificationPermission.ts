import useGetFCMTokenLogics from '@/context/notifications/hooks/useGetFCMTokenLogics'
import type { ExtentedNotificationPermission } from '@/context/notifications/typeGeneric/extendedNotificationPermission'
import { useEffect, useRef, useState } from 'react'

const useGetNotificationPermission = () => {
  // ref
  const hasFetchedRef = useRef(false)

  // state
  const [notificationState, setNotificationState] = useState<ExtentedNotificationPermission>('initial')
  const [showNotificationPrompt, setshowNotificationPrompt] = useState(false)

  // hook
  const { getFcmToken } = useGetFCMTokenLogics()

  // cb
  const closePrompt = () => setshowNotificationPrompt(false)

  const openPrompt = () => setshowNotificationPrompt(true)

  const getNotificationPermission = () => {
    setNotificationState('checking')
    Notification.requestPermission()
      .then((res) => {
        setNotificationState(res)
        closePrompt()
        if (res === 'granted') return getFcmToken()
      })
      .catch((e) => {
        console.log(e, 'Error in service worker registration or FCM token fetch')
        setNotificationState('unknown-error')
      })
  }

  const subscribeNotification = () => {
    if (!('Notification' in window)) {
      setNotificationState('not-supported')
      return
    }

    const currentPermission = Notification.permission
    setNotificationState(currentPermission)

    // permission denied
    if (currentPermission === 'denied') return

    if (currentPermission === 'granted') {
      // fetching fcm token
      getFcmToken().catch((e) => {
        console.log(e, 'Error in service worker registration or FCM token fetch')
        setNotificationState('unknown-error')
      })
    }
    if (currentPermission === 'default') {
      openPrompt()
    }
  }

  useEffect(() => {
    if (hasFetchedRef.current) return
    hasFetchedRef.current = true
    subscribeNotification()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { notificationState, closePrompt, openPrompt, show: showNotificationPrompt, getNotificationPermission }
}

export default useGetNotificationPermission
