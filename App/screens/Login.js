import React, { useState } from "react"
import { Alert, StyleSheet, StatusBar, Text, View } from "react-native"
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik, useField } from 'formik'
import { NavLogin } from "../components/Nav"
import { LoginInput } from "../components/Input";
import { LoginButton } from "../components/LoginButton";
import { loginValidationSchema } from '../validationSchemas/login.js'
import colors from "../constants/colors"

axios.defaults.withCredentials = true;

/* Método guardar elementos */
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
    },
    errores: {
        fontSize: 12,
        color: colors.rojo,
        marginStart: 18,
        marginBottom: 4,
    }
})

const initialValues = {
    email: '',
    password: ''
}

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)
    return (
        <>
            <LoginInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            <Text style={styles.errores}>
                {meta.error}
            </Text>
        </>
    )
}

export default function LogIn({ navigation }) {
    const handleSubmit = (values) => {
        axios.post(`http://192.168.0.6:8000/api/login`, {
			deviceName: 'Android',
			email: values.email,
			password: values.password
		}).then(response => {
            if(response?.data) {
                const authData = response.data
                if(authData.status) {
                    /* Guardar datos para su uso posterior */ 
                    save('token', JSON.stringify(authData.token))
                    save('user_id', JSON.stringify(authData.user.id))
                    Alert.alert('Éxito', 'Bienvenido')
                    navigation.navigate('Menu')
                } else {
                    Alert.alert('Error', authData.message?.email[0] ?? authData.messages.password);    
                }
            } else {
                Alert.alert('Error', 'Campos no válidos');
            }
		}).catch(error => {
			console.log('Error:', error?.response.data ?? '500')
			Alert.alert('Error', 'Error de servidor');
		});
    }

    return (
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit }) => {
                return (
                    <SafeAreaView style={styles.fondo}>
                        <StatusBar barStyle="dark-content" backgroundColor={colors.fondo}/>
                        <NavLogin onPress={() => navigation.push("Register")}></NavLogin>
                        <View style={styles.contenedor}>
                            <FormikInputValue
                                name="email"
                                label="Correo"
                                placeholder="Ingrese su correo"
                            />
                            <FormikInputValue
                                name="password"
                                label="Contraseña"
                                placeholder="Ingrese su contraseña"
                                secureTextEntry
                            />
                        </View>
                        <LoginButton text="Ingresar" onPress={handleSubmit} />
                    </SafeAreaView>
                )
            }}
        </Formik>
    )
}