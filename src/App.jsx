import React from 'react';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Buttons from './Components/Buttons';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
    return(
        <div style={{ height: '100vh', width: '100vw', backgroundColor: '#638475', overflow: 'hidden' }}>
            <Grid container>
                <Header/>
            </Grid>
            <Grid container >
                <Grid item xs={12} textAlign='center'>
                    <Typography variant='h1'>Welcome to my world!</Typography>
                    <Typography variant='h4'>What would you like to learn about me?</Typography>
                </Grid>
                <Grid item xs={12} className="ButtonGrid">
                    <Buttons />
                </Grid>
                <Grid item xs={12}>
                    <Footer/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;