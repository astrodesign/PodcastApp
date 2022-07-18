import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import PlayerWidget from './components/PlayerWidget'; 
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api-us-west-2.hygraph.com/v2/cl56ver9o44yv01uk1eh27u6j/master',
    cache: new InMemoryCache(),
  });

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>      
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <PlayerWidget />
        </SafeAreaProvider>
      </ApolloProvider>
    );
  }
}
