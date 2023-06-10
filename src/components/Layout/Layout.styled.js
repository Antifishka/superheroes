import styled from "styled-components";
import bg from "assets/images/bg.webp";
import bg2x from "assets/images/bg@2x.webp";
import { up } from 'styled-breakpoints';

export const ThumbImg = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100px;

    @media (-webkit-min-device-pixel-ratio: 2),
       (min--moz-device-pixel-ratio: 2),
       (o-min-device-pixel-ratio: 2/1),
       (min-device-pixel-ratio: 2),
       (min-resolution: 192dpi),
       (min-resolution: 2dppx) {
            background-image: url(${bg2x});
    }

    ${up('tablet')} {
        height: 120px;
    }

    ${up('pc')} {
        height: 140px;
    }
`;

