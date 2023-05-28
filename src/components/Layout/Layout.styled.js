import styled from "styled-components";
// import { theme } from "globalStyles/theme";
import bg from "assets/images/bg.png";
import bg2x from "assets/images/bg@2x.png";

export const SuperheroesImg = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: contain;

    /* @media (-webkit-min-device-pixel-ratio: 2),
       (min--moz-device-pixel-ratio: 2),
       (o-min-device-pixel-ratio: 2/1),
       (min-device-pixel-ratio: 2),
       (min-resolution: 192dpi),
       (min-resolution: 2dppx) {
            background-image: url(${bg2x});
    } */
`;

