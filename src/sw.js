import { initializeApp } from 'firebase/app';
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw';
import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';

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

const handler = createHandlerBoundToURL('/index.html');
const navigationRoute = new NavigationRoute(handler, {
  denylist: [/^\/api/], 
});

registerRoute(navigationRoute);

const firebaseApp = initializeApp(fireBaseConfig)

const messaging = getMessaging(firebaseApp)

onBackgroundMessage(messaging, (payload) => { })

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
   self.clients.claim()
})
