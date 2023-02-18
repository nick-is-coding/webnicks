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
        <AppBar position="static" sx={{ backgroundColor: '#F2CC8F' }}>
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
                        width: "100vw",
                        color: '#F4F1DE',
                      }}
                    >
                    Imagine your favorite song is playing <HeadsetIcon sx={{position: "relative", top: 3}}/> ... 
                    </Box>
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}

export default Header;