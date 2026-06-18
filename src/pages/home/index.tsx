import { useEffect } from 'react'

import { errHndlrCb } from '@/commonHlpr/error'
import { getFcmTkn } from '@/commonHlpr/fcm'
import { LANGUAGE } from '@/language'

const Home = () => {
  // effect
  useEffect(() => {
    getFcmTkn()
      .then((t) => console.log(t))
      .catch((e) => errHndlrCb(e, LANGUAGE.fcmTokenFetch))
  }, [])

  return <>Home page is here to check....</>
}

export default Home
