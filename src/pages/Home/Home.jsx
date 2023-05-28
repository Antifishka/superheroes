// import { useState, useEffect } from "react";
// import API from 'services/api';
import { Helmet } from 'react-helmet';
// import { Loader } from "components/Loader/Loader";
import { SuperheroList } from 'components/SuperheroList/SuperheroList';
import { PaginationMUI } from 'components/Pagination/Pagination';
import { Box } from "components/Box/Box";
import { Title } from './Home.styled';

export default function Home() {
    return (
        <Box p="32px 0 142px" 
            minHeight="100%"
            as="main">
            <Helmet>
                <title>Home</title>
            </Helmet> 

            <h2>Superheroes</h2>

            {/* {isLoading && <Loader />} */}
                    
            <SuperheroList />

            <PaginationMUI />
        </Box>
    );
};
