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
    <Grid container justifyContent="center" sx={{maxWidth: '600px', mx: 'auto', marginTop: 5}}>
      <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
        {ButtonList.map((button, index) => (
          <Button
            key={index}
            variant='contained'
            href={button.link}
            sx={{
              m: '10px',
              backgroundColor: '#F16775',
              color: 'white',
              width: '40%',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#D53F3F',
              },
            }}
          >
            {button.logo}
            <span style={{marginLeft: '10px'}}></span>
            {button.name}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
}

export default Buttons;