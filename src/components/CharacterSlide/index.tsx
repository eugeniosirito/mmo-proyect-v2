import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import styles from './styles.module.css'
import { Slide, Slideshow } from "../Slider";
import Typed from 'react-typed';
import RadarPala from "./RadarPala";

const CharacterSlide = () => {

  const charactersImg = [
    {
      url: 'https://cucsiproyect.netlify.app/static/media/paladin3.473de250.png',
      style: styles.imgPaladin
    },
    {
      url: 'https://cucsiproyect.netlify.app/static/media/wizard.a05bae88.png',
      style: styles.imgMage
    },
    {
      url: 'https://cucsiproyect.netlify.app/static/media/archer2.fb986149.png',
      style: styles.imgArcher
    },
    {
      url: 'https://cucsiproyect.netlify.app/static/media/pirata.70831a61.png',
      style: styles.imgPirate
    },
    {
      url: 'https://cucsiproyect.netlify.app/static/media/trabajador.e9fdaadf.png',
      style: styles.imgWorker
    },
    {
      url: 'https://cucsiproyect.netlify.app/static/media/cleric.42561efb.png',
      style: styles.imgCleric
    },
    {
      url: 'https://cucsiproyect.netlify.app/static/media/enanowarrior.7784fd94.png',
      style: styles.imgWarrior
    },
    {
      url: 'https://cucsiproyect.netlify.app/static/media/rogue.8a23ed9e.png',
      style: styles.imgAssassin
    },
  ]

  return (
    <Grid p={12}>
      <Typography variant="h3" align="center" color={'white'} fontFamily='-moz-initial'>
        Select your champion.
      </Typography>
      <Slideshow controles>
        {charactersImg.map((classes) => (
          <Slide>
            <Box display='flex' justifyContent='center' pl={28} pt={2} className={styles.imgContainer}>
              <img src={classes.url} className={classes.style} />
              <RadarPala />
            </Box>
          </Slide>
        ))}
      </Slideshow>
    </Grid >
  )
}

export default CharacterSlide;