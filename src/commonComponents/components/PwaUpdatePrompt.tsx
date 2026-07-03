import setupPWAUpdate from '@/commonComponents/helpers/setupPWAUpdate'
import { useEffect, useRef, useState } from 'react'

export const PwaUpdatePrompt = () => {
  const [needRefresh, setNeedRefresh] = useState(false)
  const updateSWRef = useRef<((reload?: boolean) => Promise<void>) | null>(null)

  useEffect(() => {
    updateSWRef.current = setupPWAUpdate(() => setNeedRefresh(true))
  }, [])

  if (!needRefresh) return null

  return (
    <div className="update-banner">
      <span>New version available3!</span>
      <button onClick={() => updateSWRef.current?.(true)}>Update now</button>
    </div>
  )
}
