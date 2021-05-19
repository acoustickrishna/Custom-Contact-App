import 'react-native-gesture-handler';
import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppNavContainer() {

    const { authState: { isLoggedIn } } = useContext(GlobalContext)
    const [IsAuthenticated, setIsAuthenticated] = useState(false)
    const [IsAuthloaded, setIsAuthloaded] = useState(false)
    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem("user")
            if (user) {
                setIsAuthloaded(true)
                setIsAuthenticated(true)
            } else {
                setIsAuthloaded(false)
                setIsAuthenticated(true)
            }
        } catch (error) {
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <React.Fragment>
            { IsAuthloaded ? (
                <NavigationContainer>
                    {isLoggedIn || setIsAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
                </NavigationContainer>
            ) : (<Text>Loading</Text>)}
        </React.Fragment>

    );
}