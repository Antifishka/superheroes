import { Box } from 'components/Box/Box';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ThumbImg } from "./Layout.styled";
import { Loader } from "components/Loader/Loader";
import { Footer } from 'components/Footer/Footer';
import { theme } from 'globalStyles/theme';

export const Layout = () => {
  return (
    <Box
      position="relative"
      minHeight="100%"
      maxWidth={theme.sizes.maxWidth}
      m="0 auto"
      p="0 16px">
      <header>
        <ThumbImg></ThumbImg>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> 

      <Footer />
    </Box>
  );
};