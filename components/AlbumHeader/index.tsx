import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Album} from '../../types'; 

export type AlbumHeaderProps={
    album: Album; 
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    return (
        <View style={styles.container}>
             <LinearGradient
                colors={["#2b2b2b", "#000"]}
                style={StyleSheet.absoluteFill}
              />
            <Image source={{uri: props.album.imageUri}} style={styles.image}/>
        <Text style={styles.name}>{props.album.name}</Text>
        <View style={styles.creatorContainer}>
            <Text style={styles.by}>By {props.album.by}</Text>
            <Text style={styles.by}>{props.album.numberOfLikes} Likes</Text>
        </View>
        <TouchableOpacity>
            <View style={styles.button}>
                <AntDesign name="play" size={15} color={'white'} style={{margin: 5}} />
                <Text style={styles.buttonText}>SHUFFLE PLAY</Text>
            </View>
        </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader

const styles = StyleSheet.create({
   
    image:{
        width: 200, 
        height: 200,
        margin: 15,  
    }, 

    container:{
        alignItems: 'center', 
        padding: 20, 
    }, 

    creatorContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between'
    }, 
    name:{
        color: 'white', 
        fontSize: 30, 
        fontWeight: 'bold', 
    }, 

    by:{
        color: 'lightgray', 
        margin: 5, 
        fontSize: 15, 
    }, 

    button:{
        flexDirection: 'row', 
        backgroundColor: '#1CD05D',
        borderRadius: 50, 
        height: 55, 
        width: 175, 
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: 10, 
    }, 

    buttonText:{
        color: 'white', 
        fontSize: 15, 
        fontWeight: 'bold', 
        
    }
    
})
