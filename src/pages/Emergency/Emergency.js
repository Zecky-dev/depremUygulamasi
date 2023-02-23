import React,{useEffect, useState} from 'react';
import {View,Text,FlatList, PermissionsAndroid, Alert,Button} from 'react-native';

import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Seperator from '../../components/ListItemSeperator/Seperator';
import Modal from 'react-native-modal';
import Contact from 'react-native-contacts';
import ContactBox from '../../components/ContactBox/ContactBox';


const Emergency = ({navigation}) => {
    const [modalVisible,setModalVisible] = useState(false);
    const [contactList,setContactList] = useState([]);
    const [tempSelected,setTempSelected] = useState([]);
    const [selectedContacts,setSelectedContacts] = useState([]);

    useEffect(() =>{
        Contact.getAll().then(
            (contacts) => {
                const filteredContacts = contacts.filter(
                    function(el){
                        return !selectedContacts.includes(el)
                    }
                );
                setContactList(filteredContacts);
            }
        )
    },[selectedContacts])
    
    

    return (
        <View style={{flex:1}}>
            <View style={{flex:0.7}}>
                <FlatList
                    style={{flexGrow:1,backgroundColor:'white'}}
                    data={selectedContacts}
                    renderItem={({item}) => <Text>Test</Text>}
                    ItemSeparatorComponent={<Seperator/>}
                />
                <FloatingButton
                    icon={{name:'account-plus',size:24,color:'white'}}
                    onPress={() => {
                        setModalVisible(!modalVisible)
                    }}
                />
            </View>
            <Modal
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(!modalVisible)}
                onBackButtonPress={() => setModalVisible(!modalVisible)}
            >
                <FlatList
                    data={contactList}
                    renderItem={({item}) => <ContactBox contact={item} setTempSelected={setTempSelected} tempSelected={tempSelected}/>}
                />
                <Button title='Kaydet' onPress={() => setSelectedContacts(tempSelected)}/>
            </Modal>
        </View>
    );
};

export default Emergency;