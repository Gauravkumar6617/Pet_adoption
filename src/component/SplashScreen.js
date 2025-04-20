import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the OnBoarding screen with a slide-in-right animation
      navigation.reset({
        index: 0,
        routes: [{ name: 'OnBoarding' }],
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Top-left paw (no margin, bigger) */}
      <Image
        source={require('../../assets/onBoarding/Paw.png')}
        style={styles.topPaw}
      />

      {/* App Name Logo (no animation) */}
      <View style={styles.centerContent}>
        <Text style={styles.logoText}>
          P
          <Image
            source={require('../../assets/logo/logo.png')}
            style={styles.logoImage}
          />
          ws Connect
        </Text>
      </View>

      {/* Bottom-right tilted paw (no margin, bigger) */}
      <Image
        source={require('../../assets/onBoarding/Paw_2.png')}
        style={styles.bottomPaw}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E7ED4',
    position: 'relative',
    overflow: 'hidden',
  },
  topPaw: {
    position: 'absolute',
    top: 50,
    left: -50,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 52,
    fontWeight: 'bold',
    color: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Poppins-Bold',
  },
  logoImage: {
    width: 32,
    height: 32,
    marginHorizontal: 4,
    resizeMode: 'contain',
  },
  bottomPaw: {
    position: 'absolute',
    bottom: -50,
    right: -50,
    width: 250,
    height: 250,
    transform: [{ rotate: '-15deg' }],
    resizeMode: 'contain',
  },
});

export default SplashScreen;