import React from "react";
import { Box } from "components/Box/Box";
import { theme } from "globalStyles/theme";
import PropTypes from 'prop-types';

export const Title = ({ children }) => {
    return <Box
        pt="16px"
        mb="16px"
        textAlign="center"
        fontWeight={theme.fontWeights.bold}
        color={theme.colors.mainText}
        as="h2">
        {children}
    </Box>
};

Title.propTypes = {
    children: PropTypes.node,
}