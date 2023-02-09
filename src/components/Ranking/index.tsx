import React from "react";
import { Grid } from "@mui/material";
import Stats from "../Home/Stats";
import RankingContainer from "./RankingContainer";
import styles from './styles.module.css'

const Ranking = () => {
  return (
    <Grid container mt={0} mb={4} justifyContent="center" className={styles.screenContainer}>
      <Grid item xs={4} mt={5} p={5} pt={2} >
        <RankingContainer />
      </Grid>
      <Grid item xs={4} mt={5} p={5} pt={2} >
        <RankingContainer />
      </Grid>
    </Grid >
  )
}

export default Ranking;