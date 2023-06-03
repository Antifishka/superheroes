import styled from "styled-components";
import { theme } from "globalStyles/theme";

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: ${theme.radii.box};
    cursor: pointer;
    font-size: ${theme.fontSizes.s};

    color: ${theme.colors.white};
    background-color: ${theme.colors.background};

    transition: ${theme.transition.main};

    :hover,
    :focus{
        background-color: ${theme.colors.accent};
    }
`;