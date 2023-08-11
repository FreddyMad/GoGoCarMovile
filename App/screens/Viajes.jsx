import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from "react-native"
import axios from 'axios';
import { Entypo, FontAwesome5 } from "@expo/vector-icons"
import Layout from '../components/layouts/Layout.jsx';
import colors from "../constants/colors"

import CardViaje from "../components/CardViaje.jsx"
import CardMiViaje from '../components/CardMiViaje.jsx';
import CardAuto from '../components/CardAuto.jsx';

import CreateAuto from "./modals/Autos/Create.jsx"
import EditAuto from "./modals/Autos/Edit.jsx"
import DeleteAuto from "./modals/Autos/Delete.jsx"
import CreateViaje from "./modals/Viajes/Create.jsx"
import EditViaje from "./modals/Viajes/Edit.jsx"
import DeleteViaje from "./modals/Viajes/Delete.jsx"
import SolicitarViaje from './modals/Viajes/Solicitar.jsx';

const styles = StyleSheet.create({
  contenedorUno: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    fontSize: 8,
  },
  contenedorDos: {
    marginTop: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    fontSize: 8,
    width: 400
  },
  botonMisViajes: {
    gap: 6,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 3,
    backgroundColor: colors.gris,
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
    backgroundColor: colors.agua,
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
  botonTodos: {
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

/* const [dataAutos, setDataAutos] = useState(null)

const fetchData = async () => {
  try {
    // Get data from SecureStore 
    const userID = await SecureStore.getItemAsync('user_id');
    const token = await SecureStore.getItemAsync('token');
    // Make Axios request using the obtained token
    const response = await axios.get(`http://192.168.0.6:8000/api/autos/`, {
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
      <View style={styles.contenedorUno}>
        <Pressable style={styles.botonTodos}>
          <FontAwesome5 name="list" size={24} color={colors.blanco} />
          <Text style={{ color: colors.blanco }}>Todos</Text>
        </Pressable>
        <Pressable style={styles.botonMisViajes}>
          <FontAwesome5 name="list" size={24} color={colors.blanco} />
          <Text style={{ color: colors.blanco }}>Mis viajes</Text>
        </Pressable>
      </View>
      <View style={styles.contenedorDos}>
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
      <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center", rowGap: 10 }}>
        {/* <CardViaje key={1} /> */}
        <CardMiViaje key={2} />
        <CardAuto key={3} />
      </View>
      {/* <SolicitarViaje onClose={closeCreateViajeModal}/> */}
      <CreateViaje modalOpen={modalCreateViajeVisible} onClose={closeCreateViajeModal} />
      {/* <EditViaje onClose={closeCreateViajeModal} /> */}
      {/* <DeleteViaje onClose={closeCreateViajeModal} /> */}
      <CreateAuto modalOpen={modalCreateAutoVisible} onClose={closeCreateAutoModal} marcas={marcas} />
      {/* <EditAuto onClose={closeCreateAutoModal} marcas={marcas} /> */}
      {/* <DeleteAuto onClose={closeCreateAutoModal} /> */}
    </Layout>
  )
}
export default Viajes;