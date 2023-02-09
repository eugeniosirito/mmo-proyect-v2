import React from "react";
import { Parallax, Background } from "react-parallax";
import { Grid } from "@mui/material";
import PlayNow from "../components/PlayNow";
import styles from './styles.module.css';
import bg from './bg.jpg';

const HomeScreen = () => {
    return (
        <Grid>
            <Parallax strength={800} className={styles.bgcAfterSpecial}>
                <Background>
                    <img src={bg} alt="img1" />
                </Background>
                <PlayNow />
            </Parallax>
        </Grid>
    )
};

export default HomeScreen;