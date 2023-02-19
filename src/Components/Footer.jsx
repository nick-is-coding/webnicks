import React from 'react';
import { Box, Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';


function Footer() {

    return(
    <Box sx={{textAlign: 'center', backgroundColor: '#2A2A2A', padding: '20px 0', marginTop: '50px', marginBottom: '-50px'}}>
        <h6 style={{color: 'white', fontSize: '1.2rem'}}>BEFORE YOU LEAVE... take my resume </h6>
        <br></br>
        <Button sx={{color: 'white', padding: '0px 30px 10px 0px', transition: 'all 0.3s ease'}} href="https://drive.google.com/file/d/1wR1n5iwkL6cwspavgf3mLCMY-Yjlsphu/view?usp=sharing">
          <GetAppIcon style={{marginRight: '5px'}}></GetAppIcon> Download
        </Button>
      </Box>
    )
}

export default Footer;