import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import PlayerControls from '../PlayerControls'
import { Song } from '../../types'
import { SafeAreaView } from 'react-native-safe-area-context'

export type SongListProps = {
    song: Song
}

const NowPlayingItem = (props: SongListProps) => {
    return (
        <SafeAreaView style={styles.nowplaying}>
            <Image source={{uri: props.song.imageUri}} style={styles.image}/>
            <Text style={styles.title}>{props.song.title}</Text>
            <Text style={styles.artist}>{props.song.artist}</Text>

        </SafeAreaView>
    )
}

export default NowPlayingItem

const styles = StyleSheet.create({
    title:{
        color:'white', 
        fontSize: 30, 
    }, 

    artist:{
        color: 'lightgray', 
        fontSize: 25, 
    }, 
    nowplaying:{
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    image:{
        width: 200, 
        height: 200,
        margin: 15, 
    }
})
