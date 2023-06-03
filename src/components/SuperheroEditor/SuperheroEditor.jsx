import { useSelector, useDispatch } from "react-redux";
import { addSuperhero } from "redux/operations";
import { selectSuperheroes } from "redux/selectors";
import { GiNinjaHeroicStance } from 'react-icons/gi';
import toast from 'react-hot-toast';
import { Button } from 'components/Button/Button';
import { BoxForm, FieldForm, InputForm, Error } from './SuperheroEditor.styled';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { theme } from 'globalStyles/theme';
import { Box } from "components/Box/Box";

const basicSchema = yup.object().shape({
    nickname: yup
        .string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Only letters")
        .required('Nickname is required'),
    real_name: yup
        .string()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Only letters")
});
 
const SuperheroEditor = ({ onAdd }) => {
    const superheroes = useSelector(selectSuperheroes);
    const dispatch = useDispatch();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues: {
            nickname: '',
            real_name: '',
            origin_description: '',
            superpowers: '',
            catch_phrase: '',
            images: [],

        },
        validationSchema: basicSchema,
        onSubmit: ({
            nickname,
            real_name,
            origin_description,
            superpowers,
            catch_phrase,
            images,
        }, { resetForm }) => {
            
            const normalizedName = nickname.toLowerCase();

            const checkByNickname = superheroes.find(hero =>
                hero.nickname.toLowerCase() === normalizedName);

            if (checkByNickname) {
                return toast(`${nickname} is already in superheroes.`, { icon: 'ℹ️'});
            };

            const formData = new FormData();
            formData.append('id', nanoid());
            formData.append('nickname', nickname);
            formData.append('real_name', real_name);
            formData.append('origin_description', origin_description);
            formData.append('superpowers', superpowers);
            formData.append('catch_phrase,', catch_phrase);
            for(let i=0; i< images.length; i++){
                formData.append('images', images[i]);
            };
            console.log(formData, "formData");

            dispatch(addSuperhero(formData));
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

            <FieldForm>Description
                <InputForm
                    type="text"
                    name="origin_description"
                    value={values.origin_description}
                    onChange={handleChange}/>
            </FieldForm>

            <FieldForm>Superpowers
                <InputForm
                    type="text"
                    name="superpowers"
                    value={values.superpowers}
                    onChange={handleChange}/>
            </FieldForm>

            <FieldForm>Catchphrase
                <InputForm
                    type="text"
                    name="catch_phrase"
                    value={values.catch_phrase}
                    onChange={handleChange}/>
            </FieldForm>

            <FieldForm>Images
                <InputForm
                    type="file"
                    name="images"
                    multiple 
                    onChange={e => setFieldValue('images', e.currentTarget.files)}
                    />
            </FieldForm>
            
            <Button type="submit">Add superhero
                <GiNinjaHeroicStance size={18} />
            </Button>        
        </BoxForm> 
    );
};
    
export default SuperheroEditor;

SuperheroEditor.propsType = {
  onAdd: PropTypes.func.isRequired,
};