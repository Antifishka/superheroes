import styled from "styled-components";
import { theme } from "globalStyles/theme";
import { up } from 'styled-breakpoints';

export const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: ${theme.sizes.minWidth};
    width: calc(100vw - 180px);
    padding: ${theme.space[5]}px;
    background-color: ${theme.colors.white};
    border-radius: ${theme.radii.box};
    box-shadow: ${theme.shadows.box};

    ${up('tablet')} {
        width: ${theme.sizes.formWidth};
    }
`