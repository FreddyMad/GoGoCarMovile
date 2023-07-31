import React from 'react'
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, FontAwesome5 } from "@expo/vector-icons"
import NavUser from "../components/NavUser.jsx"
import CardViaje from "../components/CardViaje.jsx"
import colors from "../constants/colors"

const styles = StyleSheet.create({
  contenedorBotones: {
    marginTop: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    fontSize: 8,
    width: 400
  },
  botonAzul: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: colors.azul,
    color: colors.blanco
  },
  botonNaranja: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: colors.naranja,
    color: colors.blanco
  }
})

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor={colors.fondo} />
      <NavUser/>
      <View style={styles.contenedorBotones}>
        <Pressable style={styles.botonAzul}>
          <Entypo name="plus" size={24} color={colors.blanco} />
          <Text style={{color:colors.blanco}}>Crear Viaje</Text>
        </Pressable>
        <Pressable style={styles.botonAzul}>
          <Entypo name="plus" size={24} color={colors.blanco} />
          <Text style={{color:colors.blanco}}>Agregar autos</Text>
        </Pressable>
        <Pressable style={styles.botonNaranja}>
          <FontAwesome5 name="car" size={24} color={colors.blanco} />
          <Text style={{color:colors.blanco, marginLeft: 3}}>Autos</Text>
        </Pressable>
      </View>
      <View style={{marginTop: 10, justifyContent: "center", alignItems: "center"}}>
        <CardViaje/>
      </View>
    </SafeAreaView>
  )
}
