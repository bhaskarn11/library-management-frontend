import BrandLogo from '@/app/common/components/BrandLogo'
import Footer from '@/app/common/components/Footer'
import { Container, Toolbar } from '@mui/material'

function AccountLayout({ children }) {
  return (
    <>
      <Toolbar sx={{bgcolor: "lightsalmon"}}>
        <BrandLogo />
      </Toolbar>
      <Container component="main" sx={{p: 2}}>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default AccountLayout