import React, { useState } from "react"
import { Alert, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik, useField } from 'formik'
import * as SecureStore from 'expo-secure-store';
import { LoginInput, LoginInputAlone } from "../components/Input";
import { LoginButton } from "../components/LoginButton";
import { NavRegister } from "../components/Nav"
import axios from 'axios';
import Checkbox from 'expo-checkbox';
import colors from "../constants/colors"
import { registerValidationSchema } from "../validationSchemas/register";

axios.defaults.withCredentials = true;

async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}
const styles = StyleSheet.create({
    fondo: {
        backgroundColor: colors.fondo,
        flex: 1
    },
    contenedor: {
        flex: 1,
        justifyContent: "center",
        paddingVertical: 10
    },
    errores: {
        fontSize: 12,
        color: colors.rojo,
        marginStart: 18,
        marginBottom: 4,
    },
    checkboxContainer: {
        marginLeft: 20,
        flexDirection: 'row',
        alignContent: 'center',
    },
    checkboxLabel: {
        paddingHorizontal: 10,
        fontSize: 18,
        color: colors.label
    },
    checkbox: {
        margin: 4,
    }
})
const initialValues = {
    matricula: '',
    name: '',
    email: '',
    apellido_paterno: '',
    apellido_materno: '',
    password: '',
    password_confirmation: '',
    telefono: '',
    es_pasajero: '',
}

const InputSelector = ({ keyComponenteSeleccionado = 'title' }) => { // Para elejir entre input con o sin label *doesn't work
    const tipoInput = {
        'title': <LoginInput />,
        'alone': <LoginInputAlone />
    }

    const componenteSeleccionado = tipoInput[keyComponenteSeleccionado];
    return (
        <>
            {componenteSeleccionado ? (
                componenteSeleccionado
            ) : (
                <Text>Component no encontrado</Text>
            )}
        </>
    );
}

const FormikCheckValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)
    return (
        <View style={styles.checkboxContainer}>
            <Text style={styles.checkboxLabel}>{props.label}</Text>
            <Checkbox style={styles.checkbox}
                value={field.value}
                onValueChange={value => helpers.setValue(value)}
                {...props}
            />
        </View>
    )
}
const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)

    return (
        <View>
            <LoginInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            <Text style={styles.errores}>
                {meta.error}
            </Text>
        </View>
    )
}

const Register = ({ navigation }) => {
    const handleSubmit = (values) => {
        console.log(values)
        axios.post(`http://192.168.0.6:8000/api/register`, {
            deviceName: 'Android', // Hay un paquete para configurar esta información
            email: values.email,
            password: values.password,
            name: values.name,
            matricula: values.matricula,
            apellido_paterno: values.apellido_paterno,
            apellido_materno: values.apellido_materno,
            telefono: values.telefono,
            es_pasajero: values.es_pasajero
        }).then(response => {
            if(response.data) {
                const authData = response.data
                if(authData.status) {
                    //Guardar datos para su uso posterior 
                    save('token', JSON.stringify(authData.token))
                    save('user_id', JSON.stringify(authData.user.id))
                    Alert.alert('Registro exitoso', `Bienvenido/a ${authData.user.name}`)
                    navigation.navigate('Menu')
                } else {
                    Alert.alert('Error', 'Campos no validados'); // usar response.messages [array] para el mensaje
                }
            } else {
                Alert.alert('Error', 'No se pudo completar la petición');
            }
        }).catch(error => {
            console.log('Error:', error?.response.data ?? '500')
            Alert.alert('Error', 'Error de servidor');
        });
    }

    return (
        <Formik
            validationSchema={registerValidationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit }) => {
                return (
                    <SafeAreaView style={styles.fondo}>
                        <StatusBar barStyle="dark-content" backgroundColor={colors.fondo} />
                        <ScrollView>
                            <NavRegister onPress={() => navigation.push("Login")}></NavRegister>
                            <View style={styles.contenedor}>
                                <FormikInputValue
                                    name="matricula"
                                    label="Matrícula"
                                    placeholder="Ingrese su matrícula"
                                    keyboardType="numeric"
                                />
                                <FormikInputValue
                                    name="email"
                                    label="Correo"
                                    placeholder="Ingrese su correo"
                                />
                                <FormikInputValue
                                    name="name"
                                    label="Nombre completo"
                                    placeholder="Ingrese su nombre(s)"
                                />
                                <FormikInputValue
                                    name="apellido_paterno"
                                    placeholder="Ingrese su apellido paterno"
                                    type="alone"
                                />
                                <FormikInputValue
                                    name="apellido_materno"
                                    placeholder="Ingrese su apellido materno"
                                    type="alone"
                                />
                                <FormikInputValue
                                    name="telefono"
                                    label="Teléfono"
                                    placeholder="Ingrese su número de teléfono"
                                    keyboardType="numeric"
                                />
                                <FormikInputValue
                                    name="password"
                                    label="Contraseña"
                                    placeholder="Ingrese su contraseña"
                                    secureTextEntry
                                />
                                <FormikInputValue
                                    name="password_confirmation"
                                    label="Confirmar contraseña"
                                    placeholder="Ingrese su contraseña"
                                    secureTextEntry
                                />
                                <FormikCheckValue
                                    label="¿Usará la app como pasajero?"
                                    name="es_pasajero"
                                />
                            </View>
                            <LoginButton text="Registrarse" onPress={handleSubmit} />
                        </ScrollView>
                    </SafeAreaView>
                )
            }}
        </Formik>
    )
}

export default Register;