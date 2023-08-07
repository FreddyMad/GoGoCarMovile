import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from "react-native"
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { Entypo, FontAwesome5 } from "@expo/vector-icons"
import Layout from '../components/layouts/Layout.jsx';
import CardViaje from "../components/CardViaje.jsx"
import colors from "../constants/colors"

import CreateAuto from "./modals/Autos/Create.jsx"
import CreateViaje from "./modals/Viajes/Create.jsx"

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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
})

/* const [dataAutos, setDataAutos] = useState(null)

const fetchData = async () => {
  try {
    // Get data from SecureStore 
    const userID = await SecureStore.getItemAsync('user_id');
    const token = await SecureStore.getItemAsync('token');
    // Make Axios request using the obtained token
    const response = await axios.get(`http://192.168.0.9:8000/api/autos/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    setDataAutos(response.data);
  } catch (error) {
    console.error('Error fetching autos data:', error);
  }
}; */

const Viajes = ({ navigation }) => {
  const [marcas, setMarcas] = useState(null)
  const [modalCreateViajeVisible, setModalCreateViajeVisible] = useState(false);
  const [modalCreateAutoVisible, setModalCreateAutoVisible] = useState(false);
  const closeCreateAutoModal = () => {
    setModalCreateAutoVisible(false)
  }
  const closeCreateViajeModal = () => {
    setModalCreateViajeVisible(false)
  }

  const fetchMarcas = async () => {
    try {
      const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
      setMarcas(response.data.Results)
    } catch (error){
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMarcas()
  }, [])

  return (
    <Layout>
      <View style={styles.contenedorBotones}>
        <Pressable style={styles.botonAzul} onPress={() => setModalCreateViajeVisible(true)}>
          <Entypo name="plus" size={24} color={colors.blanco} />
          <Text style={{ color: colors.blanco }}>Crear Viaje</Text>
        </Pressable>
        <Pressable style={styles.botonAzul} onPress={() => setModalCreateAutoVisible(true)}>
          <Entypo name="plus" size={24} color={colors.blanco} />
          <Text style={{ color: colors.blanco }}>Agregar autos</Text>
        </Pressable>
        <Pressable style={styles.botonNaranja}>
          <FontAwesome5 name="car" size={24} color={colors.blanco} />
          <Text style={{ color: colors.blanco, marginLeft: 3 }}>Autos</Text>
        </Pressable>
      </View>
      <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center" }}>
        <CardViaje key={1} />
      </View>
      <CreateViaje modalOpen={modalCreateViajeVisible} onClose={closeCreateViajeModal} />
      <CreateAuto modalOpen={modalCreateAutoVisible} onClose={closeCreateAutoModal} marcas={marcas} />
    </Layout>
  )
}
export default Viajes;