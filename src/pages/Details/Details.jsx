import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSuperheroDetails, selectError } from "redux/selectors";
import { fetchSuperheroById } from "redux/operations";
import { Box } from "components/Box/Box";
import { Helmet } from 'react-helmet';
import { SuperheroWrapper, ThumbImg, SuperheroImg } from "./Details.styled";
import { SuperheroInfo } from "components/SuperheroInfo/SuperheroInfo";
import { SuperheroGallery } from "components/SuperheroGallery/SuperheroGallery";
import { BackButton } from "components/BackButton/BackButton";
import { EditButton } from "components/EditButton/EditButton";
import { Title } from "components/Title/Title";
import DEFAULT_IMAGE from "assets/images/default-image.png";
import toast from 'react-hot-toast';

const SuperheroDetails = () => {
    const { heroId } = useParams();
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const superhero = useSelector(selectSuperheroDetails);
    
    const { nickname, images } = superhero;

    const imagePath = images?.length ? images[0].path : DEFAULT_IMAGE;

    useEffect(() => {
        dispatch(fetchSuperheroById(heroId));
        error && toast.error('No response from server!');
    }, [dispatch, error, heroId]);

    // Tasks from interviev
    // 1
    // const fruitsArray = ["Banana", "apple", "pear", "cocos", "strawberry"];
    // const fruitsLengthArray = fruitsArray.map(fruit => fruit.length);
    // console.log(fruitsLengthArray, "fruits length array");

    // 2
    // const animals = ["dog", "pig", "cow"];
    // for (const animal of animals) {
    //     setTimeout(() => {
    //         console.log(animal);
    //     });
    // };

    // 3
    // 89  96  73  83  57  70  41  57  ...
    //   +7 -23 +10 -26 +13 -29 +16 

    return (
        <Box p="20px 0 70px" 
            minHeight="100%"
            as="main">
            <Helmet>
                <title>Details</title>
            </Helmet>

            <Box display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb="8px" >
                <BackButton>Go back</BackButton>
                <EditButton />
            </Box>
            

            <SuperheroWrapper> 
                <ThumbImg>
                    <SuperheroImg src={imagePath}
                        alt={nickname}
                        width="300" />
                </ThumbImg>

                <SuperheroInfo />
            </SuperheroWrapper>

            <Title>Gallery</Title>
            
            <SuperheroGallery />
        </Box>
    );
};

export default SuperheroDetails;