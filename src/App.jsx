import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { FontStyles } from 'globalStyles/fontStyles';
import { GlobalStyle } from 'globalStyles/globalStyle';
import { Layout } from "components/Layout/Layout";

const Home = lazy(() => import('pages/Home/Home'));
const SuperheroDetails = lazy(() => import('pages/Details/Details'));

const App = () => {
  return (  
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:heroId" element={<SuperheroDetails />} />
          <Route path="*" element={<Home />} />
        </Route>  
      </Routes>

      <FontStyles />
      <GlobalStyle />
    </>  
  );
};
 
export default App;
