import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { SuperheroCard, SuperheroImg, SuperheroInfo, SuperheroTitle } from "./SuperheroItem.styled";
import { PlACEHOLDER_URL } from "constants/constants";
import PropTypes from 'prop-types';

export const SuperheroItem = ({id, nickname, images}) => {
    const { pathname, search } = useLocation();
    const fromPage = `${pathname}${search}`;

    console.log(images, "images")

    return (
        <SuperheroCard>
            <Link to={`/${id}`} state={{from: fromPage}}>
                <SuperheroImg
                    src={images[0]?.path || PlACEHOLDER_URL}
                    alt={nickname} />
                <SuperheroInfo>
                    <SuperheroTitle>{nickname}</SuperheroTitle>
                </SuperheroInfo>
            </Link>
        </SuperheroCard>
    );
};

SuperheroItem.propTypes = {
    nickname: PropTypes.string.isRequired,
};