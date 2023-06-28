import { createGlobalStyle } from 'styled-components';

import Baloo2 from 'assets/fonts/Baloo2-Regular.ttf';
import Baloo2Bold from 'assets/fonts/Baloo2-Bold.ttf';

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Baloo 2';
        src: url(${Baloo2}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
    font-family: 'Baloo 2 Bold';
    src: url(${Baloo2Bold}) format('truetype');
    font-weight: 700;
    font-style: normal;
}
`;