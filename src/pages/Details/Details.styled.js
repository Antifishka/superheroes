import styled from "styled-components";
import { theme } from "globalStyles/theme";
import { up } from 'styled-breakpoints';

export const SuperheroWrapper = styled.div`
  padding: 0 0 16px 0;

  ${up('tablet')} {
    display: flex;
    gap: 32px;
  }
`;

export const ThumbImg = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  border-radius: ${theme.radii.image};
  box-shadow: ${theme.shadows.box};
  overflow: hidden;

  ${up('tablet')} {
    margin-bottom: 0;
  }
`;

export const SuperheroImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const SuperheroInfo = styled.div`
  padding: 0 16px;

  color: ${theme.colors.mainText};
`;
