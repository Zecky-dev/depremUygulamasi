import React, {useState} from 'react';
import {TouchableOpacity,Text} from 'react-native';

import styles from './FilterButton.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const FilterButton = ({title,options,onPress,buttonActive}) => {
    return (
    <TouchableOpacity
    onPress={() => {
         onPress();
    }}
    style={buttonActive ? styles['active'].container : styles['inactive'].container}>
        {buttonActive ? <Icon name='check' color='white' size={16}/> : null}
        <Text style={buttonActive ? styles['active'].title : styles['inactive'].title}>{title}</Text>
    </TouchableOpacity>
    );
};

export default FilterButton;