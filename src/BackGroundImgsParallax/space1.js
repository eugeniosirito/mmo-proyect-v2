import React from "react";
import { Parallax, Background } from "react-parallax";
import Home from "../components/Home";
import img1 from './img3.jpg'
import styles from './styles.module.css'

const SpaceOne = () => {
    return (
        <Parallax strength={1200} className={styles.bgcAfter}>
            <Background >
                <img src={img1} alt="img1" />
            </Background>
            <Home />
        </Parallax>
    )
};

export default SpaceOne;