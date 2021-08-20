import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {AntDesign, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 
import {Song} from '../../types'; 
import { useNavigation } from '@react-navigation/native';

export type SongListProps = {
    song: Song
}

const SongListItem = (props: SongListProps) => {
    const navigation = useNavigation(); 
    const songClick = () => {
        navigation.navigate('NowPlayingScreen', {id: props.song.id})
    }   
    
    return (

        <TouchableOpacity onPress={songClick}>
       

        <View style={styles.row}>
            <View style={styles.cell}>
                {/* this is where you can leave an index number */}
            </View>
        <View style={[styles.cell, { flex: 1 }]}>
            <Text style={styles.name}>{props.song.title}</Text>
            <Text style={styles.artist}>{props.song.artist}</Text>
        </View>
            <View style={styles.cell}>
                 <Feather name="more-horizontal" color="#b2b3b4" size={24} />
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default SongListItem

const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      backgroundColor: "black",
    },
    cell: {
      padding: 16,
      justifyContent: "center",
    },
    index: {
      color: "#b2b3b4",
    },
    artist: {
      color: "#b2b3b4",
    },
    name: {
      color: "white",
    },
  });
