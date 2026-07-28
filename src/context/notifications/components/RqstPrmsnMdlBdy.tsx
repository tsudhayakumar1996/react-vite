import { Box, Button, Typography } from '@mui/material'

const RqstPrmsnMdlBdy = ({ actnCb }: { actnCb: () => void }) => {
  return (
    <Box>
      <Typography variant="h6">Click Allow to continue.</Typography>
      <Button onClick={actnCb}>Allow</Button>
    </Box>
  )
}

export default RqstPrmsnMdlBdy
