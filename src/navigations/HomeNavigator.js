import React from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/routeNames'
import Contacts from '../screens/Contacts'
import ContactDetail from '../screens/ContactDetail'
import ContactCreate from '../screens/CreateContact'
import Settings from '../screens/Settings'


export default function HomeNavigator() {
    const HomeStack = createStackNavigator()
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}>
            </HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail}>
            </HomeStack.Screen>
            <HomeStack.Screen name={CREATE_CONTACT} component={ContactCreate}>
            </HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}>
            </HomeStack.Screen>
        </HomeStack.Navigator>
    )
}
