import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "globalStyles/theme";

export const SuperheroCard = styled.li`
  padding: ${theme.space[2]}px;
  border-radius: ${theme.radii.box};
  overflow: hidden;
  box-shadow: ${theme.shadows.box};

  transform: scale(1);
  transition: ${theme.transition.main};

  &:hover,
  &:focus{
    transform: scale(1.03);
  };
`;

export const StyledLink = styled(Link)`
  color: inherit;
`;

export const SuperheroImg= styled.img`
  width: 100%;
  border-radius: ${theme.radii.box};
  height: 380px;
  object-fit: cover;
  margin-bottom: auto;
`;

export const SuperheroInfo = styled.div`
    padding: ${theme.space[3]}px;
`;

export const SuperheroTitle = styled.h4`
    font-size: ${theme.fontSizes.m};
    text-align: center;

    color: ${theme.colors.mainText};
`;
