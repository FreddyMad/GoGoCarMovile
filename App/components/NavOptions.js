import React from "react"
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"

import colors from "../constants/colors"

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 27,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.fondo,
  },
  rowActive: {
    paddingRight: 11,
    paddingLeft: 11,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.fondo,
    borderLeftWidth: 5,
    borderLeftColor: colors.verde
  },
  title: {
    color: colors.negro,
    fontSize: 16,
    fontWeight: "bold"
  },
  titleActive: {
    color: colors.verde,
    fontSize: 16,
    fontWeight: "bold"
  },
})

export const Option = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.row}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
)

export const OptionSelected = ({title}) => (
    <View style={styles.rowActive}>
        <Text style={styles.titleActive}>{title}</Text>
    </View>
)