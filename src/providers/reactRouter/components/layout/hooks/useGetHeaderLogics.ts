import { PATH_NAMES } from '@/providers/reactRouter/const/pathNames'
import { useNavigate } from 'react-router'

const useGetHeaderLogics = () => {
  // hook
  const navigate = useNavigate()

  // cb
  const logoutCb = () => navigate(PATH_NAMES.LOGOUT)

  return { logoutCb }
}

export default useGetHeaderLogics
