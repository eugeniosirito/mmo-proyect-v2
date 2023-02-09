import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Typed from 'react-typed';
import styles from './styles.module.css'


const PlayNow = () => {

  return (
    <>
      <Grid display={'flex'} mt={7} justifyContent={'center'} alignItems={'center'} width={2500} height={883} className={styles.bgcPlayNow}>
        <Grid mt={36}>
          <Grid className={styles.animation}>
            <Box>
              <Typography variant="h4" letterSpacing={4} color={'white'} textAlign={'center'} fontFamily='-moz-initial' className={styles.titlesStylesSub}>
                Rivendell Online
              </Typography>
            </Box>
            <Box>
              <Typography letterSpacing={1} mb={-2} mt={-3} variant="h2" lineHeight={1.5} color={'white'} textAlign={'center'} className={styles.titlesStyles}>
                <Typed
                  strings={[
                    'Empieza tu viaje',
                    'Empieza tu aventura',
                    'Empieza tu leyenda']}
                  typeSpeed={60}
                  backSpeed={60}
                  style={{ paddingLeft: "12px" }}
                  showCursor={true}
                  backDelay={2500}
                />
              </Typography>
            </Box>
            <Box className={styles.launchBgcStyles}>
              <Typography variant="h4" color={'white'} textAlign={'center'} fontFamily='-moz-initial' className={styles.titlesStylesSub}>
                10 de Febrero
              </Typography>
            </Box>
          </Grid>
          <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} mt={4}>
            <Box className={styles.btnSize}>
              <Typography variant="h5" textAlign={'center'} fontFamily='-moz-initial' className={styles.typoHover}>
                <Box className={styles.btnWave}>
                  <Box className={styles.bgcBtn} />
                </Box>
                Jugar
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid >
    </>
  )
}

export default PlayNow;