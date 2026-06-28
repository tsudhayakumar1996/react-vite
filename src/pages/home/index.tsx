import { useEffect } from 'react'

import { AUTH_API_ROUTE, GET_TKN_FRM_CODE_API_ROUTE } from '@/commonConst/apiRoutes/auth'
import { errHndlrCb } from '@/commonHlpr/error'
import { getFcmTkn } from '@/commonHlpr/fcm'
import { connectServerPost } from '@/commonHlpr/fetch'
import { LANGUAGE } from '@/language'
import { Button } from '@mui/material'
import { useGoogleLogin } from '@react-oauth/google'
import { useMutation } from '@tanstack/react-query'

const Home = () => {
  // effect
  useEffect(() => {
    getFcmTkn()
      .then((t) => console.log(t))
      .catch((e) => errHndlrCb(e, LANGUAGE.fcmTokenFetch))
  }, [])

  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: (tR) => mutation.mutate({ code: tR.code })
  })

  const mutation = useMutation({
    mutationFn: (payload: { code: string }) =>
      connectServerPost(AUTH_API_ROUTE + GET_TKN_FRM_CODE_API_ROUTE, { code: payload.code }),
    onSuccess: (r) => console.log(r, 'response')
  })

  return (
    <>
      <Button onClick={() => login()}>Login With Google</Button>
    </>
  )
}

export default Home
