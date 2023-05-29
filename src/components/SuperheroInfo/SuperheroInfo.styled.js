import styled from "styled-components";
import { theme } from "globalStyles/theme";
import { up } from 'styled-breakpoints';

export const SuperheroTitle = styled.h2`
  text-align: center;
  margin-bottom: 16px;

  ${up('tablet')} {
    text-align: left;
  }
`;