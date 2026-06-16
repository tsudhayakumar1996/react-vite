import { useQuery } from '@tanstack/react-query'

const Login = () => {
   const { data } = useQuery({
      queryKey: ['InitialData'],
      queryFn: () => ({
         name: 'udhay'
      })
   })
   return (
      <div>
         <p>{data && data.name}</p>
      </div>
   )
}

export default Login
