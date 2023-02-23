import { StyleSheet } from "react-native";
import colors from '../../assets/colors';
export default StyleSheet.create({
    container: {
        position:'absolute',
        bottom:16,
        right:16,
        flexDirection:'row',
        backgroundColor:colors.dark,
        padding: 12,
        borderRadius: 4,
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        color:'white',
        marginLeft: 8,
        fontSize: 16,
    }
});