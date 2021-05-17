import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Container from '../../components/Common/Container'
import CustomButton from '../../components/Common/CustomButton'
import Input from "../../components/Common/input"
import styles from "./style"
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeNames'
const RegisterComponent = ({ onSubmit, onChange, form, errors, error, loading }) => {

    const { navigate } = useNavigation()
    
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
                <Text style={styles.subtitle}>Create A Free Account</Text>
                <View style={styles.form}>

                    <Input
                        label="Username"
                        onChangeText={(value) => {
                            onChange({ name: "userName", value: value })
                        }}
                        // value={username}
                        placeholder="Enter Username"
                        icon={<Text>ICON</Text>}
                        iconPosition={"left"}
                        error={errors.userName || error?.username?.[0]}
                    />

                    <Input
                        label="Firstname"
                        onChangeText={(value) => {
                            onChange({ name: "firstName", value: value })
                        }}
                        // value={username}
                        placeholder="Enter Firstname"
                        icon={<Text>ICON</Text>}
                        iconPosition={"left"}
                        error={errors.firstName|| error?.first_name?.[0]}
                    />
                    <Input
                        label="Lastname"
                        onChangeText={(value) => {
                            onChange({ name: "lastName", value: value })
                        }}
                        // value={username}
                        placeholder="Enter Lastname"
                        icon={<Text>ICON</Text>}
                        iconPosition={"left"}
                        error={errors.lastName|| error?.last_name?.[0]}
                    />


                    <Input
                        label="Email"
                        onChangeText={(value) => {
                            onChange({ name: "email", value: value })
                        }}
                        // value={username}
                        placeholder="Enter Email"
                        icon={<Text>ICON</Text>}
                        iconPosition={"left"}
                        error={errors.email|| error?.email?.[0]}

                    />


                    <Input
                        label="Password"
                        onChangeText={(value) => {
                            onChange({ name: "password", value: value })
                        }}
                        // value={password}
                        placeholder="Enter Password"
                        icon={<Text>Show</Text>}
                        iconPosition={"right"}
                        secureTextEntry={true}
                        error={errors.password|| error?.password?.[0]}

                    />


                    <CustomButton onPressed={onSubmit}
                        secondary={true} title="Submit"
                        loading={loading}
                        disabled={loading} />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>
                            Already have an account ?
                        </Text>
                        <TouchableOpacity onPress={() => {
                            navigate(LOGIN)
                        }}>
                            <Text style={styles.linkBtn}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default RegisterComponent
