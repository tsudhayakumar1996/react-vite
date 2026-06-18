import { getToken } from 'firebase/messaging'

import { messaging } from '@/providers/fcm'

export const getFcmTkn = async () => {
  if (!('serviceWorker' in navigator)) return

  const swUrl = import.meta.env.VITE_BUILD_MODE === 'DEVELOPMENT' ? '/dev-sw.js?dev-sw' : '/sw.js'
  const serviceWorkerRegistration = await navigator.serviceWorker.register(swUrl, {
    type: import.meta.env.VITE_BUILD_MODE === 'DEVELOPMENT' ? 'module' : 'classic'
  })
  const vapidKey = import.meta.env.VITE_FB_VAPID_KEY as string
  const res = getToken(messaging, {
    vapidKey,
    serviceWorkerRegistration
  })
  const fcmTkn = await res
  return fcmTkn
}
