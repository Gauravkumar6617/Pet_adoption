// BannerCarousel.tsx
import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const width = Dimensions.get('window').width;

const images = [
  require('../../assets/onBoarding/dog.png'),

];

const BannerCarousel = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Carousel
        loop
        width={width}
        height={200}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{
              width: '100%',
              height: 200,
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        )}
      />
    </View>
  );
};

export default BannerCarousel;
