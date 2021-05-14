import { StyleSheet } from "react-native";
import color from "../../../assets/theme/color";

export default StyleSheet.create({
    wrapper: {
        height: 50,
        borderColor: color.grey,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal:5,
        alignItems:"center",
        marginTop:5,
    },
    textInput:{
        flex:1,
        paddingLeft:5,
        // width:100
        height:42,
    },
    inputContainer:{
        paddingVertical:12
    },
    error:{
        color:color.danger,
        paddingTop:4,
        fontSize:12
    }

})