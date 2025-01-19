import { Image, StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import { StatusBar } from 'expo-status-bar';
import { wp, hp } from '../helpers/common';
import { theme } from '../constants/theme';
import Button from '../components/Button';
import { useRouter } from 'expo-router';

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="#FFF"> {/* Light background */} 
      <StatusBar style="dark" /> {/* Status bar style for light theme */}
      <View style={styles.container}>
        {/* Welcome Image */}
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/Sobriety.jpg")}
        />

        {/* Title and Punchline */}
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>SoberCircle</Text>
          <Text style={styles.punchline}>Empowering Recovery, Together</Text>
        </View>

        {/* Footer with Button */}
        <View style={styles.footer}>
          <Button
            title="Get Started"
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            onPress={() => router.push('signUp')}
          />
          <View style={{ marginTop: hp(2), flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.accountText}>Already have an account? </Text>
            <Pressable onPress={() => router.push('login')}>
              <Text style={styles.loginLink}>Login</Text>
            </Pressable>
          </View>
        </View>      
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: wp(4),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: 'center',
  },
  title: {
    color: '#333', // Dark text for light theme
    fontSize: hp(4),
    textAlign: 'center',
    fontWeight: theme.fonts.extraBold,
  },
  punchline: {
    paddingHorizontal: wp(10),
    color: '#666', // Lighter text for punchline
    fontSize: hp(1.7),
    textAlign: 'center',
  },
  footer: {
    marginTop: hp(5),
    width: wp(80),
  },
  button: {
    backgroundColor: theme.colors.primary, // Green button
    paddingVertical: 15,
    borderRadius: theme.radius.md,
  },
  buttonText: {
    color: '#FFF', // White text
    fontSize: hp(2),
    textAlign: 'center',
    fontWeight: theme.fonts.bold,
  },
  accountText: {
    color: '#333', // Dark text for light theme
    fontSize: hp(2),
  },
  loginLink: {
    color: theme.colors.primary, // Green text for login link
    fontSize: hp(2),
    fontWeight: 'bold',
  },
});
