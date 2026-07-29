import { AUTH_API_ROUTE, GET_TKN_FRM_CODE_API_ROUTE } from '@/commonConst/apiRoutes'
import { connectServerPost } from '@/commonHlpr/fetch'
import { Button } from '@mui/material'
import { useGoogleLogin } from '@react-oauth/google'
import { useMutation } from '@tanstack/react-query'

const Login = () => {
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

export default Login
