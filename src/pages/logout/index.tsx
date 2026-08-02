import useGetLogoutLogics from '@/pages/logout/hooks/useGetLogoutLogics'
import { Button, Typography } from '@mui/material'

const Logout = () => {
  // hooks
  const { loginRedirecCb } = useGetLogoutLogics()

  return (
    <>
      <Typography variant="h4">Logged out successfully</Typography>
      <Button onClick={loginRedirecCb}>Login</Button>
    </>
  )
}

export default Logout
