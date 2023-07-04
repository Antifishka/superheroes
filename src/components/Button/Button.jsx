import React from "react";
import { StyledButton } from "./Button.styled";
import PropTypes from 'prop-types';

export const Button = ({ children }) => {

    return <StyledButton>
        {children}
    </StyledButton>
};


Button.propTypes = {
    children: PropTypes.node,
}