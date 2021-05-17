import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, Text } from 'react-native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';

export default function AppNavContainer() {
    const isLoggedin = true;

    const { authState: { isloggedin } } = useContext(GlobalContext)
   
    return (
        <NavigationContainer>
            {isloggedin ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
}