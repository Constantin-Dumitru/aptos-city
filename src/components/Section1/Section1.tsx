import React, { FC } from 'react'
import { Grid, Typography } from '@mui/material'
import Behind from './../../shared/images/illustration-rain-futuristic-city.jpg'
import NavBar from './components/NavBar'
import TitleWithLinks from './components/TitleWithLinks'

const SectionOne: FC = () => (
    <Grid container
        sx={{
            background: `linear-gradient(45deg, #010101D0 30%, rgba(0,0,0,0) 100%), url(${Behind})`,
            width: '100vw',
            height: 'calc(100vh + 20px)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // backgroundRepeat: 'no-repeat',
            alignItems: 'center',
            justifyContent: 'center',
            padding: {
                xs: '0 32px',
                md: 'unset'
            }
        }}
    >
        <NavBar />
        <Grid item container xs={12} md={10}>
            <TitleWithLinks />
        </Grid>
    </Grid>
)

export default SectionOne