import React from "react";
import { Grid } from "@mui/material";
import styles from './styles.module.css'
import ManualGrid from "./Manual";

const Manual = () => {
  return (
    <Grid container p={12} justifyContent="center">
      <ManualGrid />
    </Grid >
  )
}

export default Manual;