import React, {useContext, useEffect, useState} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { API, graphqlOperation } from 'aws-amplify';

import styles from './styles';
import {Song} from "../../types";
import {Sound} from "expo-av/build/Audio/Sound";
import { SafeAreaView } from 'react-native-safe-area-context';

//import { AppContext } from '../../AppContext';
//import {getSong} from "../../src/graphql/queries"; 




const PlayerWidget = () => {
    

    const song ={
        id: '4',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'Stay At Home Astronaut',
        artist: 'Walker Lillard',
        uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'
      }
    

      const [sound, setSound] = useState<Sound|null>(null);
      const [isPlaying, setIsPlaying] = useState<boolean>(true);
      const [duration, setDuration] = useState<number|null>(null);
      const [position, setPosition] = useState<number|null>(null);

      const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.playableDurationMillis);
        setPosition(status.positionMillis);
      }
    

      const playCurrentSong = async () => {
        if (sound) {
          await sound.unloadAsync();
        }
    
        const { sound: newSound } = await Sound.createAsync(
          { uri: song.uri },
          { shouldPlay: isPlaying },
          onPlaybackStatusUpdate
        )
    
        setSound(newSound)
      }

    useEffect(()=> {
        playCurrentSong(); 
    }, [])

    const onPlayPausePress = async () => {
        if (!sound) {
          return;
        }
        if (isPlaying) {
          await sound.stopAsync();
        } else {
          await sound.playAsync();
        }
      }

      const getProgress = () => {
        if (sound === null || duration === null || position === null) {
          return 0;
        }
    
        return (position/duration * 100); 
      }
      console.log(position)
    
      if (!song) {
        return null;
      }

    return (
        <View style={styles.container}>
          <View style={[styles.progress, { width: `${getProgress()}%`}]} />
          <View style={styles.row}>
            <Image source={{ uri: song.imageUri }} style={styles.image} />
            <View style={styles.rightContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.title}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
              </View>
    
              <View style={styles.buttonContainer}>
                <Feather name="speaker" size={30} color={"lightgray"}/>
                <TouchableOpacity onPress={onPlayPausePress}>
                  <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={"lightgray"}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )
    }
    
    export default PlayerWidget;
