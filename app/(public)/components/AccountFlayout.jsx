import { Box, Button, ButtonGroup, Stack } from '@mui/material'
import Link from "next/link"


function AccountFlayout() {
  return (
    <ButtonGroup color='inherit' variant='text' >
      <Button LinkComponent={Link} href='/auth/login' >Login</Button>
      <Button LinkComponent={Link} href='/auth/register'>Register</Button>
    </ButtonGroup>
  )
}

export default AccountFlayout