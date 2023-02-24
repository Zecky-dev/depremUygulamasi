import React from 'react';
import {View,Dimensions} from 'react-native';
let {width,height} = Dimensions.get('window');
const LATITUDE_DELTA = 0.5;
const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

import MapView, {Marker} from 'react-native-maps';

const Details = ({route}) => {
    const {longitude,latitude,location} = route.params.data;
    const coordinates = { longitude: Number(longitude), latitude: Number(latitude)}
    return (
        <View style={{flex:1}}>
            <MapView style={{flex:1}}
            scrollEnabled={false}
            initialRegion={{
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,    
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }}>
                <Marker 
                    coordinate={{
                        latitude: coordinates.latitude,
                        longitude: coordinates.longitude
                    }}
                    title={location}
                />
            </MapView>
        </View>
    );     
};
export default Details;