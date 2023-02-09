import React from "react";
import { Parallax, Background } from "react-parallax";
import CharacterSlide from "../components/CharacterSlide";
import img3 from './img1.jpg'
import styles from './styles.module.css'


const SpaceThree = () => {
    return (
        <Parallax strength={800} className={styles.bgcAfter}>
            <Background>
                <img src={img3} alt="img3" />
            </Background>
            <CharacterSlide />
        </Parallax>
    )
};

export default SpaceThree;