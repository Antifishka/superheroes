import { useState } from 'react';
import { Box } from "components/Box/Box";
import { Text, Button } from "./AddButton.styled";
import { ReactComponent as AddIcon } from 'assets/icons/plus.svg';
import { Modal } from "components/Modal/Modal";
import SuperheroEditor from "components/SuperheroEditor/SuperheroEditor";

export const AddButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(state => !state);

    return (
        <>
            <Box display="flex"
                justifyContent="end"
                alignItems="center"
                gridGap={3}
                mb="16px">
                <Text>Add superhero</Text>
                <Button type="button" onClick={toggleModal} aria-label="Add superhero">
                    <AddIcon />
                </Button>
            </Box>

            {isModalOpen && (
                <Modal onClose={toggleModal}>
                    <SuperheroEditor onAdd={toggleModal} />
                </Modal>)}
        </>    
        
    )
};