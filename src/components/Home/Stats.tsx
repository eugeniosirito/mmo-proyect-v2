import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Divider,
    Button,
} from "@mui/material";
import styles from './styles.module.css'

const Stats = () => {
    return (
        <>
            <Typography variant="h3" align="center" className={styles.playCucsi} fontFamily='-moz-initial'>
                Jugar CucsiAo
            </Typography>
            <Grid container justifyContent="center" mt={3}>
                <Button variant="contained" size="large">Descargar Cliente</Button>
            </Grid>
            <Grid container justifyContent="center" mt={3} className={styles.woodContainer}>
                <Button variant="text" size="large">
                    <Typography variant="h5" align="center" className={styles.whiteColor} fontFamily='-moz-initial'>
                        Panel de control del usuario
                    </Typography>
                </Button>
            </Grid>
            <Grid p={5} className={styles.woodContainer} mt={5}>
                <Typography variant="h5" className={styles.whiteColor} fontFamily='-moz-initial'>
                    Estado del servidor: <span className={styles.serverState}>OFFLINE</span>
                </Typography>
                <Typography variant="h5" mt={2} className={styles.whiteColor} fontFamily='-moz-initial'>
                    Usuarios Online: 100
                </Typography>
                <Typography variant="h5" mt={2} className={styles.whiteColor} fontFamily='-moz-initial'>
                    Record: 100
                </Typography>
            </Grid>
            <Grid p={5} className={styles.woodContainer} mt={5}>
                <Typography variant="h4" className={styles.whiteColor} fontFamily='-moz-initial'>
                    Castillos:
                </Typography>
                <Typography variant="h5" mt={2} className={styles.northColor} fontFamily='-moz-initial'>
                    Norte: <span className={styles.guilds}>Guild Name</span>
                </Typography>
                <Typography variant="h5" mt={2} className={styles.southColor} fontFamily='-moz-initial'>
                    Sur: <span className={styles.guilds}>Guild Name</span>
                </Typography>
                <Typography variant="h5" mt={2} className={styles.eastColor} fontFamily='-moz-initial'>
                    Este: <span className={styles.guilds}>Guild Name</span>
                </Typography>
                <Typography variant="h5" mt={2} className={styles.westColor} fontFamily='-moz-initial'>
                    Oeste: <span className={styles.guilds}>Guild Name</span>
                </Typography>
            </Grid>
        </>
    )
};

export default Stats;