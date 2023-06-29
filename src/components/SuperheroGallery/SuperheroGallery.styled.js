import styled from "styled-components";
import { theme } from "globalStyles/theme";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components

export const GalleryList = styled(Swiper)`
  margin-bottom: 32px;
  overflow: visible !important;
`;

export const GalleryItem = styled(SwiperSlide)`
  border-radius: ${theme.radii.box};
  box-shadow: ${theme.shadows.box};
  overflow: hidden;
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;