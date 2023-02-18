import React from 'react';
import { Box, Button, Icon } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


function Footer() {
    return(
        <Box sx={{textAlign: 'center'}}>
            <span><ArrowDownwardIcon></ArrowDownwardIcon>Before you leave, take my resume<ArrowDownwardIcon></ArrowDownwardIcon> </span>
            <br></br>
            <Button href="https://drive.google.com/file/d/1wR1n5iwkL6cwspavgf3mLCMY-Yjlsphu/view?usp=sharing">click me<GetAppIcon></GetAppIcon> </Button>
        </Box>
    )
}

export default Footer;