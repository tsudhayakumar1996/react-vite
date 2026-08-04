import { useRouteError } from 'react-router'

const ErrorBoundary = () => {
  // hook
  const error = useRouteError()
  console.log(error, 'error')

  return <>An error occured</>
}

export default ErrorBoundary
