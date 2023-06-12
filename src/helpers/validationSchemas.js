import * as yup from 'yup';

export const basicSchema = yup.object().shape({
    nickname: yup
        .string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Only letters")
        .trim()
        .required('Nickname is required'),
    real_name: yup
        .string()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Only letters")
        .trim()
});