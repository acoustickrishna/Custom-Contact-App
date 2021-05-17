import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import color from '../../../assets/theme/color'
import styles from "./style"
const Input = ({ onChangeText, style, value, label, placeholder, icon, iconPosition, error, ...props }) => {

    const [focus, setfocus] = useState(false)

    const getFlexDirection = () => {

        if (icon && iconPosition) {
            if (iconPosition === "left") {
                return "row"
            }
            else if (iconPosition === "right") {
                return "row-reverse"
            }
        }
    }

    const getBorderColor = () => {
        if (error) {
            return color.danger
        }
        if (focus) {
            return color.primary
        }
        else {
            return color.grey;
        }
    }

    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}

            <View style={[styles.wrapper, { borderColor: getBorderColor(), flexDirection: getFlexDirection() }]}>
                <View>
                    {icon && icon}
                </View>
                <TextInput
                    style={[styles.textInput, style]}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    onFocus={() => setfocus(true)}
                    onBlur={() => setfocus(false)}
                    {...props}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

export default Input
