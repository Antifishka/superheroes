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
  max-width: 360px;
  min-width: 300px;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${theme.radii.image};
  box-shadow: ${theme.shadows.box};
  overflow: hidden;

  ${up('tablet')} {
    margin: 0;
  }
`;

export const SuperheroImg = styled.img`
  width: 100%;
  object-fit: cover;
`;