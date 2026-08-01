import { HOME_API_ROUTE } from '@/commonConst/apiRoutes'
import { connectServerGet } from '@/commonHlpr/fetch'
import { useEffect } from 'react'

const Home = () => {
  // effect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await connectServerGet(HOME_API_ROUTE)
        console.log(res, 'response....')
        return res
      } catch (error) {
        console.log(error, 'error')
      }
    }
    fetchData()
  }, [])

  return <div>Home</div>
}

export default Home
