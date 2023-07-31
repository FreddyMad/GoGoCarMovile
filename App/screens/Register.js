import React, { useState } from "react"
import { StyleSheet, StatusBar, View, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { NavRegister } from "../components/Nav"
import { LoginInput, LoginInputAlone } from "../components/Input";
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
        paddingVertical: 10
    }
})

export default ({ navigation }) => {
    const [valueTag, setValueTag] = useState("")
    const [valueEmail, setValueEmail] = useState("")
    const [valueName, setValueName] = useState("")
    const [valueLastNP, setValueLastNP] = useState("")
    const [valueLastNM, setValueLastNM] = useState("")
    const [valuePhone, setValuePhone] = useState("")
    const [valuePass, setValuePass] = useState("")
    const [valuePassCon, setValuePassCon] = useState("")

    return (
        <SafeAreaView style={styles.fondo}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.fondo}/>
            <ScrollView>
                <NavRegister onPress={() => navigation.push("Login")}></NavRegister>
                <View style={styles.contenedor}>
                    <LoginInput 
                        label="Matricula" 
                        value={valueTag}
                        placeholder="Matrícula" 
                        onChangeText={text => setValueTag(text)}
                        keyboardType="numeric"
                        secureTextEntry={false}
                    />
                    <LoginInput 
                        label="Correo" 
                        value={valueEmail}
                        placeholder="Correo Electrónico" 
                        onChangeText={text => setValueEmail(text)}
                        keyboardType="default"
                        secureTextEntry={false}
                    />
                    <LoginInput 
                        label="Nombre Completo" 
                        value={valueName}
                        placeholder="Nombre(s)" 
                        onChangeText={text => setValueName(text)}
                        keyboardType="default"
                        secureTextEntry={false}
                    />
                    <LoginInputAlone  
                        value={valueLastNP}
                        placeholder="Apellido Paterno" 
                        onChangeText={text => setValueLastNP(text)}
                        keyboardType="default"
                        secureTextEntry={false}
                    />
                    <LoginInputAlone
                        value={valueLastNM}  
                        placeholder="Apellido Materno" 
                        onChangeText={text => setValueLastNM(text)}
                        keyboardType="default"
                        secureTextEntry={false}
                    />
                    <LoginInput 
                        label="Telefono"
                        value={valuePhone} 
                        placeholder="Número de Teléfono" 
                        onChangeText={text => setValuePhone(text)}
                        keyboardType="numeric"
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
                    <LoginInput 
                        label="Confirmar Contraseña" 
                        valuePassCon
                        placeholder="Confirme su contraseña"
                        onChangeText={text => setValuePassCon(text)}
                        keyboardType="default"
                        secureTextEntry={true} 
                    />
                </View>
                <LoginButton text="Registrarse" onPress={() => alert("Te has registrado!")}/>
            </ScrollView>
        </SafeAreaView>
    )
}