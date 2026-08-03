import { useQuery } from '@tanstack/react-query'
import { Outlet } from 'react-router'

const MeWrapper = () => {
  // qry
  const {} = useQuery({
    queryKey: []
  })

  return <Outlet />
}

export default MeWrapper
