import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from "react-native"
import axios from 'axios';
import { Entypo, FontAwesome5 } from "@expo/vector-icons"
import Layout from '../components/layouts/Layout.jsx';
import colors from "../constants/colors"

import CardSolicitud from '../components/CardSolicitud.jsx';
import CardMiSolicitud from '../components/CardMiSolicitud.jsx';
import DeleteSolicitud from './modals/Solicitudes/Delete.jsx';

const styles = StyleSheet.create({
  contenedorUno: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    fontSize: 8,
  },
  botonMisSolicitudes: {
    gap: 6,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 3,
    backgroundColor: colors.azul,
    color: colors.blanco
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
  },
  botonTodas: {
    gap: 6,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    elevation: 3,
    backgroundColor: colors.gris,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
})

const Solicitudes = ({ navigation }) => {
  const [marcas, setMarcas] = useState(null)
  const [modalCreateViajeVisible, setModalCreateViajeVisible] = useState(false);
  const [modalCreateAutoVisible, setModalCreateAutoVisible] = useState(false);
  const closeCreateAutoModal = () => {
    setModalCreateAutoVisible(false)
  }
  const closeCreateViajeModal = () => {
    setModalCreateViajeVisible(false)
  }

  return (
    <Layout>
      <View style={styles.contenedorUno}>
        <Pressable style={styles.botonTodas}>
          <FontAwesome5 name="list" size={24} color={colors.blanco} />
          <Text style={{ color: colors.blanco }}>Todas</Text>
        </Pressable>
        <Pressable style={styles.botonMisSolicitudes}>
          <FontAwesome5 name="list" size={24} color={colors.blanco} />
          <Text style={{ color: colors.blanco }}>Mis solicitudes</Text>
        </Pressable>
      </View>
      
      <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center", rowGap: 10 }}>
        {/* <CardSolicitud/> */}
        <CardMiSolicitud/>
      </View>
      {/* <DeleteSolicitud /> */}
    </Layout>
  )
}
export default Solicitudes;