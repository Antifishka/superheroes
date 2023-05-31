import { useSelector, useDispatch } from "react-redux";
import { addSuperhero } from "redux/operations";
import { selectSuperheroes } from "redux/selectors";
import { BsPersonPlus } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { BoxForm, FieldForm, InputForm, Error } from './SuperheroEditor.styled';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { theme } from 'globalStyles/theme';
import { Box } from "components/Box/Box";

const basicSchema = yup.object().shape({
    nickname: yup
        .string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
        .required('Nickname is required'),
    real_name: yup
        .string()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
});
 
const SuperheroEditor = ({onAdd}) => {
    const superheroes = useSelector(selectSuperheroes);
    const dispatch = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            nickname: '',
            real_name: '',
        },
        validationSchema: basicSchema,
        onSubmit: ({ nickname, real_name }, { resetForm }) => {
            console.log(nickname, real_name);

            const normalizedName = nickname.toLowerCase();

            const checkByNickname = superheroes.find(hero =>
                hero.nickname.toLowerCase() === normalizedName);

            if (checkByNickname) {
                return toast(`${nickname} is already in contacts.`, { icon: 'ℹ️'});
            };

            const newSuperhero = {
                nickname,
                real_name,
            };

            dispatch(addSuperhero(newSuperhero));
            toast.success('Superhero added!');

            onAdd();

            resetForm();
        },
    });

    return (
        <BoxForm onSubmit={handleSubmit}>
            <Box fontSize={theme.fontSizes.l}
                fontWeight={theme.fontWeights.bold}
                as="strong">Create new superhero</Box>
            <FieldForm>Nickname
                <InputForm
                    type="text"
                    name="nickname"
                    value={values.nickname}
                    placeholder="Superman"
                    onChange={handleChange}
                    onBlur={handleBlur} /> 
                {errors.nickname && touched.nickname && <Error>{errors.nickname}</Error>}
            </FieldForm>
            <FieldForm>Real name
                <InputForm
                    type="text"
                    name="real_name"
                    value={values.real_name}
                    placeholder="Clark Kent"
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {errors.real_name && touched.real_name &&<Error>{errors.real_name}</Error>}
            </FieldForm>    
            <button type="submit">Add superhero
                <BsPersonPlus />
            </button>        
        </BoxForm> 
    );
};
    
export default SuperheroEditor;

SuperheroEditor.propsType = {
  onAdd: PropTypes.func.isRequired,
};