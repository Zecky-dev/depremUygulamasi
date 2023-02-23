import React,{useState,useEffect} from 'react';
import {View,FlatList, TouchableOpacity,Text} from 'react-native';
import {enableLatestRenderer} from 'react-native-maps';
enableLatestRenderer();

// styles
import styles from './Main.style.';

// Custom components
import EarthquakeCard from '../../components/EarthquakeCard/EarthquakeCard';
import Seperator from '../../components/ListItemSeperator/Seperator';

// axios
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import functions from '../../utils/functions';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';


const Main = ({navigation}) => {
    const [data,setData] = useState([]);        
    useEffect(
        () => {
            const getEarthquakes = async () => {
                const {currentDate,oneDayLater} = functions.getCurrentDate();
                const response = await axios.get(`https://deprem.afad.gov.tr/apiv2/event/filter?start=${currentDate}&end=${oneDayLater}&orderby=timedesc`);
                const data = response.data.slice(0,50); // Son 50 deprem
                console.log('test');
                setData(data);
            }
            getEarthquakes();
            const interval = setInterval(() => getEarthquakes(), 60 * 1000);
            return () => clearInterval(interval);
        }, []
    )

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
            <FlatList
                data={data}
                extraData={data}
                renderItem={({item}) => (<EarthquakeCard data={item} navigation={navigation} key={item.eventID}/>)}
                ItemSeparatorComponent={<Seperator/>}
            />
            </View>
        </View>
    )   
}

export default Main;


