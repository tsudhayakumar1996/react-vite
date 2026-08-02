import { PATH_NAMES } from '@/providers/reactRouter/const/pathNames'
import { useLocation, useNavigate } from 'react-router'

const useGetHeaderLogics = () => {
  // hook
  const { pathname } = useLocation()
  const navigate = useNavigate()

  // const
  const isLgnPg = pathname === PATH_NAMES.LOGIN

  // cb
  const logoutCb = () => navigate(PATH_NAMES.LOGOUT)

  return { isLgnPg, logoutCb }
}

export default useGetHeaderLogics
