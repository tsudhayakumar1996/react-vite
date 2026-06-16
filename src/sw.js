import { initializeApp } from 'firebase/app'
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw'
import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)

// fcm
const fireBaseConfig = {
   apiKey: 'AIzaSyBJ054XPFFBICR8vc5LlHGL_B8a3ftWDG8',
   authDomain: 'maaapalm-98b5b.firebaseapp.com',
   projectId: 'maaapalm-98b5b',
   storageBucket: 'maaapalm-98b5b.firebasestorage.app',
   messagingSenderId: '73650175390',
   appId: '1:73650175390:web:173ba0557dd80717f6aa8f'
}

const firebaseApp = initializeApp(fireBaseConfig)

const messaging = getMessaging(firebaseApp)

onBackgroundMessage(messaging, (payload) => {
   void self.registration.showNotification(payload.notification?.title ?? 'New message', {
      body: payload.notification?.body,
      icon: '/192.png'
   })
})

// fetch
