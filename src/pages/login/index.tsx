import useGetLoginLogics from '@/pages/login/hooks/useGetLoginLogics'
import { Button } from '@mui/material'

const Login = () => {
  // hook
  const { login } = useGetLoginLogics()

  return (
    <>
      <Button onClick={login}>Login With Google</Button>
    </>
  )
}

export default Login
