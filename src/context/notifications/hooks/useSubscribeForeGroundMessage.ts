import { messaging } from '@/firebase/config'
import { onMessage } from 'firebase/messaging'
import { useEffect } from 'react'

export function subscribeToForegroundMessages(callback: Parameters<typeof onMessage>[1]) {
  return onMessage(messaging, callback)
}

/**
 * register the cb for listen the foreground fcm events
 */
const useSubscribeForeGroundMessage = (cb: () => void) => {
  // effect
  useEffect(() => {
    const unsubscribe = subscribeToForegroundMessages((payload) => {
      cb()
      alert(JSON.stringify(payload) + '****** from foreground...')
    })
    return unsubscribe
  }, [cb])
}

export default useSubscribeForeGroundMessage
