import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from "../components/TabBar"
import Login from "../screens/Login"
import Register from "../screens/Register"
import Viajes from "../screens/Viajes"
import Solicitudes from "../screens/Solicitudes"
import Historial from "../screens/Historial"

const MainStack = createStackNavigator()
const Tab = createBottomTabNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator initialRouteName="Login">
    <MainStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <MainStack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    <MainStack.Screen name="Menu" component={MenuTabButtonScreen} options={{ headerShown: false }} />
  </MainStack.Navigator>
)

const MenuTabButtonScreen = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Viajes" component={Viajes} options={{ headerShown: false }}/>
      <Tab.Screen name="Solicitudes" component={Solicitudes} options={{ headerShown: false }}/>
      <Tab.Screen name="Historial" component={Historial} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}
export default () => (
  <NavigationContainer>
    <MainStackScreen/>
  </NavigationContainer>
)