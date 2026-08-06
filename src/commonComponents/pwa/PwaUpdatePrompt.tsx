import setupPWAUpdate from '@/commonComponents/pwa/helpers/setupPWAUpdate'
import { useEffect, useRef, useState } from 'react'

export const PwaUpdatePrompt = () => {
  const [needRefresh, setNeedRefresh] = useState(false)
  const updateSWRef = useRef<((reload?: boolean) => Promise<void>) | null>(null)
  const [isUpdating, setisUpdating] = useState(false)

  // cb
  const handleUpdate = async () => {
    setisUpdating(true)

    // wait for the browser to actually paint isUpdating=true before proceeding
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))

    try {
      await updateSWRef.current?.(true)
      setisUpdating(false)
    } catch (err) {
      setisUpdating(false)
      console.error(err)
    }
  }

  useEffect(() => {
    updateSWRef.current = setupPWAUpdate(() => setNeedRefresh(true))
  }, [])

  if (!needRefresh) return null

  return (
    <div>
      <>
        need refresh {String(needRefresh)} & updating {String(isUpdating)}
      </>
      {isUpdating ? (
        <div>
          <span>🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪</span>
        </div>
      ) : (
        <>
          <span>😉 new version available! 😉</span>
          <button onClick={handleUpdate}>🤞🏻 Update now</button>
        </>
      )}
    </div>
  )
}
