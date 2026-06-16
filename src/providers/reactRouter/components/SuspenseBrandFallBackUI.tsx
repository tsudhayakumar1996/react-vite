import { Suspense } from 'react'

import { BrandLogoAsLoader } from '@/commonComponents/components/BrandLogoAsLoader'
import type { ChildProp } from '@/commonType/childType'

const SuspenseBrandFallBackUI = ({ children }: ChildProp) => {
   return <Suspense fallback={<BrandLogoAsLoader />}>{children}</Suspense>
}

export default SuspenseBrandFallBackUI
