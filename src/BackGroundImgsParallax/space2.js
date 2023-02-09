import React from "react";
import { Parallax, Background } from "react-parallax";
import Ranking from "../components/Ranking";
import img2 from './img2.jpg'

const SpaceTwo = () => {
    return (
        <Parallax strength={800}>
            <Background>
                <img src={img2} alt="img2" />
            </Background>
            <Ranking />
        </Parallax>
    )
};

export default SpaceTwo;