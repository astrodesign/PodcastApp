import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import Album from '../components/Album';
import AlbumCategoryComponent from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
