import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider
} from "@mui/material";
import styles from './styles.module.css'

const ManualGrid = () => {
  const links = [
    'Razas',
    'Clases',
    'Atributos',
    'Hechizos',
    'Criaturas',
    'Trabajadores',
    'Mapa',
    'Items',
    'Clanes',
    'Razas',
    'Clases',
    'Atributos',
    'Hechizos',
    'Criaturas',
    'Trabajadores',
    'Mapa',
    'Items',
    'Clanes',
    'Atributos',
    'Hechizos',
    'Criaturas',
    'Trabajadores',
    'Mapa',
    'Items',
  ]

  return (
    <>
      <Grid mb={4}>
        <Typography variant='h3' color='white' letterSpacing={1} className={styles.titleStyles}>
          Manual del juego
        </Typography>
        <Box className={styles.launchBgcStyles} />
      </Grid>
      <Grid justifyContent='center' px={17} className={styles.gridContainer}>
        {links.map((link) => (
          <Grid className={styles.manualContainer}>
            <Typography variant='h5' className={styles.titleStyles} color='white' letterSpacing={2}>
              {link}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default ManualGrid;