import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback} from 'react-native'
import { Album } from '../../types'; 
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc'


const AlbumComponent = (props) => {

    const navigation = useNavigation(); 

    const albumClick = () => {
        navigation.navigate('AlbumScreen', {id: props.album.id})
    }

    return (
        <TouchableWithoutFeedback   onPress={albumClick}>
            <View style={tw`w-44`}>
            <Image source={{uri: props.album.imageUri}} style={tw`w-32 h-32 rounded-xl `}/>
            <Text style={tw`font-light text-sm text-gray-300 p-1`}>{props.album.artistsHeadline}</Text>
            </View>
        </TouchableWithoutFeedback>
        
        
    )
}

export default AlbumComponent
