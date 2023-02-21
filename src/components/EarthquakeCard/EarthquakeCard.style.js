import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
    container: {
        flexDirection:'row',
        margin: 8,
        padding: 4,
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
        backgroundColor: colors.gold,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent:'center',
        alignItems:'center',
    },
    magnitude:{
        color:'white',
        fontSize: 24,
        fontWeight:'bold',
    },
    province: {
        fontSize:16,
        fontWeight:'bold',
    },
    depth: {
        marginTop: 4,
    }
});