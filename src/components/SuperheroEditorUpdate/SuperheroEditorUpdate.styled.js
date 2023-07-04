import styled from "styled-components";
import { theme } from 'globalStyles/theme';

export const BoxForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[4]}px;

    text-align: center;
`;

export const FieldForm = styled.label`
    position: relative;   
    width: 100%;
    text-align: left;
    font-size: ${p => theme.fontSizes.s};

    transition: ${p => p.theme.transition.main};

    :focus-within{
        color: ${p => p.theme.colors.accent};
    }
`;

export const InputForm = styled.input`
    margin-top: ${p => p.theme.space[1]}px; 
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
    width: 100%;
    outline: transparent;
    border: ${theme.borders.input};
    border-radius: ${p => p.theme.radii.normal};

    font: inherit;
    font-size: ${p => theme.fontSizes.m};

    background-color: #fff;

    transition: ${p => p.theme.transition.main};

    ::placeholder {
        font-size: ${p => theme.fontSizes.s};
    }

    :focus{
        border-color: ${theme.colors.accent};
    }
`;

export const Error = styled.p`
    color: ${p => p.theme.colors.error};
`;