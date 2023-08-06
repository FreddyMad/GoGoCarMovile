import React, { useState, useEffect } from 'react'
import { StatusBar, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import NavUser from "../NavUser.jsx"
import colors from "../../constants/colors.js"

const styles = StyleSheet.create({
})

const Layout = ({ children }) => {
  const [dataUsuario, setDataUsuario] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Get data from SecureStore 
      const userID = await SecureStore.getItemAsync('user_id');
      const token = await SecureStore.getItemAsync('token');
      // Make Axios request using the obtained token
      const response = await axios.get(`http://192.168.0.9:8000/api/usuario/${userID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });
      // Process the response and update state
      setDataUsuario(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor={colors.fondo} />
      <NavUser user={dataUsuario} />
      { children }
    </SafeAreaView>
  )
}
export default Layout;