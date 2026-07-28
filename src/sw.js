import { initializeApp } from 'firebase/app'
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw'
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'
// import { ExpirationPlugin } from 'workbox-expiration'
// import { NavigationRoute, registerRoute } from 'workbox-routing'
// import { NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies'

precacheAndRoute(self.__WB_MANIFEST)
cleanupOutdatedCaches()

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

onBackgroundMessage(messaging, (payload) => { })

// wait for the app to explicitly tell us to activate the new SW
self.addEventListener('message', (event) => {
   if (event.data?.type === 'SKIP_WAITING') {
      self.skipWaiting()
   }
})

self.addEventListener('activate', () => {
   self.clients.claim()
})
