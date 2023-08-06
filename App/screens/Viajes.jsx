import React, { useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, View } from "react-native"
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { Entypo, FontAwesome5 } from "@expo/vector-icons"
import Layout from '../components/layouts/Layout.jsx';
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: 500,
    width: 350,
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  modalTitle: {
    marginTop: 6,
    paddingHorizontal: 15,
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalFooter: {
    gap: 4,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'flex-end'
  },
  botones: {
    alignContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 8,
  }
})

const Viajes = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Layout>
      <View style={styles.contenedorBotones}>
        <Pressable style={styles.botonAzul} onPress={() => setModalVisible(true)}>
          <Entypo name="plus" size={24} color={colors.blanco} />
          <Text style={{ color: colors.blanco }}>Crear Viaje</Text>
        </Pressable>
        <Pressable style={styles.botonAzul}>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <FontAwesome5 name="route" size={32} color={colors.azul} />
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}>
                <FontAwesome5 name="times" size={24} color={colors.negro} />
              </Pressable>
            </View>
            <View style={styles.modalTitle}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Crear un nuevo viaje</Text>
            </View>
            <View style={styles.modalFooter}>
              <Pressable style={[styles.botones, { borderWidth: 3, borderColor: 'gray' }]}
                onPress={() => { }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Cancelar</Text>
              </Pressable>
              <Pressable style={[styles.botones, { backgroundColor: colors.azul }]}
                onPress={() => { }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: colors.blanco }}>Confirmar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </Layout>
  )
}
export default Viajes;