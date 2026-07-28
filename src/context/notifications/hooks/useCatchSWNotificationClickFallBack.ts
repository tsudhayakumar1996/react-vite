import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export const NAVIGATION_REQUEST_FROM_SW = 'NAVIGATION_REQUEST_FROM_SW'

/**
 * this hook is used to redirect the user when the user clicks the notification in the system level (not in app level)
 * => User clicks the notification
 * => service worker's click event triggered
 * => it post a message for a single client (not for all the tabs)
 * => tab registered this hook
 * => navigation happens from this hook (in app navigation)
 */
const useCatchSWNotificationClickFallBack = () => {
  // hook
  const navigate = useNavigate()

  // effect
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === NAVIGATION_REQUEST_FROM_SW) {
        navigate(event.data.url)
      }
    }

    navigator.serviceWorker.addEventListener('message', handleMessage)

    return () => {
      navigator.serviceWorker.removeEventListener('message', handleMessage)
    }
  }, [navigate])
}

export default useCatchSWNotificationClickFallBack
