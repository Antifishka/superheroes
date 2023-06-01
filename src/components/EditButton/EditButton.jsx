import { useState } from 'react';
import { Box } from "components/Box/Box";
import { Text, Button, EditIcon } from "./EditButton.styled";
import { Modal } from "components/Modal/Modal";
import SuperheroEditorUpdate from "components/SuperheroEditorUpdate/SuperheroEditorUpdate";

export const EditButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(state => !state);

    return (
        <>
            <Box display="flex"
                justifyContent="end"
                alignItems="center"
                gridGap={3}>
                <Text>Edit info</Text>
                <Button type="button" onClick={toggleModal} aria-label="Add superhero">
                    <EditIcon />
                </Button>
            </Box>

            {isModalOpen && (
                <Modal onClose={toggleModal}>
                    <SuperheroEditorUpdate onUpdate={toggleModal} />
                </Modal>)}
        </>    
        
    )
};