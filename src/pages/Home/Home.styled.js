import styled from "styled-components";

export const SuperheroList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
`;