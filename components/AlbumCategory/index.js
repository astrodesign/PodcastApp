import React from 'react'
import { Text, View, FlatList} from 'react-native'
import AlbumComponent from '../Album';
import tw from 'twrnc'


const AlbumCategoryComponent = (props) => {
    return (
        <View style={tw`m-2`}>
            <Text style={tw`text-xl p-1 font-thin text-white`}>{props.title}</Text>
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
