/// <reference types="vite-plugin-pwa/client" />
import { registerSW } from 'virtual:pwa-register'

type UpdateSWType = (reload?: boolean) => Promise<void>

const setupPWAUpdate = (onNeedRefresh: () => void): UpdateSWType => {
  const updateSW = registerSW({
    immediate: true,
    onNeedRefresh() {
      onNeedRefresh()
    },
    onOfflineReady() {
      console.log('App ready to work offline')
    },
    onRegisteredSW(_swUrl, registration) {
      if (registration) setInterval(() => registration.update(), 60_000)
    }
  })

  return updateSW
}

export default setupPWAUpdate
