import { GalleryList, GalleryItem, GalleryImg } from "./SuperheroGallery.styled";
import { Box } from "components/Box/Box";
import { PlACEHOLDER_URL } from "constants/constants";
import PropTypes from 'prop-types';

export const SuperheroGallery = ({ images }) => {
    return (
    <>
        { images?.length > 0
            ? ( <GalleryList>
                    {images?.map(({ filename, path, originalname}) => (
                        <GalleryItem key={filename} >
                            <GalleryImg
                                src={path || PlACEHOLDER_URL}
                                alt={originalname} />
                        </GalleryItem>))}   
                </GalleryList>)
                : (<Box mb="32px"
                    textAlign="center"
                    fontSize="16px"
                    as="p" >
                    There are not pictures of superheroes
                </Box>)
        }
    </>        
    );
};

SuperheroGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
};