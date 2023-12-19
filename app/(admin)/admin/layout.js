import CssBaseline from '@mui/material/CssBaseline';


export default function AdminLayout({ children }) {
    return (
        <>
            <CssBaseline>
            {/* Header and Nav bar goes here */}
            {/* sidebar goes here */}
            <main>{children}</main>
            {/* footer goes here if present */}
            </CssBaseline>
        </>
    )
  }