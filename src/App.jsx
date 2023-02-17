import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Grid } from '@mui/material';
import Buttons from './Components/Buttons';
import {css} from '@mui/system';
import { keyframes } from '@emotion/react';
import HeadsetIcon from '@mui/icons-material/Headset';

const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;



const App = () => {
    return(
        <div style={{backgroundColor: '#638475'}}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6">
                    <Box
                    component="div"
                    sx={{
                        position: "absolute",
                        right: 0,
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        animation: `${marquee} 15s linear infinite`,
                        width: "100vw"
                      }}
                    >
                    Imagine your favorite song is playing <HeadsetIcon sx={{position: "relative", top: 3}}/> ... 
                    </Box>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Grid item xs={12} textAlign='center'>
                    <Typography variant='h1'>Welcome to my world!</Typography>
                    <Typography variant='h4'>What would you like to learn about me?</Typography>
                </Grid>
                <Grid item xs={12} className="ButtonGrid">
                    <Buttons/>
                </Grid>
                <Grid item xs={12}>

                </Grid>
            </Grid>
        </div>
    );
}

export default App;