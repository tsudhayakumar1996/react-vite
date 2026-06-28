import type { ChildProp } from '@/commonType/childType'
import { GoogleOAuthProvider } from '@react-oauth/google'

const OAuthProvider = ({ children }: ChildProp) => {
  return <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}>{children}</GoogleOAuthProvider>
}

export default OAuthProvider
