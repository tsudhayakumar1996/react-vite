import { GET_ME } from '@/commonConst/apiRoutes'
import { connectServerGet } from '@/commonHlpr/fetch'
import type { ResType } from '@/commonType/resType'
import type { User } from '@/commonType/userType'
import { useQuery } from '@tanstack/react-query'

const useGetMe = () => {
  // qry
  const { data, isLoading, isError, error } = useQuery<ResType<User>>({
    queryKey: ['meQry'],
    queryFn: () => connectServerGet(GET_ME, true),
    staleTime: Infinity
  })

  return { data, isLoading, isError, error }
}

export default useGetMe
