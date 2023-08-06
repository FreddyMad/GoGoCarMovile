import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Formato inválido de email')
        .required('El correo es un campo necesario!'),
    password: yup
        .string()
        .min(8, 'La contraseña debe ser mínimo de 8 caracteres!')
        .max(1000, 'La contraseña debe ser máximo de 1000 caracteres!')
        .required('La contraseña es un campo necesario!')
})