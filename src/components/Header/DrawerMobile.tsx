import React, { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

const DrawerMobile = () => {

  const [mobileOpen, setMobileOpen] = useState(false);
  const container = window !== undefined ? () => window.document.body : undefined;
  const drawerWidth = 240;

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

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        CucsiCorp
      </Typography>
      <Divider />
      <List>
        {routes.map((item) => (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
      {drawer}
    </Drawer>
  )
};

export default DrawerMobile;