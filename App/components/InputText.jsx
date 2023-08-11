import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import colors from "../constants/colors"

const InputText = ({ textLabel, error,  ...props}) => {
  return (
    <TextInput style={styles.input} 
      {...props}>
    </TextInput>
  )
}
const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: colors.gris,
    paddingHorizontal: 12,
    paddingVertical: 3,
  }
})
export default InputText