import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import colors from "../constants/colors"

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingBottom: 7,
        justifyContent: "space-between",
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

const NavUser = ({user, token}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerUser}>
                <FontAwesome name="user" size={24} color={colors.negro} style={{ marginRight: 6 }}/>
                <Text>{user?.name ?? 'user'}</Text>
            </View>
            <Pressable>
                <FontAwesome name="power-off" size={24} color={colors.rojo} />
            </Pressable>
        </View>
    )
}
export default NavUser