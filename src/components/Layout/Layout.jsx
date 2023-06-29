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
        <ThumbImg />
      </header>
      
      <Box maxWidth={theme.sizes.maxWidth}
        m="0 auto"
        p="0 16px">
        
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense> 
      </Box>

      <Footer />

      <Toaster position="top-right" reverseOrder={false} />
    </>  
  );
};