import React from "react";
import { useDispatch } from "react-redux";
import { deleteSuperhero } from "redux/operations";
import { useLocation, Link } from 'react-router-dom';
import { SuperheroCard, DeleteBtn, DeleteIcon, SuperheroImg, SuperheroInfo, SuperheroTitle } from "./SuperheroItem.styled";
import { PlACEHOLDER_URL } from "constants/constants";
import PropTypes from 'prop-types';

export const SuperheroItem = ({id, nickname, images}) => {
    const { pathname, search } = useLocation();
    const fromPage = `${pathname}${search}`;
    const dispatch = useDispatch();
  
    const handleDelete = () => {
        dispatch(deleteSuperhero(id));
    };

    const imagePath = images?.length ? images[0].path : PlACEHOLDER_URL;

    return (
        <SuperheroCard>
            <DeleteBtn type="button" onClick={handleDelete}>
                <DeleteIcon />
            </DeleteBtn>

            <Link to={`/${id}`} state={{from: fromPage}}>
                <SuperheroImg
                    src={imagePath}
                    alt={nickname} />
                
                <SuperheroInfo>
                    <SuperheroTitle>{nickname}</SuperheroTitle>
                </SuperheroInfo>
            </Link>
        </SuperheroCard>
    );
};

SuperheroItem.propTypes = {
    id: PropTypes.string,
    nickname: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object),
};