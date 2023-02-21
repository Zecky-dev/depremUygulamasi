import React from 'react';
import {View,StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    seperator: {
        flex:1,
        backgroundColor: 'gray',
        height:0.5,
    }
});

const Seperator = () => {
    return (
        <View style={styles.seperator}/>
    )
}

export default Seperator;