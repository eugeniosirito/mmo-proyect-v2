import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from "./components/Header/Index";
import SpaceOne from "./BackGroundImgsParallax/space1";
import SpaceThree from "./BackGroundImgsParallax/space3";
import HomeScreen from "./BackGroundImgsParallax/homeScreen";
import SpaceFour from "./BackGroundImgsParallax/space4";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <HomeScreen />
      </Grid>
      <SpaceOne />
      <SpaceFour />
      <SpaceThree />
      {/*  <SpaceTwo /> */}

    </div>
  );
}

export default App;