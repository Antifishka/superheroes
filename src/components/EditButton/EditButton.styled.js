import styled from "styled-components";
import { ReactComponent as Icon } from 'assets/icons/pensil.svg';
import { theme } from "globalStyles/theme";
import { up } from 'styled-breakpoints';

export const Text = styled.p`
    font-size: ${theme.fontSizes.s};
    ${up('mobile')} {
        font-size: ${theme.fontSizes.m};
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: ${theme.radii.round};
    cursor: pointer;

    color: ${theme.colors.white};
    background-color: ${theme.colors.background};

    transition: ${theme.transition.main};

    :hover,
    :focus{
        background-color: ${theme.colors.accent};
    }
`;

export const EditIcon = styled(Icon)`
    fill: currentColor;
`;