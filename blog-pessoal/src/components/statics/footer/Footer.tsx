import React from 'react';
import './Footer.css';
import { Grid, Box, Typography } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer(){
    return(
        <>
        <Grid  container direction="row" justifyContent="center" alignItems="center">
                <Grid  className='FooterPrincipal' item xs={12}>
                    <Box className='footerSiga'>
                        <Box className='siga'>
                            <Typography  variant="h6">Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box className='iconesPrincipal'>
                            <a className='icones' href="https://www.facebook.com/generationbrasil" target="_blank">
                            <FacebookIcon style={{ fontSize: 35, color: "white"}} />
                            </a>
                            <a className='icones' href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon style={{ fontSize: 35, color: "white", paddingRight: "0.5rem"}}/>
                            </a>
                            <a className='icones' href="https://www.linkedin.com/in/flaviasantanab/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 35, color: "white", paddingRight: "0.5rem"}}/>
                            </a>
                            <a className='icones' href="https://github.com/flrvia" target="_blank">
                                <GitHubIcon style={{ fontSize: 35, color: "white", paddingRight: "0.5rem"}}/>
                            </a>
                        </Box>
                    </Box>
                    <Box>
                        <Box className='copyright'>
                            <Typography className='copyright2'>© 2022 Copyright:</Typography>
                        </Box>
                        <Box className='boxFooter'>
                            <a target="_blank" href="https://www.linkedin.com/in/flaviasantanab/">
                                <Typography variant="subtitle2" className='flaviaFooter'>Flávia Santana</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>

    )
}

export default Footer;