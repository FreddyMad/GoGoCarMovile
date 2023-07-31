import React,  { useState } from "react"
import { Alert, StyleSheet, StatusBar, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { NavLogin } from "../components/Nav"
import { LoginInput } from "../components/Input";
import { LoginButton } from "../components/LoginButton";
import colors from "../constants/colors"

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: colors.fondo,
        flex: 1
    },
    contenedor: {
        flex: 1,
        justifyContent: "center",
    }
})

const loginButton = (values) => {
    Alert.alert("Éxito", "Has iniciado sesión!")
}
export default ({ navigation }) => {
    const [valueEmail, setValueEmail] = useState("")
    const [valuePass, setValuePass] = useState("")

    return (
        <SafeAreaView style={styles.fondo}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.fondo}/>
            <NavLogin onPress={() => navigation.push("Register")}></NavLogin>
            <View style={styles.contenedor}>
                <LoginInput 
                    label="Correo" 
                    value={valueEmail}
                    placeholder="Ingrese su correo" 
                    onChangeText={text => setValueEmail(text)}
                    keyboardType="default"
                    secureTextEntry={false}
                />
                <LoginInput 
                    label="Contraseña" 
                    value={valuePass}
                    placeholder="Ingrese su contraseña"
                    onChangeText={text => setValuePass(text)}
                    keyboardType="default"
                    secureTextEntry={true} 
                />
            </View>
            <LoginButton text="Ingresar" onPress={() => navigation.navigate('Menu')}/>
        </SafeAreaView>
    )
}