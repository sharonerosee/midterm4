import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ReelsComponent from '~/src/components/ReelsComponent';

const Reels: React.FC = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: 'relative',
        backgroundColor: 'black',
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
          paddingTop: 40
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 25}}>
          Reels
        </Text>
        <Feather name="camera" style={{ fontSize: 25, color: 'white', paddingTop: 25}} />
      </View>
      <ReelsComponent />
    </View>
  );
};

export default Reels;
