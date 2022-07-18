import React, {useContext, useEffect, useState} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { API, graphqlOperation } from 'aws-amplify';
import tw from 'twrnc'

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
    

      const [sound, setSound] = useState(null);
      const [isPlaying, setIsPlaying] = useState(true);
      const [duration, setDuration] = useState(null);
      const [position, setPosition] = useState(null);

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
            <Image source={{ uri: song.imageUri }} style={tw`w-18 h-18 rounded-lg`} />
            <View style={tw`p-3 flex-row w-3/4` }>
              <View style={tw`w-3/4`}>
                <Text style={tw`text-semibold text-white p-1`}>{song.title}</Text>
                <Text style={tw`p-1 font-thin text-sm text-white`}>{song.artist}</Text>
              </View>
    
              <View style={tw`flex-row justify-between self-center w-1/4`}>
                <Feather name="speaker" size={24} color={"lightgray"}/>
                <TouchableOpacity onPress={onPlayPausePress}>
                  <FontAwesome name={isPlaying ? 'pause' : 'play'} size={24} color={"lightgray"}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )
    }
    
    export default PlayerWidget;
