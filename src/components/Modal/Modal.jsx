import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                console.log('Нажали ESC, нужно закрыть модалку');

                onClose();
            };
        };
        
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            };
    }, [onClose]);

    const handleBackdropClick = e => {
        console.log('Кликнули в бекдроп');

        if (e.currentTarget === e.target) {
            onClose();
        }
    }

    return createPortal( 
        <Box position="fixed"
            top={0}
            left={0}
            zIndex="10"
            width="100vw"
            height="100vh"
            bg="rgba(0, 0, 0, 0.5)"
            onClick={handleBackdropClick}>
            <Content>{children}</Content>
        </Box>,
        modalRoot,
    )
}

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};