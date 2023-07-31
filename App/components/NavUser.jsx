import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Entypo, FontAwesome } from "@expo/vector-icons"
import colors from "../constants/colors"

const styles = StyleSheet.create({
    container: {
        paddingTop: 7,
        paddingBottom: 3,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colors.fondo,
    },
    containerUser: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colors.fondo,
    }
})

const NavUser = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerUser}>
                <FontAwesome name="user" size={24} color={colors.negro} style={{ marginRight: 6 }}/>
                <Text>{props?.name ?? 'User'}</Text>
            </View>
            <FontAwesome name="power-off" size={24} color={colors.rojo} />
        </View>
    )
}
export default NavUser