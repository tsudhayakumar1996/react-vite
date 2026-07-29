import { initializeApp } from 'firebase/app'
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw'
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)
cleanupOutdatedCaches()

// fcm
const fireBaseConfig = {
   apiKey: 'AIzaSyByzmwU3fqNqQgE-sgGnZ0KMzR_q8un_NU',
   authDomain: 'vazhi-29b60.firebaseapp.com',
   projectId: 'vazhi-29b60',
   storageBucket: 'vazhi-29b60.firebasestorage.app',
   messagingSenderId: '975090474273',
   appId: '1:975090474273:web:8b62db66e175024a203260'
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
