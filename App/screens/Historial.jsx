import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from "react-native"
import axios from 'axios';
import { FontAwesome5 } from "@expo/vector-icons"
import Layout from '../components/layouts/Layout.jsx';
import colors from "../constants/colors"

import CardHistorial from '../components/CardHistorial.jsx';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
})

const Historial = ({ navigation }) => {
  return (
    <Layout>      
      <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center", rowGap: 10 }}>
        <CardHistorial/>
      </View>
    </Layout>
  )
}
export default Historial;