import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "globalStyles/theme";
import { up } from 'styled-breakpoints';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.space[3]}px;
  
  text-transform: uppercase;

  color: ${theme.colors.mainText};
  transition: ${theme.transition.main};
          
  :hover{
    color: ${theme.colors.accent};
  }

  ${up('mobile')} {
    font-size: ${theme.fontSizes.s};
  }

  ${up('tablet')} {
    font-size: ${theme.fontSizes.m};
  }
`;

export const Arrow = styled.svg`
  fill: currentColor;
`;