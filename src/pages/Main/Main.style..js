import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
export default StyleSheet.create({
    container: {
        flex:1,
    },
    subContainer: {
        flex:1,
    },
    filters: {
        flexDirection:'row',
    },
    filterContainer: {
        flex:1,
        backgroundColor:colors.lightDark,
        alignItems:'center',
        justifyContent:'space-around',
        paddingVertical: 8,
    },
    filterTitle:{
        color:'white',
    },
    showFiltersContainer: {
        alignItems:'flex-end'
    },
    showFiltersButton: {
        backgroundColor: colors.dark,
        flexDirection: 'row',
        margin: 8,
        padding: 8,
        borderRadius: 4,
    },
    showFiltersTitle:{
        color:'white',
        marginLeft: 4,
        fontSize: 17,
    }
});