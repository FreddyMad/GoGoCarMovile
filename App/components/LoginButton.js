import React from "react"
import { TouchableOpacity, StyleSheet, Text } from "react-native"

import colors from "../constants/colors"

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: colors.verde
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.blanco,
  },
})

export const LoginButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}