import React,{useState,useEffect} from 'react';
import {View,FlatList, TouchableOpacity,Text,Button,ScrollView,PermissionsAndroid} from 'react-native';
import {enableLatestRenderer} from 'react-native-maps';
enableLatestRenderer();

// styles
import styles from './Main.style.';

// Custom components
import EarthquakeCard from '../../components/EarthquakeCard/EarthquakeCard';
import Seperator from '../../components/ListItemSeperator/Seperator';
import FilterButton from '../../components/FilterButton/FilterButton';
import Slider from '@react-native-community/slider';

// Icon 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Animations
import Loading from '../../assets/Animations/loading/loading';
import Error from '../../assets/Animations/error/error';


// axios
import axios from 'axios';

// util functions
import functions from '../../utils/functions';
import Geolocation from '@react-native-community/geolocation';


const Main = ({navigation}) => {
    const {currentDate,oneDayLater} = functions.getCurrentDate();
    const DEFAULT_URL = `https://deprem.afad.gov.tr/apiv2/event/filter?start=${currentDate}&end=${oneDayLater}&orderby=timedesc`;

    const [data,setData] = useState([]);
    const [apiURL,setApiURL] = useState(DEFAULT_URL);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState();
    const [showFilters,setShowFilters] = useState(false);

    const [buttonActive,setButtonActive] = useState(false);
    const [magnitude,setMagnitude] = useState(1);

    useEffect(
        () => {
            const getEarthquakes = async () => {
                try {
                    console.log(apiURL);
                    setLoading(true);
                    const response = await axios.get(apiURL);
                    setLoading(false);
                    const data = response.data.slice(0,50); // Son 50 deprem
                    setData(data);
                }
                catch(error){
                    setLoading(false);
                    setError(error);
                }
            }
            getEarthquakes();
            const interval = setInterval(() => getEarthquakes(), 60 * 1000);
            return () => clearInterval(interval);
        }, [apiURL]
    )


    useEffect(() => {
        if(buttonActive) {
            const requestLocationPermission = async () => {
                try{
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Konum izni',
                            message: 'Uygulamanın bu özelliğini kullanabilmeniz için konum izni vermeniz gerekir.',
                        }
                    );
                    if(granted === PermissionsAndroid.RESULTS.GRANTED){
                        Geolocation.getCurrentPosition(info => {
                            const {latitude,longitude} = info.coords;
                            setApiURL(DEFAULT_URL.concat(`&lat=${latitude}&lon=${longitude}&minmag=${magnitude}&maxrad=30000`))
                        })
                    }
                    else{
                        console.log('Konum izni verilmedi.');
                    }
                }
                catch(error){
                    console.warn(error);
                }
            }
            requestLocationPermission();
        }
        else{
            setApiURL(DEFAULT_URL.concat(`&minmag=${magnitude}`));
        }
    },[buttonActive,magnitude])

    const renderMainPage = () => {
        if(loading){
            return <Loading/>
        }
        else if(error){
            return <Error/>
        }
        else{
            return (
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                            <View style={styles.showFiltersContainer}>
                                <TouchableOpacity onPress={() =>{
                                    setShowFilters(!showFilters)
                                }} style={styles.showFiltersButton}>
                                    <Icon name='filter' size={18} color='white'/>
                                    <Text style={styles.showFiltersTitle}>Filtrele</Text>
                                </TouchableOpacity>
                            </View>
                            {
                                showFilters ? (
                                    <View style={styles.filters}>
                                        <View style={styles.filterContainer}>
                                            <Text style={styles.filterTitle}>Mesafe</Text>
                                            <FilterButton title='Yakınımdakiler' onPress={() => {
                                                setButtonActive(!buttonActive)
                                            }}
                                            buttonActive={buttonActive}
                                            />
                                        </View>
                                        <View style={styles.filterContainer}>
                                            <Text style={styles.filterTitle}>Büyüklük</Text>
                                            <Slider
                                                maximumValue={7}
                                                minimumValue={1}
                                                value={magnitude}
                                                step={1}
                                                style={{
                                                    width: '100%',
                                                }}
                                                onSlidingComplete={(val) => {
                                                    setMagnitude(val);
                                                }}
                                            />
                                        </View>
                                    </View>
                                ) : null
                            }
                            
                            <FlatList
                            data={data}
                            extraData={data}
                            contentContainerStyle={{flexGrow:1}}
                            renderItem={({item}) => (<EarthquakeCard data={item} navigation={navigation}/>)}
                            keyExtractor={(item) => item.eventID}
                            ItemSeparatorComponent={<Seperator/>}
                            />
                    </View>
                </View>
            )
        }
    }


    return (
        <View style={styles.container}>
            {renderMainPage()}
        </View>
    )   
}

export default Main;


