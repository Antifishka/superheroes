import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
        <header>
            <p>Superheroes</p>
            {/* <Img srcSet={isDesktop ? imgDes : imgMob }
                alt="rick&morty_logo"
                width={isDesktop ? "600px" : "312px"}
                loading="lazy" /> */}
      </header> 

      <Suspense fallback={null}>
        <Outlet />
      </Suspense> 
    </Container>
  );
};