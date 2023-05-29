import { Box } from "components/Box/Box";
import { Text, Button } from "./AddButton.styled";
import { ReactComponent as AddIcon } from 'assets/icons/plus.svg';
// import PropTypes from 'prop-types';

export const AddButton = () => {
    return (
        <Box display="flex"
            justifyContent="end"
            alignItems="center"
            gridGap={3}
            mb="16px">
            <Text>Add superhero</Text>
            <Button>
                <AddIcon />
            </Button>
        </Box>
        
    )
};

// BackButton.propTypes = {
//     children: PropTypes.node,
// }