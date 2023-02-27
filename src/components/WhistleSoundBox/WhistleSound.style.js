import { StyleSheet } from "react-native";
import colors from "../../assets/colors";

const baseStyles = {
    container: {
        flex:1,
        margin: 8,
        padding: 12,
        borderRadius: 8,
    },
    iconContainer: {
        alignItems:'center',
    },
    soundName:{
        color:'white',
        fontSize:18,
        textAlign:'center'
    },
    controlsContainer: {
        justifyContent:'center',
        alignItems:'center',
    },
    playPause: {
        backgroundColor: 'white',
        width: 40,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        marginVertical: 8,
        borderRadius: 20,
    },
}


export default StyleSheet.create({
    dark: {
        ...baseStyles,
        container: {
            ...baseStyles.container,
            backgroundColor: colors.darkStyle.secondary,
        },


    },

    light: {
        ...baseStyles,
        container: {
            ...baseStyles.container,
            backgroundColor: colors.lightStyle.primary,
        }
    },

})