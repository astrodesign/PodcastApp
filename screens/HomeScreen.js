import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import Album from '../components/Album';
import AlbumCategoryComponent from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc'
import { gql, useQuery } from '@apollo/client';

export default function HomeScreen() {
  const {data} = useQuery(EPISODE_QUERY)
  console.log(data)
  return (
    <SafeAreaView style={tw`flex-1 justify-center`}>
      <LinearGradient
        colors={["#2b2b2b", "#000"]}
        style={StyleSheet.absoluteFill}
      />
      <Text style={tw`text-2xl p-2 mb-2 text-white`}>Hello Walker</Text>
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategoryComponent
            title={item.title}
            albums={item.albums}
            keyExtractor={(item) => item.id} />)}
        />  
    </SafeAreaView>
  );
}

const EPISODE_QUERY = gql`
query episodeQuery {
  episodes{
    title
    id
    episodeNumber
    guests{
      fullName
    }
    image {
      url
    }
  }
}`
