import { errorHndlr } from '@/commonHlpr/fetch'
import { useQuery } from '@tanstack/react-query'

export const ME_QUERY_KEY = 'me'

const useGetMeWrapperLogics = () => {
  // cb
  const fetchMe = async () => {
    fetch(import.meta.env.VITE_SERVER_END_POINT + '/me', { credentials: 'include' })
      .then((r) => errorHndlr(r))
      .catch((e) => {
        throw e
      })
  }

  // qry
  const { data, isLoading, isError } = useQuery({
    queryKey: [ME_QUERY_KEY],
    queryFn: fetchMe,
    staleTime: Infinity
  })

  return { data, isLoading, isError }
}

export default useGetMeWrapperLogics
