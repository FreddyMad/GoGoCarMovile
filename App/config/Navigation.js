import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Login from "../screens/Login"
import Register from "../screens/Register"

const MainStack = createStackNavigator()
const MainStackScreen = () => (
  <MainStack.Navigator initialRouteName="Login">
    <MainStack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
    <MainStack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
  </MainStack.Navigator>
)

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
)