import * as yup from 'yup'

export const crearAutoValidationSchema = yup.object().shape({
    placa: yup
        .string()
        .min(6, 'Debe tener mínimo 6 caracteres')
        .max(7, 'Debe tener máximo 7 caracteres')
        .required('¡Las placas son un campo necesario!'),
    marca_id: yup
        .number()
        .required('¡La marca es un campo requerido!'),
    modelo_id: yup
        .number()
        .required('¡El modelo es un campo requerido!'),
    capacidad: yup
        .number('La capacidad debe ser un número entero')
        .min(1, 'Mínimo 1 asiento')
        .max(10, 'Máximo 10 asientos')
        .required('¡La capacidad es un campo necesario!'),
    no_seguro: yup 
        .string()
        .matches(/^[0-9]+$/, "Sólo se permiten números")
        .min(8, 'Mínimo 8 dígitos')
        .max(16, 'Máximo 16 dígitos')
        .required('¡El número de seguro del auto es requerido!'),
    verificado: yup
        .boolean('No es un valor bool')
        .required('Campo requerido'),
    activo: yup 
        .boolean('No es un valor bool')
        .test('conditional', 'Primero verificar', function (activo) {
            const validado = this.resolve(yup.ref('verificado'));
            if (validado === false && activo === true) {
              return false; 
            }
            return true;
        })
})