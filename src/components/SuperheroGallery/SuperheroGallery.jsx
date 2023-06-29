import { useSelector } from "react-redux";
import { selectSuperheroDetails } from "redux/selectors";
import { GalleryList, GalleryItem, GalleryImg } from "./SuperheroGallery.styled";
import { Box } from "components/Box/Box";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper styles
import "swiper/css/navigation"; // Import Swiper styles
import { Navigation, Pagination } from "swiper"; // import required modules
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import { down } from 'styled-breakpoints';

export const SuperheroGallery = () => {
    const superhero = useSelector(selectSuperheroDetails);
    const { images } = superhero;
    
    const onlyMobile = useBreakpoint(down('mobile'));
    const onlyTablet = useBreakpoint(down('tablet'));
    const onlyDesktop = useBreakpoint(down('desktop'));
    const onlyPc = useBreakpoint(down('pc'));

    return ( 
    <>
        { images?.length > 0
            ? (<GalleryList
                slidesPerView={onlyMobile ? 1 : (onlyTablet ? 2 : (onlyDesktop ? 3 : (onlyPc ? 4 : 5)))}
                spaceBetween={16}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[ Navigation, Pagination ]} >
                {images?.map(({ filename, path, originalname}) => (
                     <GalleryItem key={filename} >
                        <GalleryImg src={path}
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