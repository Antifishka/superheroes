import { createTheme } from 'styled-breakpoints'; 

export const themeStyles = {
    colors: {
        mainText: '#373737',
        secondaryText: '#ffffff',
        background: '#c41e3a',
        accent: '#ffd700',
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
        maxWidth: '1280px',
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