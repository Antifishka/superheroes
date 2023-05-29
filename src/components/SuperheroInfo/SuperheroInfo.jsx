import { Box } from "components/Box/Box";
import { SuperheroTitle } from "./SuperheroInfo.styled";
import PropTypes from 'prop-types';

export const SuperheroInfo = ({nickname, realName}) => {
    return (
        <Box>
            <SuperheroTitle>{nickname}</SuperheroTitle>
                <p>Real name: {realName}</p>
        </Box>
    );
};

SuperheroInfo.propTypes = {
    nickname: PropTypes.string.isRequired,
    // nickname: PropTypes.string.isRequired,
    // images: PropTypes.arrayOf(PropTypes.object).isRequired,
};