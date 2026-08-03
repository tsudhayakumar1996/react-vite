import type { ChildProp } from '@/commonType/childType'
import { Suspense } from 'react'

const EmtySuspnsFallBack = ({ children }: ChildProp) => {
  return <Suspense fallback={<></>}>{children}</Suspense>
}

export default EmtySuspnsFallBack
