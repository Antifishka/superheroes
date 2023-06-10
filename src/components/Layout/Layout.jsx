import { Box } from 'components/Box/Box';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ThumbImg } from "./Layout.styled";
import { Loader } from "components/Loader/Loader";
import { Footer } from 'components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import { theme } from 'globalStyles/theme';

export const Layout = () => {
  return (
    <>
      <header>
        <ThumbImg></ThumbImg>
      </header>
      
      <Box
        position="relative"
        minHeight="100%"
        maxWidth={theme.sizes.maxWidth}
        m="0 auto"
        p="0 16px">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense> 

        <Footer />

        <Toaster position="top-right" reverseOrder={false} />
      </Box>
    </>  
  );
};