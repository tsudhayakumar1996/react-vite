import { messaging } from '@/firebase/config'
import { getToken } from 'firebase/messaging'

const useGetFCMTokenLogics = () => {
  // cb
  const getFCMServiceWorkerRegistration = async () => {
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) {
      throw new Error('Service workers are not supported in this environment.')
    }

    const registration = await navigator.serviceWorker.ready

    return registration
  }

  const getFcmToken = async () => {
    const registration = await getFCMServiceWorkerRegistration()

    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FCM_VAPID_KEY,
      serviceWorkerRegistration: registration
    })

    if (!token) throw new Error('Unable to fetch fcm token')
    manageFcmToken(token)
    return token
  }

  const manageFcmToken = (token: string) => {
    console.log(token, 'fcm token is here to check')
  }

  return { getFcmToken }
}

export default useGetFCMTokenLogics
