import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import color from '../../../assets/theme/color'
import styles from "./style"
const CustomButton = ({
    title, secondary, primary, danger, loading, disabled, onPressed }) => {

    const [focus, setfocus] = useState(false)

    const getBorderColor = () => {
        if (disabled) {
            return color.grey
        }
        if (primary) {
            return color.primary
        }
        if (secondary) {
            return color.secondary
        }
        if (danger) {
            return color.danger
        }
    }


    const getTextColor = () => {
        if (disabled) {
            return "black"
        } else {
            return color.white
        }
    }

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPressed}
            style={[styles.wrapper, { backgroundColor: getBorderColor() }]}>
            <View style={[styles.loadingSection]}>
                {loading && <ActivityIndicator style={{color:color.black}}/>}
                {title && <Text style={{ color: getTextColor(),paddingLeft:loading?5:0 }}>{title}</Text>}
            </View>

        </TouchableOpacity>
    )
}

export default CustomButton
