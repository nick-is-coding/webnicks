import React from 'react';
import { Grid, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import NotesIcon from '@mui/icons-material/Notes';

function Buttons() {

  const ButtonList = [
    {logo: <GitHubIcon/>, name: 'GitHub', link: 'https://github.com/nick-is-coding'},
    {logo: <LinkedInIcon/>, name: 'LinkedIn', link: 'https://www.linkedin.com/in/nicholoshoang/'},
    {logo: <InstagramIcon/>, name: 'Instagram', link: 'https://www.instagram.com/createyourselfpodcast/'},
    {logo: <NotesIcon/>, name: 'Medium', link: 'https://medium.com/@goprojectnick'}
]

  return (
    <Grid item textAlign= 'center'>
        <Grid item xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {ButtonList.map((button, index) => (
        <Button variant='contained' key={index} href={button.link} style={{margin: '30px', backgroundColor: '#3D405B', width: '20vw'}}>
          {button.logo}
          {button.name}
        </Button>
      ))}
    </Grid>
    </Grid>
  );
}

export default Buttons;