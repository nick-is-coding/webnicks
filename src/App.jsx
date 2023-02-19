import React from 'react';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Buttons from './Components/Buttons';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #373E98, #59C2FF)', padding: '50px 0', overflow: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Grid container>
          <Header sx={{ paddingTop: '50px' }} />
        </Grid>
        <Grid container sx={{ flexGrow: 1 }}>
          <Grid item xs={12} textAlign='center'>
            <Typography variant='h1' style={{ fontSize: '15vh', marginTop: 120, fontWeight: 600, color: 'white' }}>
              CHECK ME OUT
            </Typography>
          </Grid>
          <Grid item xs={12} className="ButtonGrid">
            <Buttons />
          </Grid>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default App;
