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
    <Grid container justifyContent='center'>
      {ButtonList.map((button, index) => (
        <Button variant='contained' key={index} href={button.link} style={{margin: '10px', backgroundColor: '#3D405B'}}>
          {button.logo}
          {button.name}
        </Button>
      ))}
    </Grid>
  );
}

export default Buttons;