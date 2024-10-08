import React, { useState } from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { videoData, VideoData } from './Database'; 
import SingleReel from './SingleReel';

const ReelsComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0); 

  const handleChangeIndexValue = ({ index }: { index: number }) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({ item }: { item: VideoData }) => (
        <SingleReel item={item} />
      )}
      keyExtractor={(item, index) => index.toString()} 
    />
  );
};

export default ReelsComponent;
