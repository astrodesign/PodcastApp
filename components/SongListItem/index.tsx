import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 
import Song from '../../types'; 

export type SongListProps = {
    song: Song
}

const SongListItem = (props: SongListProps) => {

    return (
        <View style={styles.container}>
            <Image source={{uri: props.song.imageUri}} style={styles.image}/>
        
        <View style={styles.rightContainer}>    
            <Text style={styles.title}>{props.song.title}</Text>
            <Text style={styles.artist}>{props.song.artist}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <FontAwesome name='ellipsis-v' size={25} color={'lightgray'}/>

        </View>
        </View>
    )
}

export default SongListItem

const styles = StyleSheet.create({
    image:{
        width: 75, 
        height: 75, 
        borderRadius: 6
    }, 

    title:{
        color: 'white', 
        fontSize: 20,
        marginVertical: 10 
    }, 

    artist:{
        color: 'lightgray', 
        fontSize: 15, 
    }, 

    container:{
        flexDirection: 'row',
        margin: 10,  

    }, 

    rightContainer:{
        flex: 1, 
        marginLeft: 15, 
    }, 
    buttonContainer:{
        alignItems: 'center', 
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        width: 100, 
    }

})
