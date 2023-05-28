import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
import { up } from 'styled-breakpoints';

export const Text = styled.p`
    font-size: ${theme.fontSizes.xxs}; 
    color: ${theme.colors.mainText};

    ${up('mobile')} {
        font-size: ${theme.fontSizes.xs};
    }

    ${up('tablet')} {
        font-size: ${theme.fontSizes.s};
    }

    ${up('pc')} {
        font-size: ${theme.fontSizes.m};
    }
`

export const SocialLink = styled.a`
    color: ${theme.colors.background};

    transition: ${theme.transition.main};

    :hover{
        color: ${theme.colors.accent};
    }
`

export const SocialItem = styled.li`
    padding-top: 4px;
`