import React from 'react';
import {View,Text, Button,FlatList} from 'react-native';

import WhistleSoundBox from '../../components/WhistleSoundBox/WhistleSoundBox';

const Whistle = () => {
    const whistleList = [
        {
            id:1,
            name: 'Düdük 1',
            path: 'whistle_1.mp3'
        },
        {
            id:2,
            name: 'Düdük 2',
            path: 'whistle_2.mp3'
        },
        {
            id:3,
            name: 'Düdük 3',
            path: 'whistle_3.mp3'
        }
    ];

    return (
        <View style={{flex:1, justifyContent:'center'}}>
           <FlatList
            contentContainerStyle={{flexGrow:1,justifyContent:'center'}}
            data={whistleList}
            numColumns={2}
            renderItem={({item}) => <WhistleSoundBox sound={item}/>}
            keyExtractor={item => item.id}
            ListHeaderComponent={<Text style={{textAlign:'center',fontSize:64,color:'black',fontWeight:'200'}}>Düdük</Text>}
            />
        </View>
    );
};

export default Whistle;