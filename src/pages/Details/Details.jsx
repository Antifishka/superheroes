import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "services/api";
import { Box } from "components/Box/Box";
import { Helmet } from 'react-helmet';
import { SuperheroWrapper, ThumbImg, SuperheroImg } from "./Details.styled";
import { SuperheroInfo } from "components/SuperheroInfo/SuperheroInfo";
import { SuperheroGallery } from "components/SuperheroGallery/SuperheroGallery";
import { BackButton } from "components/BackButton/BackButton";
import { Title } from "components/Title/Title";
import DEFAULT_IMAGE from "assets/images/default-image.png";

const SuperheroDetails = () => {
    const { heroId } = useParams();
    const [superhero, setSuperhero] = useState([]);
  
    useEffect(() => {
        getSuperheroById();

        async function getSuperheroById() {
            try {
                const fetchSuperhero = await API.fetchSuperheroById(heroId);
                console.log(fetchSuperhero, "superhero's datails");
                setSuperhero(fetchSuperhero);

            } catch (error) {
                console.log(error);
            };
        };
    }, [heroId]);

    if (!superhero) {
        return null;
    };
    
    const {
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images
    } = superhero;

    const imagePath = images?.length ? images[0].path : DEFAULT_IMAGE;
  
    return (
        <Box p="20px 0 70px" 
            minHeight="100%"
            as="main">
            <Helmet>
                <title>Details</title>
            </Helmet>
                        
            <BackButton>Go back</BackButton>

            <SuperheroWrapper> 
                <ThumbImg>
                    <SuperheroImg src={imagePath}
                        alt={nickname}
                        width="300" />
                </ThumbImg>

                <SuperheroInfo
                    nickname={nickname}
                    realName={real_name}
                    description={origin_description}
                    superpowers={superpowers}
                    catchPhrase={catch_phrase} />
            </SuperheroWrapper>

            <Title>Gallery</Title>
            
            <SuperheroGallery images={images} />
        </Box>
    );
};

export default SuperheroDetails;