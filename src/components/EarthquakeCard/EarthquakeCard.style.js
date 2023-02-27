import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const baseStyles = {
    container: {
        flexDirection:'row',
        margin: 8,
        padding: 6,
        borderRadius: 4, 
    },
    section:{
        flex:1,
    },
    left: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    right: {
        flexDirection:'column',
        flex:2,      
        justifyContent:'space-evenly' 
    },
    date:{
        fontSize: 16,
    },
    rightBottomContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        flex:1,
    },
    dateContainer: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    locationContainer: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    statusContainer: {
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    magnitudeContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent:'center',
        alignItems:'center',
    },
    magnitude:{
        fontSize: 24,
        fontWeight:'bold',
    },
    province: {
        fontSize:16,
        fontWeight:'bold',
    },
    depth: {
        marginTop: 4,
    },
}

export default StyleSheet.create({
    light: {
        ...baseStyles,
        container: {
            ...baseStyles.container,
            backgroundColor: colors.lightStyle.white,
        },
        magnitudeContainer: {
            ...baseStyles.magnitudeContainer,
            backgroundColor: colors.lightStyle.secondary,
        },
        magnitude: {
            ...baseStyles.magnitude,
            color: colors.lightStyle.white,
        },
        text: {
            color: 'black',
        }
    },
    dark: {
        ...baseStyles,
        container: {
            ...baseStyles.container,
            backgroundColor: colors.darkStyle.secondary,
        },
        magnitudeContainer: {
            ...baseStyles.magnitudeContainer,
            backgroundColor: colors.darkStyle.tertiary,
        },
        magnitude: {
            ...baseStyles.magnitude,
            color: colors.lightStyle.white,
        },
        text: {
            color: 'white',
        }
    }
});