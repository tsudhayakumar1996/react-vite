import RqstPrmsnMdlBdy from '@/context/notifications/components/RqstPrmsnMdlBdy'
import { Modal } from '@mui/material'

const RqstPrmsnMdl = ({
  actnCb,
  open,
  closePrompt
}: {
  actnCb: () => void
  closePrompt: () => void
  open: boolean
}) => {
  return (
    <Modal
      onClose={closePrompt}
      open={open}
    >
      <RqstPrmsnMdlBdy actnCb={actnCb} />
    </Modal>
  )
}

export default RqstPrmsnMdl
