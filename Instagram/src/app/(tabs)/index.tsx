import React, { useState, useEffect } from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
import Stories from '~/src/components/Stories';
import Post from '~/src/components/PostListItem';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const loadFonts = () => {
    return Font.loadAsync({
      'Lobster-Regular': require('~/assets/fonts/Lobster-Regular.ttf'),
    });
  };

const Index = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
      const loadAllFonts = async () => {
        await loadFonts();
        setFontsLoaded(true);
      };
      loadAllFonts();
    }, []);
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
  
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
          paddingTop: 60,
        }}>
        <FontAwesome name="plus-square-o" style={{fontSize: 24}} />
        <Text
          style={{
            fontFamily: 'Lobster-Regular',
            fontSize: 25,
            fontWeight: '500',
          }}>
          Instagram
        </Text>
        <Feather name="navigation" style={{fontSize: 24}} />
      </View>

      <ScrollView>
        <Stories />
        <Post />
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
          <Ionic
            name="reload-circle-sharp"
            style={{fontSize: 60, opacity: 0.2}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;