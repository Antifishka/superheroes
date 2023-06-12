import { useSelector, useDispatch } from "react-redux";
import { updateSuperhero } from "redux/operations";
import { selectSuperheroDetails } from "redux/selectors";
import { GiNinjaHeroicStance } from 'react-icons/gi';
import toast from 'react-hot-toast';
import { Button } from 'components/Button/Button';
import { BoxForm, FieldForm, InputForm, Error } from './SuperheroEditorUpdate.styled';
import { useFormik } from 'formik';
import { basicSchema } from 'helpers/validationSchemas';
import PropTypes from 'prop-types';
import { theme } from 'globalStyles/theme';
import { Box } from "components/Box/Box";
 
const SuperheroEditorUpdate = ({ onUpdate }) => {
    const superhero = useSelector(selectSuperheroDetails);
    const dispatch = useDispatch();
    const heroId = superhero._id

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues: {
            nickname: superhero.nickname,
            real_name: superhero.real_name,
            origin_description: superhero.origin_description,
            superpowers: superhero.superpowers,
            catch_phrase: superhero.catch_phrase,
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

            const formData = new FormData();
            formData.append('nickname', nickname);
            formData.append('real_name', real_name);
            formData.append('origin_description', origin_description);
            formData.append('superpowers', superpowers);
            formData.append('catch_phrase,', catch_phrase);
            for(let i=0; i< images.length; i++){
                formData.append('images', images[i]);
            };

            dispatch(updateSuperhero({ formData, heroId }));
            toast.success('Superhero updated!');

            onUpdate();

            resetForm();
        },
    });

    return (
        <BoxForm onSubmit={handleSubmit}>
            <Box fontSize={theme.fontSizes.l}
                fontWeight={theme.fontWeights.bold}
                as="strong">Enter your changes</Box>
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

            <Button type="submit">Edit superhero
                <GiNinjaHeroicStance size={18} />
            </Button>        
        </BoxForm> 
    );
};
    
export default SuperheroEditorUpdate;

SuperheroEditorUpdate.propsType = {
    onUpdate: PropTypes.func.isRequired,
};