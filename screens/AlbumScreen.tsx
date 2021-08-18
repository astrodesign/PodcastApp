import React, { useEffect } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'; 
import SongListItem from '../components/SongListItem';
import albumDetails from '../data/albumDetails';
import AlbumHeader from '../components/AlbumHeader';



const AlbumScreen = () => {

        const route =useRoute(); 

        useEffect( () => {

        },  [])    

    return (
        <SafeAreaView>
            <FlatList 
            data={albumDetails.songs}
            renderItem={({ item}) => <SongListItem song={item}/> }
            keyExtractor={(item) => item.id}
            ListHeaderComponent={()=> <AlbumHeader album={albumDetails}/>}
            />
        </SafeAreaView>
    )
}

export default AlbumScreen

const styles = StyleSheet.create({})
