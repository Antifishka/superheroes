import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading, selectPage } from "redux/selectors";
import { fetchSuperheroes } from "redux/operations";
import { Helmet } from 'react-helmet-async';
import { Title } from "components/Title/Title";
import { AddButton } from "components/AddButton/AddButton";
import { PaginationMUI } from 'components/Pagination/Pagination';
import { Box } from "components/Box/Box";
import { SuperheroList } from 'components/SuperheroList/SuperheroList';
import toast from 'react-hot-toast';

export default function Home() {
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const page = useSelector(selectPage);

    useEffect(() => {
        dispatch(fetchSuperheroes(page));
        error && toast.error('No response from server!');
    }, [dispatch, error, page]);
   
    return (
        <Box p="32px 0 142px" 
            minHeight="100%"
            as="main">
            <Helmet>
                <title>Home</title>
            </Helmet> 
            <Title>Superheroes</Title>

            <AddButton />

            <SuperheroList />

            <PaginationMUI />
        </Box>
    );
};
