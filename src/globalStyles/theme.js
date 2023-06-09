import { createTheme } from 'styled-breakpoints'; 

export const themeStyles = {
    colors: {
        mainText: 'rgba(0, 0, 0, 0.87)',
        secondaryText: '#6E798C',
        background: '#c41e3a',
        accent: '#FCC419',
        white: '#ffffff',
        bgFooter: '#f7f7f7',
        error: 'red',
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
        regular: 400,
        bold: 700,
    },
    lineHeights: {
        text: 1.2,
    },
    sizes: {
        minWidth: '360px',
        formWidth: '512px',
        maxWidth: '1280px',
    },
    borders: {
        normal: '1px solid rgba(33, 33, 33, 0.1)',
        input: '1px solid rgba(33, 33, 33, 0.2)',
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
    breakpoints: ['392px', '768px', '1280px'],
}

const themeBreakpoints = createTheme({
    mobile: '392px',
    tablet: '768px',
    desktop: '1280px',
    pc: '1440px'
});

export const theme = { ...themeStyles, ...themeBreakpoints };