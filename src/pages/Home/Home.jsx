import { useState, useEffect } from "react";
import API from 'services/api';
import { Helmet } from 'react-helmet';
import { Title } from "components/Title/Title";
import { AddButton } from "components/AddButton/AddButton";
import { Loader } from "components/Loader/Loader";
import { SuperheroItem } from 'components/SuperheroItem/SuperheroItem';
import { PaginationMUI } from 'components/Pagination/Pagination';
import { Box } from "components/Box/Box";
import { SuperheroList } from './Home.styled';

export default function Home() {
    const [superheroes, setSuperheroes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        getSuperheroes();

        async function getSuperheroes() {
            try {
                const {superheroes, total, per_page} = await API.fetchSuperheroes(page);
                console.log(superheroes, "fetch superheroes");
                setSuperheroes(superheroes);
            
                const totalPages = Math.ceil(total / per_page);
                console.log(totalPages, "total pages");
            
                setTotalPages(totalPages);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            };
        };
    }, [page]);

    const handleChangePage = (e, value) => {
        setPage(value);
    };

    return (
        <Box p="32px 0 142px" 
            minHeight="100%"
            as="main">
            <Helmet>
                <title>Home</title>
            </Helmet> 
            <Title>Superheroes</Title>

            <AddButton />

            {isLoading && <Loader />}
                    
            <SuperheroList>
                {superheroes?.map(({ _id: id, nickname, images }) => (
                    <SuperheroItem
                        key={id}
                        id={id}
                        nickname={nickname}
                        images={images} />
                ))}
            </SuperheroList>

            <PaginationMUI
                page={page}
                pages={totalPages}
                onClick={handleChangePage} />
        </Box>
    );
};
