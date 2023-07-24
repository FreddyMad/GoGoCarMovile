import React from "react"
import { StyleSheet, Text, View, TextInput } from "react-native"

import colors from "../constants/colors"

const styles = StyleSheet.create({
    label:{
        color: colors.negro,
        fontSize: 20,
        fontWeight: "bold"
    },
    input: {
        backgroundColor: colors.blanco,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: "row",
        borderRadius: 5,
        borderLeftWidth: 5,
        borderLeftColor: colors.verde
    },
    text: {
        flex: 1,
        padding: 10,
        fontSize: 18,
        color: colors.letra
    },
    span: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.rojo,
        marginLeft: 20, 
        paddingRight: 10
    },
    containerLabel: {
        flexDirection: "row",
        alignItems: "center"
    }
})

export const LoginInput = ({label, value, placeholder, onChangeText, keyboardType, secureTextEntry}) => {
    return (
        <View>
            <View style={styles.containerLabel}>
                <Text style={styles.span}>*</Text>
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.input}>
                <TextInput 
                    style={styles.text}
                    value={value} 
                    placeholder={placeholder} 
                    onChangeText={onChangeText} 
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                />
            </View>
        </View>
    );
};

export const LoginInputAlone = ({ placeholder, value, onChangeText, keyboardType, secureTextEntry}) => {
    return (
        <View style={styles.input}>
            <TextInput 
                style={styles.text} 
                value={value}
                placeholder={placeholder} 
                onChangeText={onChangeText} 
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};