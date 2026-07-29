import PermsnAllwUI from '@/commonComponents/notification/components/PermsnAllwUI'
import { useNotificationStateCtx } from '@/context/notifications/useNotificationCtx'

const AllowNotificationUI = () => {
  // ctx
  const {
    cb: { getNotificationPermission }
  } = useNotificationStateCtx()

  return <PermsnAllwUI actnCb={getNotificationPermission} />
}

export default AllowNotificationUI
