import { StyleSheet } from "react-native";
import colors from "../../assets/colors";

const baseStyles = {
    container: {
        flex:1,
    },
    subContainer: {
        flex:1,
    },
    filters: {
        flexDirection:'row',
        margin: 8,
    },
    showFiltersContainer: {
        alignItems:'flex-end'
    },
    filterContainer: {
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        paddingVertical: 8,
    },
    filterTitle:{
        color:'white',
    },
    showFiltersButton: {
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
}

export default StyleSheet.create({

    dark: {
        ...baseStyles,
        container: {
            ...baseStyles.container,
            backgroundColor: colors.darkStyle.primary,
        },
        filters: {
            ...baseStyles.filters,
            backgroundColor: colors.darkStyle.secondary,    
        },
        showFiltersButton: {
            ...baseStyles.showFiltersButton,
            backgroundColor: colors.darkStyle.secondary,
        },
    },
    light: {
        ...baseStyles,
        filters: {
            ...baseStyles.filters,
            backgroundColor: colors.lightStyle.secondary,    
        },
        showFiltersButton: {
            ...baseStyles.showFiltersButton,
            backgroundColor: colors.lightStyle.secondary
        },
    },




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