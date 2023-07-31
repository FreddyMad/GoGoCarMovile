import React from "react"
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"
import { Entypo } from "@expo/vector-icons"
import colors from "../constants/colors"
import { GoGoCar } from "./GoGoCar"
import { Option, OptionSelected } from "./NavOptions"

const styles = StyleSheet.create({
    ContainerOption: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colors.fondo,
    }
})

export const NavLogin =({ onPress }) => (
    <View>
        <GoGoCar />
        <View style={styles.ContainerOption}>
            <OptionSelected title="Iniciar Sesión"/>
            <Option title="Regístrate" onPress={onPress}/>
        </View>
    </View>
)

export const NavRegister =({ onPress }) => (
    <View>
        <GoGoCar />
        <View style={styles.ContainerOption}>
            <Option title="Iniciar Sesión" onPress={onPress}/>
            <OptionSelected title="Regístrate"/>
        </View>
    </View>
)