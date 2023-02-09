import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const ToolBar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const routes = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Ranking',
      path: '/ranking'
    },
    {
      name: 'Manual',
      path: '/manual'
    },
    {
      name: 'Staff',
      path: '/staff'
    },
    {
      name: 'Galeria',
      path: '/galeria'
    },
    {
      name: 'Reglamento',
      path: '/reglamento'
    },
    {
      name: 'Contacto',
      path: '/contacto'
    },
  ]

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ ml: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h4"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      />
      <Box sx={{ display: { xs: 'none', sm: 'block' } }} className={styles.fontWeight}>
        {routes.map((item) => (
          <Button key={item.name} sx={{ color: '#fff' }} href={item.path}>
            <Typography variant="h6" className={styles.headerOptions} fontFamily='-moz-initial'>
              {item.name}
            </Typography>
          </Button>
        ))}
      </Box>
    </Toolbar>
  )
};

export default ToolBar;