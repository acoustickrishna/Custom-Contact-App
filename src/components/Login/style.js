import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import color from "../../assets/theme/color";

export default StyleSheet.create({
    logoImages: {
        height: 170,
        width: 170,
        alignSelf: "center",
        marginTop: 30
    },

    title: {
        fontSize: 21,
        textAlign: "center",
        paddingTop: 20,
        fontWeight: '700'
    },

    subtitle: {
        fontSize: 16,
        textAlign: "center",
        paddingTop: 20,
        fontWeight: '400'
    },
    form: {
        paddingTop: 30
    },
    createSection: {
        flexDirection: "row",
        
    },
    linkBtn: {
        paddingLeft: 17,
        color: color.primary,
        fontSize: 18,
        alignItems: "flex-end",
        flex: 1
    },
    infoText: {
        fontSize: 18,
        flex: 2
    }

})