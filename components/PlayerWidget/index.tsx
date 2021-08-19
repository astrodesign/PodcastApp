import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Colors from '../../components'; 
import {AntDesign, FontAwesome } from '@expo/vector-icons'; 
import {Audio} from 'expo-av'; 
//import Song from '../../types'; 

const song ={
    id: '4',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'Stay At Home Astronaut',
    artist: 'Walker Lillard',
    uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'
  }

const PlayerWidget = () => {

    const onPlaybackStatusUpdate = (status) => {
        console.log(status); 
    }

    const playCurrentSong = async () =>{
        const { sound } = Audio.Sound.createAsync(
            {uri: song.uri}, 
            { shouldPlay: true}, 
            onPlaybackStatusUpdate
        )
    }

    useEffect(()=> {
        //play the song
        playCurrentSong(); 
    }, [])

    return (
        <View style={styles.container}>
            <Image source={{uri: song.imageUri}} style={styles.image}/>
        
        <View style={styles.rightContainer}>    
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <AntDesign name='hearto' size={25} color={'white'}/>
            <FontAwesome name='play' size={25} color={'white'}/>

        </View>
        </View>
    )
}

export default PlayerWidget

const styles = StyleSheet.create({
    image:{
        width: 75, 
        height: 75, 
        borderRadius: 6, 
        marginRight: 10, 
    }, 

    title:{
        color: 'white', 
        fontSize: 18,
        marginVertical: 10, 
        fontWeight: 'bold'
    }, 

    artist:{
        color: 'lightgray', 
        fontSize: 18, 
        marginLeft: 20
    }, 

    container:{
        position: 'absolute', 
        bottom: 77, 
        flexDirection: 'row', 
        backgroundColor: '#131313', 
        width: '100%', 
        borderWidth: 1, 
        borderColor: 'black', 
        alignItems: 'center'
    }, 

    rightContainer:{
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center'
    }, 
    
    buttonContainer:{
        alignItems: 'center', 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        width: 100, 
    }

})
