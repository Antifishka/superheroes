import { createTheme } from 'styled-breakpoints'; 

export const themeStyles = {
    colors: {
        mainText: 'rgba(0, 0, 0, 0.87)',
        secondaryText: '#ffffff',
        background: '#c41e3a',
        accent: '#FCC419',
    },
    space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
    fontSizes: {
        xxs: '12px',
        xs: '14px',
        s: '16px',
        m: '18px',
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
        maxWidth: '1280px',
    },
    borders: {
        normal: '1px solid #373737',
    },
    radii: {
        none: '0',
        normal: '4px',
        box: '20px',
        image: '40px',
        round: '50%',
    },
    shadows: {
        box: '0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%), 1px 4px 6px rgb(0 0 0 / 16%)',
    },
    transition: {
        main: '250ms cubic-bezier(0.4, 0, 0.2, 1);',
    },  
    breakpoints: ['320px', '768px', '1280px'],
}

const themeBreakpoints = createTheme({
    mobile: '320px',
    tablet: '768px',
    pc: '1280px',
});

export const theme = { ...themeStyles, ...themeBreakpoints };