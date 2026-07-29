import { Box, Button, Typography } from '@mui/material'

const PermsnAllwUI = ({ actnCb }: { actnCb: () => void }) => {
  return (
    <Box>
      <Typography variant="h6">Click Allow to continue.</Typography>
      <Button onClick={actnCb}>Allow</Button>
    </Box>
  )
}

export default PermsnAllwUI
