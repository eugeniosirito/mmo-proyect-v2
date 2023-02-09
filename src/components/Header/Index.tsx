import React, { useState } from "react";
import {
  AppBar,
  Box,
} from "@mui/material";
import styles from './styles.module.css';
import ToolBar from "./ToolBar";
import DrawerMobile from "./DrawerMobile";


const Header = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" className={styles.navBar}>
        <ToolBar />
      </AppBar>
      <Box component="nav">
        <DrawerMobile />
      </Box>
    </Box>
  )
}

export default Header;