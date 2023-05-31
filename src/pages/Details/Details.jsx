import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSuperheroes, selectError } from "redux/selectors";
import { fetchSuperheroById } from "redux/operations";
import { Box } from "components/Box/Box";
import { Helmet } from 'react-helmet';
import { SuperheroWrapper, ThumbImg, SuperheroImg } from "./Details.styled";
import { SuperheroInfo } from "components/SuperheroInfo/SuperheroInfo";
import { SuperheroGallery } from "components/SuperheroGallery/SuperheroGallery";
import { BackButton } from "components/BackButton/BackButton";
import { Title } from "components/Title/Title";
import DEFAULT_IMAGE from "assets/images/default-image.png";
import toast from 'react-hot-toast';

const SuperheroDetails = () => {
    const { heroId } = useParams();
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const superhero = useSelector(selectSuperheroes);
    const { nickname, images } = superhero;
    const imagePath = images?.length ? images[0].path : DEFAULT_IMAGE;

    useEffect(() => {
        dispatch(fetchSuperheroById(heroId));
        error && toast.error('No response from server!');
    }, [dispatch, error, heroId]);
  
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

                <SuperheroInfo />
            </SuperheroWrapper>

            <Title>Gallery</Title>
            
            <SuperheroGallery images={images} />
        </Box>
    );
};

export default SuperheroDetails;