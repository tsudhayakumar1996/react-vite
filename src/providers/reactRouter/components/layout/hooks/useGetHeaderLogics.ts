import { PATH_NAMES } from '@/providers/reactRouter/const/pathNames'
import { useLocation } from 'react-router'

const useGetHeaderLogics = () => {
  // hook
  const { pathname } = useLocation()

  // const
  const isLgnPg = pathname === PATH_NAMES.LOGIN

  return { isLgnPg }
}

export default useGetHeaderLogics
