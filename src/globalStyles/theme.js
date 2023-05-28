import { createTheme } from 'styled-breakpoints'; 

export const themeStyles = {
    colors: {
        mainText: '#373737',
        secondaryText: '#EBD8FF',
        background: '#5736A3',
        gradient: 'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
        accent: '#5CD3A8',
    },
    space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
    fontSizes: {
        xxs: '12px',
        xs: '14px',
        s: '18px',
        m: '20px',
        l: '32px',
        xl: '64px',
    },
    fontWeights: {
        medium: 500,
        semiBold: 600,
    },
    lineHeights: {
        text: 1.2,
    },
    sizes: {
        maxWidth: '1300px',
    },
    borders: {
        normal: '1px solid #373737',
    },
    radii: {
        none: '0',
        button: '10px',
        normal: '20px',
        round: '50%',
    },
    shadows: {
        box: '-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)',
        hover: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), 0px -1.71846px 3.43693px #AE7BE3, 0px 3.43693px 2.5777px #FBF8FF',
        line: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF',
        avatar: '0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF',
        innerAvatar: '0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), 0px -2.19582px 4.39163px #AE7BE3, 0px 4.39163px 3.29372px #FBF8FF',
        button: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
    },
    transition: {
        main: '250ms cubic-bezier(0.4, 0, 0.2, 1);',
    },  
    breakpoints: ['420px', '768px', '1300px'],
}

const themeBreakpoints = createTheme({
    mobile: '420px',
    tablet: '768px',
    pc: '1300px',
});

export const theme = { ...themeStyles, ...themeBreakpoints };