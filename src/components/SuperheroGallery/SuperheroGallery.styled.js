import styled from "styled-components";
import { theme } from "globalStyles/theme";

export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
`;

export const GalleryItem = styled.li`
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

export const GalleryImg = styled.img`
  width: 100%;
  border-radius: ${theme.radii.box};
  height: 300px;
  object-fit: cover;
  margin-bottom: auto;
`;