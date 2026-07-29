import { useState } from 'react'

const useGetNotificationPrompt = () => {
  // state
  const [showNotificationPrompt, setshowNotificationPrompt] = useState(false)

  // cb
  const closePrompt = () => setshowNotificationPrompt(false)

  const openPrompt = () => setshowNotificationPrompt(true)

  return { openPrompt, closePrompt, showNotificationPrompt }
}

export default useGetNotificationPrompt
