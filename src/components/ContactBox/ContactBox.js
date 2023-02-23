import React,{useState,useEffect} from 'react';
import {View,Text} from 'react-native';

import styles from './ContactBox.style';
import CheckBox from '@react-native-community/checkbox';

const ContactBox = ({contact,tempSelected,setTempSelected}) => {
    const [toggleCheckbox,setToggleCheckbox] = useState(false);
    
    useEffect(
        () => {
            if(toggleCheckbox){
                setTempSelected([...tempSelected,contact]);
            }
            else{
                const index = tempSelected.indexOf(contact);
                if(index>-1){
                    const list = tempSelected.splice(index,1);
                    setTempSelected(list);
                }
            }
        },[toggleCheckbox]
    )

    if(contact.phoneNumbers.length > 0){
        return (
        <View style={styles.container}>
            <View>
                <Text style={styles.displayName}>
                    {contact.displayName}
                </Text>
                <Text>
                    {contact.phoneNumbers[0].number}
                </Text>
            </View>
            <View>
                <CheckBox
                    disabled={false}
                    value={toggleCheckbox}
                    onValueChange={(newValue) => {
                        setToggleCheckbox(newValue);
                    }}
                />
            </View>
        </View>
        )
    }
};

export default ContactBox;