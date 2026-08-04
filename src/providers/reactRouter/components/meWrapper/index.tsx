import { CONNECTION_VIOLATES, NOT_AUTHENTICATED_FROM_API } from '@/commonConst/apiInfoMsgs'
import type { ChildProp } from '@/commonType/childType'
import useGetMeWrapperLogics from '@/providers/reactRouter/components/meWrapper/hooks/useGetMeWrapperLogics'
import { Typography } from '@mui/material'
import { Navigate } from 'react-router'
import { PATH_NAMES } from '../../const/pathNames'

const MeWrapper = ({ children }: ChildProp) => {
  // qry
  const { isLoading, error, data } = useGetMeWrapperLogics()

  console.log(error, data, 'error and data')

  if (isLoading) return <Typography variant="h3">Loading...</Typography>

  if (error?.message === NOT_AUTHENTICATED_FROM_API)
    return (
      <Navigate
        to={PATH_NAMES.LOGOUT}
        replace
      />
    )

  if (error?.message === CONNECTION_VIOLATES)
    return (
      <Navigate
        to={PATH_NAMES.HIT_LIMIT}
        replace
      />
    )

  return <>{children}</>
}

export default MeWrapper
