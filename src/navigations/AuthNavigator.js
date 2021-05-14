import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import { LOGIN, REGISTER } from '../constants/routeNames'
import Login from '../screens/Login'
import Register from '../screens/Register'

export default function AuthNavigator() {
    const AuthStack = createStackNavigator()
    return (
        <AuthStack.Navigator screenOptions={{headerShown:true}}>
            <AuthStack.Screen name={LOGIN} component={Login}>
            </AuthStack.Screen>
            <AuthStack.Screen name={REGISTER} component={Register}>
            </AuthStack.Screen>
        </AuthStack.Navigator>
    )
}
