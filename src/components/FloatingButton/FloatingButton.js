import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FlotingButton.style';

const FloatingButton = ({title,icon,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.7}>
            <Icon name={icon.name} size={icon.size} color={icon.color}/>
            {
                title
                ? <Text style={styles.title}>{title}</Text>
                : null
            }
        </TouchableOpacity>
    );
};

export default FloatingButton;