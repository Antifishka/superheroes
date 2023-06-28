import styled from "styled-components";
import { theme } from "globalStyles/theme";
import { up } from 'styled-breakpoints';

export const SuperheroNick = styled.h2`
  text-align: center;
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: 16px;

  ${up('tablet')} {
    text-align: left;
  }
`;

export const Title = styled.p`
  margin-bottom: 8px;

  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.15px;

  color: #8E8E93;
`;
export const SuperheroInfoList = styled.ul`
  padding: 0 16px;

  ${up('tablet')} {
    width: calc(100vw - 2*16px - 300px - 32px);
  }
`;

export const SuperheroInfoItem = styled.li`
  padding: 8px 0 12px 0;

  border-bottom: ${theme.borders.normal};
`;

export const Prop = styled.h4`
  margin-bottom: 4px;
  font-weight: ${theme.fontWeights.bold};

  color: ${theme.colors.mainText};
`;

export const Text = styled.p`
  line-height: 1.4;
  letter-spacing: 0.25px;

  color: ${theme.colors.secondaryText};
`;