import React from "react";
import { Grid, Typography } from "@mui/material";
import Info from "./Info";
import Stats from "./Stats";
import styles from './styles.module.css'

const Home = () => {
  return (
    <>
      <Grid container p={12} justifyContent="center" className={styles.screenContainer}>
        <Grid item xs={5} mt={5} mr={4} p={5} pt={2} className={styles.container}>
          <Info />
        </Grid>
        <Grid item xs={4} p={5} mt={5}>
          <Stats />
        </Grid>
      </Grid >
    </>
  )
}

export default Home;