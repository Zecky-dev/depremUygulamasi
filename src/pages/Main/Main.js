import React,{useState,useEffect} from 'react';
import {View,FlatList} from 'react-native';
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

const Main = ({navigation}) => {
    const [data,setData] = useState([]);
    const [orderOpen,setOrderOpen] = useState(false);
    const [apiURL,setApiURL] = useState('https://deprem.afad.gov.tr/apiv2/event/filter?start=2023-02-19&end=2023-02-20&limit=20'); 

    const orderOptions = [
        {label: 'Büyüklüğe göre artan',value:0},
        {label: 'Büyüklüğe göre azalan',value:1},
    ]

    useEffect(
        () => {
            const getEarthquakeData = async () => {
            const response = await axios.get(apiURL);
            const data = response.data;
            setData(data);
            }
            getEarthquakeData(); 
        }, [apiURL]
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


