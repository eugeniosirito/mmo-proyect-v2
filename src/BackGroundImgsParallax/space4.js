import React from "react";
import { Parallax } from "react-parallax";
import Manual from "../components/Manual";
import styles from './styles.module.css'

const SpaceFour = () => {
    return (
        <Parallax bgImage="https://wallpapercave.com/wp/wp8502109.jpg" strength={800} className={styles.bgcAfter}>
            <Manual />
        </Parallax>
    )
};

export default SpaceFour;