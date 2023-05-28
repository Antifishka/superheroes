import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from 'globalStyles/globalStyle';
import { Layout } from "./components/Layout/Layout";

const Home = lazy(() => import('../pages/Home/Home'));
const SuperheroDetails = lazy(() => import('pages/Details/Details'));

export const App = () => {
  return (  
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:heroId" element={<SuperheroDetails />} />
          <Route path="*" element={<Home />} />
        </Route>  
      </Routes>

      <GlobalStyle />
    </>  
  );
};
