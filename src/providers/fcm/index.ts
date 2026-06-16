import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'

const fireBaseConfig = {
   apiKey: import.meta.env.VITE_FB_API_KEY as string,
   authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN as string,
   projectId: import.meta.env.VITE_FB_PROJECT_ID as string,
   storageBucket: import.meta.env.VITE_FB_BUCKET as string,
   messagingSenderId: import.meta.env.VITE_FB_MESSAGE_SENDER_ID as string,
   appId: import.meta.env.VITE_FB_APP_ID as string,
   measurementId: import.meta.env.VITE_FB_MEASUREMENT_ID as string
}

export const app = initializeApp(fireBaseConfig)
export const messaging = getMessaging(app)
