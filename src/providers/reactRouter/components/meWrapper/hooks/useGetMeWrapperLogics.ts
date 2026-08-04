import useGetMe from '@/providers/reactRouter/components/meWrapper/queryHooks/useGetMe'

const useGetMeWrapperLogics = () => {
  // qry
  const { data, isLoading, isError, error } = useGetMe()

  return { data, isLoading, isError, error }
}

export default useGetMeWrapperLogics
