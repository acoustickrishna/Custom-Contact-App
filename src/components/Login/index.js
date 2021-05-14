import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Container from '../../components/Common/Container'
import CustomButton from '../../components/Common/CustomButton'
import Input from "../../components/Common/input"
import styles from "./style"
import { useNavigation } from '@react-navigation/native';
import { REGISTER } from '../../constants/routeNames'
const LoginComponent = () => {

    const {navigate} = useNavigation()
    return (
        <Container style={{ marginTop: 20 }}>
            <Image
                height={70}
                width={70}
                source={require('./../../assets/images/logo.png')}
                style={styles.logoImages}
            ></Image>
            <View>
                <Text style={styles.title}>Welcome To Custom Contact</Text>
                <Text style={styles.subtitle}>Please Login Here</Text>
                <View style={styles.form}>
                    <Input
                        label="Username"
                        // onChangeText={(text) => onChangeText(text)}
                        // value={username}
                        placeholder="Enter Username"
                        icon={<Text>ICON</Text>}
                        iconPosition={"left"}
                    // error={"This Field Is Required"}
                    />
                    <Input
                        label="Password"
                        // onChangeText={(text) => onChangePassword(text)}
                        // value={password}
                        placeholder="Enter Password"
                        icon={<Text>ICON</Text>}
                        iconPosition={"left"}
                        secureTextEntry={true}
                    // error={"This Field Is Required"}
                    />
                    <CustomButton secondary={true} title="Submit" loading={true} disabled={true} />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>
                            Need a new account ?
                        </Text>
                        <TouchableOpacity onPress={() => {
                            navigate(REGISTER)
                        }}>
                            <Text style={styles.linkBtn}>
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default LoginComponent
