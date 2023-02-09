import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Divider,
    Button,
} from "@mui/material";
import styles from './styles.module.css';

const Info = () => {
    return (
        <>
            <Typography variant="h3" align="center" className={styles.whiteColor}>
                Apertura de la versión 5.0
            </Typography>
            <Typography variant="h5" align="center" mt={1} className={styles.whiteColor}>
                La apertura se realizara el viernes 15 de Julio del 2022 a las 20hs.
                Estamos realizando un sorteo para la apertura, el cual tiene los siguientes premios:
            </Typography>
            <Typography variant="h6" align="center" mt={1} className={styles.whiteColor}>
                1er premio: Carrito de materiales <br /> 2do premio: Ropa de Cypher y cabeza a elección <br /> 3er premio: Ropa de Cypher
            </Typography>
            <Grid container justifyContent="center" className={styles.imgContainer}>
                <img src="https://cucsiproyect.netlify.app/static/media/calendario.16ce214e.jpeg" className={styles.eventoImg} />
            </Grid>
        </>
    )
}

export default Info;