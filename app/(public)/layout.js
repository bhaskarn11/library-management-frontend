import React from 'react'
// import { Box } from '@mui/material'
import NavBar from './components/NavBar';
import { Container, Box, CssBaseline, Toolbar } from '@mui/material';
import Footer from '../common/components/Footer';

function PublicLayout({ children }) {
    return (
        
            <>
                {/* Header and Nav bar goes here */}
                <NavBar />
                {/* sidebar goes here */}
                <Container component="main" sx={{pt: 3}}>
                    <Toolbar />
                    {children}
                </Container>
                {/* footer goes here if present */}
                <Footer />
            </>
        
    )
}

export default PublicLayout