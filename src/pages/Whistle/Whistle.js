import React,{useContext} from 'react';
import {View,Text,FlatList} from 'react-native';
import colors from '../../assets/colors';

import WhistleSoundBox from '../../components/WhistleSoundBox/WhistleSoundBox';

import {ThemeContext} from '../../context/ThemeContext';
 
const Whistle = () => {
    const theme = useContext(ThemeContext);
    // Saved whistles
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
        <View style={{
            flex:1,
            justifyContent:'center',
            backgroundColor: theme === "dark" ? colors.darkStyle.primary : colors.lightStyle.primary
        }}>
           <FlatList
            contentContainerStyle={{flexGrow:1,justifyContent:'center'}}
            data={whistleList}
            numColumns={2}
            renderItem={({item}) => <WhistleSoundBox sound={item} theme={theme}/>}
            keyExtractor={item => item.id}
            ListHeaderComponent={
            <Text style={{
                textAlign:'center',
                fontSize:64,
                color:theme === "dark" ? 'white' : 'black',
                fontWeight:'200'
            }}>Düdük</Text>}
            />
        </View>
    );
};

export default Whistle;