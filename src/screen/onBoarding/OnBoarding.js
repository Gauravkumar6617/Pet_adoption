import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

const OnBoarding = () => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get('window').height;

  const handleContinue = () => {
    navigation.navigate("Login")

  };

  return (
    <View style={styles.screen}>
      <View style={[styles.container, { height: screenHeight * 0.4 }]}>
        <Image
          source={require('../../../assets/onBoarding/dog.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome to Paws{'\n'}Connect !</Text>
        <Text style={styles.welcomeSubText}>
          Connect securely with potential foster{'\n'}
          parents through our app.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    width: '100%',
    backgroundColor: '#bbdcfa',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 240,
    borderBottomRightRadius: 240,
    overflow: 'hidden',
  },
  image: {
    width: '80%',
    height: '80%',
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    gap: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: '#333',
  },
  welcomeSubText: {
    color: '#666',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    padding: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1E7ED4',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '100%',
    maxWidth: 300,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default OnBoarding;
