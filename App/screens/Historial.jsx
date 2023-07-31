import React from 'react'
import { StatusBar, StyleSheet, Text, View } from "react-native"
import colors from "../constants/colors"
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  contenedorBotones: {
    marginTop: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.fondo,
  }
})

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor={colors.fondo} />
      <View style={styles.contenedorBotones}>
        <Text>Historial</Text>
      </View>
    </SafeAreaView>
  )
}