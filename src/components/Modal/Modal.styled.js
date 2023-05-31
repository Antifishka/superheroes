import styled from "styled-components";
import { theme } from "globalStyles/theme";

export const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: ${theme.sizes.mediumWidth};
    min-width: ${theme.sizes.minWidth};
    padding: ${theme.space[4]}px;
    background-color: ${theme.colors.white};
    border-radius: ${theme.radii.box};
    box-shadow: ${theme.shadows.box};
`