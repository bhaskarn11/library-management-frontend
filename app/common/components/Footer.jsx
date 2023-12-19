'use client'

import { Box, Typography } from '@mui/material'

function Footer() {
  return (
    <Box component="footer" sx={{width: "100%", bottom: 0, 
    px: 2, pb: 2, position: "fixed", textAlign: "center"}}
     bgcolor="InfoBackground">
        <Typography variant='caption'>(c) LibraSoft. All rights reserved.</Typography>
    </Box>
  )
}

export default Footer