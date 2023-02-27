import React, {memo} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import styles from './EarthquakeCard.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import 'moment/locale/tr'


const EarthquakeCard = ({data,navigation,theme}) => {
    const style = styles[theme];
    const {magnitude,depth,date,province,district} = data;
    const formattedDate = moment(date).add(3,'hours').format('DD MMM YYYY - HH:mm')
    const earthquakeStatus = (magnitude) => {
        const magnitudeNum = Number(magnitude);
        if(magnitudeNum < 3){
            return 'Çok çok hafif'
        }
        else if(magnitudeNum >= 3.0 && magnitudeNum <= 3.9){
            return 'Çok hafif'
        }
        else if(magnitudeNum >= 4.0 && magnitudeNum <= 4.9){
            return 'Hafif'
        }
        else if(magnitudeNum >= 5.0 && magnitudeNum <= 5.9){
            return 'Orta şiddetli'
        }
        else if(magnitudeNum >= 6.0 && magnitudeNum <= 6.9){
            return 'Şiddetli'
        }
        else if(magnitudeNum >= 7.0 && magnitudeNum <= 7.9){
            return 'Çok şiddetli'
        }
        else{
            return 'Çok çok şiddetli'
        }
    }
    return (
        <TouchableOpacity style={style.container} onPress={() => navigation.navigate('DetailsScreen',{data})}>
                {/* Deprem büyüklüğü ve derinliği*/}
                <View style={style.left}>
                    <View style={style.magnitudeContainer}>
                        <Text style={style.magnitude}>{magnitude}</Text>
                    </View>
                    <View style={style.depthContainer}>
                        <Text style={[style.depth,style.text]}>{depth} km derinlikte</Text>
                    </View>
                </View>
                {/* Deprem tarihi ve diğer bilgiler*/}
                <View style={style.right}>
                    <View style={style.dateContainer}>
                        <Icon name='clock' size={18} style={{marginRight:4,}}/>
                        <Text style={[style.date,style.text]}>{formattedDate}</Text>
                    </View>
                    <View style={style.rightBottomContainer}>
                        <View style={style.locationContainer}>
                            <Text style={[style.province,style.text]}>
                                {!province ? 'Bilinmiyor' : province}
                            </Text>
                            <Text style={[style.district,style.text]}>
                                {!district ? 'Bilinmiyor' : district}
                            </Text>
                        </View>
                        <View style={style.statusContainer}>
                            <Text style={[style.status,style.text]}>{earthquakeStatus(magnitude)}</Text>
                        </View>
                    </View>
                    
                </View>
        </TouchableOpacity>
    );
};

export default memo(EarthquakeCard);