import { GET_TKN_FRM_CODE_API_ROUTE } from '@/commonConst/apiRoutes'
import { connectServerPost } from '@/commonHlpr/fetch'
import useGetMe from '@/providers/reactRouter/components/meWrapper/queryHooks/useGetMe'
import { PATH_NAMES } from '@/providers/reactRouter/const/pathNames'
import { useGoogleLogin } from '@react-oauth/google'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const useGetLoginLogics = () => {
  // cb
  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: (tR) => mutation.mutate({ code: tR.code })
  })

  // hook
  const navigate = useNavigate()

  // query
  const mutation = useMutation({
    mutationFn: (payload: { code: string }) => connectServerPost(GET_TKN_FRM_CODE_API_ROUTE, { code: payload.code }),
    onSuccess: (r) => {
      if (r?.data) navigate(PATH_NAMES.PRIVATE_ROUTE, { replace: true })
    },
    onError: (e) => alert(e.message)
  })

  const { data } = useGetMe()

  // effect
  useEffect(() => {
    if (data?.data?.email) navigate(PATH_NAMES.PRIVATE_ROUTE)
  }, [data, navigate])

  return { login }
}

export default useGetLoginLogics
