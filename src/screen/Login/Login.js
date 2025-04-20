import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react'; // Added useRef and useEffect
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Easing,
} from 'react-native';

const primaryColor = '#1E7ED4';
const secondaryColor = '#F8BB86';
const backgroundColor = 'white';

const Login = () => {
  const navigation = useNavigation();
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [scaleValue] = useState(new Animated.Value(1));
  const logoOpacity = useRef(new Animated.Value(0)).current; // Opacity for logo animation

  useEffect(() => {
    // Fade in the logo on mount
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = () => {
    navigation.navigate('HomeScreen');
    console.log('Logging in with:', { gmail, password });

    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.95,
        duration: 50,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleGoogleLogin = () => {
    console.log('Logging in with Google');
    alert('Google Login functionality not implemented yet.');
  };

  const handleFacebookLogin = () => {
    console.log('Logging in with Facebook');
    alert('Facebook Login functionality not implemented yet.');
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../../assets/onBoarding/dog.png')}
        style={[
          styles.logo,
          { transform: [{ scale: scaleValue }], opacity: logoOpacity },
        ]} // Apply opacity animation
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Login to find your furry friend.</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Gmail"
          keyboardType="email-address"
          value={gmail}
          onChangeText={setGmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.separator}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>or</Text>
        <View style={styles.separatorLine} />
      </View>

      <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
        <Image
          source={require('../../../assets/logo/logo.png')} // Changed to google logo
          style={styles.socialIcon}
          resizeMode="contain"
        />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
        <Image
          source={require('../../../assets/logo/logo.png')} // Changed to facebook logo
          style={styles.socialIcon}
          resizeMode="contain"
        />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: backgroundColor,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'sans-serif-light',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'sans-serif-light',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  loginButton: {
    backgroundColor: primaryColor,
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-light',
  },
  forgotPasswordButton: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: '#555',
    fontSize: 14,
    fontFamily: 'sans-serif-light',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  separatorText: {
    paddingHorizontal: 10,
    color: '#777',
    fontSize: 14,
    fontFamily: 'sans-serif-light',
  },
  socialButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 25,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  socialIcon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    fontFamily: 'sans-serif-light',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  signupText: {
    color: primaryColor,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-light',
  },
});

export default Login;