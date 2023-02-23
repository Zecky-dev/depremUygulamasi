import { StyleSheet } from "react-native";

const baseStyles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center', 
        padding: 6,
        margin: 4,
        borderRadius: 2,
    }
}

export default StyleSheet.create({
    active: {
        container: {
            ...baseStyles.container,
            backgroundColor: '#6082B6',
            borderWidth: 0.7,
            borderColor: 'gray',
        },
        title: {
            color: 'white',
            marginLeft: 4,
        }
    },
    inactive: {
        container: {
            ...baseStyles.container,
            borderWidth: 0.7,
            borderColor: 'white',
        },
        title: {
            color: 'white',
            marginLeft: 4,
        },
    }
});