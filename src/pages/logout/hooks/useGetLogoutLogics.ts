import { LOGOUT_API_ROUTE } from '@/commonConst/apiRoutes'
import { connectServerPost } from '@/commonHlpr/fetch'
import { PATH_NAMES } from '@/providers/reactRouter/const/pathNames'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const useGetLogoutLogics = () => {
  // useeffect
  useEffect(() => {
    const logoutCb = async () => {
      await connectServerPost(LOGOUT_API_ROUTE, {})
    }
    logoutCb()
  }, [])

  // hook
  const navigate = useNavigate()

  // cb
  const loginRedirecCb = () => navigate(PATH_NAMES.LOGIN)

  return {
    loginRedirecCb
  }
}

export default useGetLogoutLogics
