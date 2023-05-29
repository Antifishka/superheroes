import styled from "styled-components";
import { theme } from "globalStyles/theme";

export const Title = styled.h2`
  padding-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  
  color: ${theme.colors.mainText};
`;

export const SuperheroList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;