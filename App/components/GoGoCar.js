import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Entypo, FontAwesome5 } from "@expo/vector-icons"
import colors from "../constants/colors"

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colors.fondo,
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: 5
    },
    icon: {

    }
})

export const GoGoCar =() => (
    <View style={styles.row}>
        <FontAwesome5 name="car-side" size={24} color={colors.verde}/>
        <Text style={styles.texto}>GoGoCar</Text>
    </View>
)