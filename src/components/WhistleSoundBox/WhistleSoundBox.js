import React,{useState,useEffect} from 'react';
import {View,Text,Alert,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';


import styles from './WhistleSound.style';

let Sound = require('react-native-sound');
Sound.setCategory('Playback');

const WhistleSoundBox = ({sound}) => {
    const [pause,setPause] = useState(false);
    const [volume,setVolume] = useState(100);
    const [whistle,setWhistle] = useState();



    useEffect(() => {
        let whistle = new Sound(sound.path,Sound.MAIN_BUNDLE, (error) => {
            if(error){
                console.log('Hata',error);
            }
        });
        setWhistle(whistle);
    },[]) 

    

    return (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Icon name='whistle' size={48} color='white'/>
        </View>
        <Text style={styles.soundName}>{sound.name}</Text>
        <View style={styles.controlsContainer}>
            <TouchableOpacity style={styles.playPause} onPress={() => {
                setPause(!pause);
                if(pause){
                    whistle.pause(
                        () => console.log('Duraklatıldı')
                    )
                }
                else{
                    whistle.play(
                        (success) => {
                            if(success) {
                                setPause(false);
                            }
                        }
                    )
                }
            }}>
                <Icon name={pause ? 'pause' : 'play'} size={24} color='black'/>
            </TouchableOpacity>
            <Slider
                style={{width:'100%'}}
                minimumValue={0}
                maximumValue={100}
                value={volume}
                step={1}
                onValueChange={(volume) => {
                    setVolume(volume);
                    whistle.setVolume(volume / 100);
                }}
            />
        </View>
    </View>
    )
}

export default WhistleSoundBox;

