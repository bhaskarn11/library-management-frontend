import Link from "next/link"
import MuiLink from "@mui/material/Link"


function BrandLogo() {
    return (
        <MuiLink href="/" underline="none" variant="h5" color="white" component={Link}>
            LibraSoft
        </MuiLink>
    )
}

export default BrandLogo