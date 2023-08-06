import * as yup from 'yup'

export const registerValidationSchema = yup.object().shape({
    matricula: yup 
        .string()
        .matches(/^[0-9]+$/, "Sólo se permiten números")
        .min(9, 'Deben ser exactamente 9 dígitos')
        .max(9, 'Deben ser exactamente 9 dígitos')
        .required('¡La matrícula es un campo necesario!'),
    name: yup
        .string()
        .min(2, 'Mínimo 2 caracteres')
        .max(50, 'Máximo 50 caracteres')
        .required('¡El nombre es un campo necesario!'),
    email: yup
        .string()
        .email('Formato inválido de email')
        .required('¡El correo es un campo necesario!'),
    apellido_paterno: yup
        .string()
        .min(3, 'Mínimo 3 caracteres')
        .max(50, 'Máximo 50 caracteres')
        .required('¡El apellido paterno es un campo necesario!'),
    apellido_materno: yup
        .string()
        .min(3, 'Mínimo 3 caracteres')
        .max(50, 'Máximo 50 caracteres')
        .required('¡El apellido materno es un campo necesario!'),
    password: yup
        .string()
        .min(8, 'Mínimo de 8 caracteres')
        .max(32, 'Máximo de 32 caracteres')
        .required('¡La contraseña es un campo necesario!'),
    password_confirmation: yup
        .string()
        .min(8, 'Mínimo de 8 caracteres')
        .max(32, 'Máximo de 32 caracteres')
        .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
        .required('¡Es necesario que confirme su contraseña!'),
    telefono: yup
        .string()
        .matches(/^[0-9]+$/, "Sólo se permiten números")
        .min(10, 'Deben ser exactamente 10 dígitos')
        .max(10, 'Deben ser exactamente 10 dígitos')
        .required('El número de teléfono es un campo necesario'),
    es_pasajero: yup   
        .bool()
        .required()
})