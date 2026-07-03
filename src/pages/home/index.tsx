import { Button, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

const Home = () => {
  // hook
  const { data } = useQuery({
    queryKey: ['InitialData'],
    queryFn: () => ({
      name: 'udhay'
    })
  })

  // hook
  const navigate = useNavigate()

  return (
    <>
      <Typography variant="h4">{data && data.name} version 6</Typography>
      <Button onClick={() => navigate('/login')}>Login</Button>
    </>
  )
}

export default Home
