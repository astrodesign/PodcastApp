import React from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import { Album } from '../../types'; 
import AlbumComponent from '../Album';

export type AlbumCategoryProps = {
    title: string;
    albums:[Album], 
}

const AlbumCategoryComponent = (props: AlbumCategoryProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={props.albums}
            renderItem={({item})=> <AlbumComponent album={item}/>}
            keyExtractor={( item ) => item.id}
            />
        </View>
    )
}

export default AlbumCategoryComponent

const styles = StyleSheet.create({
container:{
    margin: 10, 
}, 

title:{
    color: 'white', 
    fontSize: 28, 
    fontWeight: 'bold', 
    margin: 10, 
}

})
