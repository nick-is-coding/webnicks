import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
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

function Header() {
    return(
        <AppBar position="static" sx={{ backgroundColor: '#FEE36E' }}>
                <Toolbar>
                <Typography variant="h6">
                    <Box
                    component="div"
                    sx={{
                        position: "absolute",
                        right: 0,
                        top: 15,
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        animation: `${marquee} 15s linear infinite`,
                        width: "100vw",
                        color: '#2A2A2A',
                      }}
                    >
                    <HeadsetIcon sx={{position: "relative", top: 5}}/> 
                    <span style={{marginLeft: '10px'}}></span>
                      Imagine your favorite song is playing 
                    <span style={{marginRight: '10px'}}></span>
                    <HeadsetIcon sx={{position: "relative", top: 5}}/>
                    </Box>
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}

export default Header;