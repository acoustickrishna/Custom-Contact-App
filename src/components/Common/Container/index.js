import React from 'react'
import { ScrollView, View } from 'react-native'
import Styles from './style'
export default function Container({style,children}) {
    return (
        <ScrollView>
            <View style={[Styles.wrapper,style]}>
                {children}
            </View>
        </ScrollView>
    )
}
