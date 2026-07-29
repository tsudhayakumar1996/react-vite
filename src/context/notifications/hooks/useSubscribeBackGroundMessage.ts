import { useEffect } from 'react'

export const FCM_BACKGROUND_MESSAGE = 'FCM_BACKGROUND_MESSAGE'

/**
 * if the app in the background, to make the app realtime need to listen the sw onMessage event and update all the connected client
 * this hook listen the message from sw bcz sw will send the message upon receiving any notification
 */
const useSubscribeBackGroundMessage = (cb: () => void) => {
  // effect
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === FCM_BACKGROUND_MESSAGE) {
        cb()
        alert(JSON.stringify(event.data.payload) + '$$$$$$$$$$$$$$ from background...')
      }
    }

    navigator.serviceWorker.addEventListener('message', handleMessage)

    return () => {
      navigator.serviceWorker.removeEventListener('message', handleMessage)
    }
  }, [cb])
}

export default useSubscribeBackGroundMessage
