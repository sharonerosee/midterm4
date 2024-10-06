import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { videoData, VideoData } from './Database'; // Import the VideoData type
import SingleReel from './SingleReel';

const ReelsComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Specify the state type

  const handleChangeIndexValue = ({ index }: { index: number }) => { // Define the parameter type
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({ item, index }: { item: VideoData; index: number }) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index.toString()} // Ensure keyExtractor returns a string
    />
  );
};

export default ReelsComponent;
