import React, { useRef, useState } from 'react';
import { Alert, StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../constants/theme';
import { wp, hp } from '../helpers/common';
import ScreenWrapper from '../components/ScreenWrapper'; // Ensure it's correctly imported
import Input from '../components/Input'; // Ensure it's correctly imported
import Icon from '../assets/icons'; // Ensure it's correctly imported
import BackButton from '../components/BackButton'; // Ensure it's correctly imported
import Button from '../components/Button'; // Ensure it's correctly imported
import { supabase } from '../lib/supabase';

const Login = () => {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert('Please enter email and password');
      return;
    }
    const email = emailRef.current.trim();
    const password = passwordRef.current.trim();
    
    setLoading(true);
    try {
      const { error, user } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setLoading(false);
  
      if (error) {
        Alert.alert(error.message);
      } else {
        Alert.alert('Login successful');
        // Redirect after successful login
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      Alert.alert('An unexpected error occurred.');
      setLoading(false);
    }
  };
  

  const onSignUpPress = () => {
    // Navigate to sign up screen (replace with actual route)
    router.push('/signUp');
  };

  return (
    <ScreenWrapper bg="#FFF"> {/* White background for light theme */}
      <StatusBar style="dark" /> {/* Dark status bar for light theme */}
      <View style={styles.container}>
        {/* Back Button */}
        <BackButton router={router} />
        
        {/* Welcome text */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.loginText}>Please login to continue</Text>
          
          {/* Email Input */}
          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder="Enter your email"
            onChangeText={(value) => (emailRef.current = value)}
          />
          
          {/* Password Input */}
          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(value) => (passwordRef.current = value)}
          />
          
          {/* Forgot Password */}
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          
          {/* Login Button */}
          <Button title="Login" loading={loading} onPress={onSubmit} />
          
          {/* Sign Up Text */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <Pressable onPress={onSignUpPress}>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  welcomeContainer: {
    marginTop: hp(5),
    marginBottom: hp(3),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: '#333', // Dark text for light theme
  },
  form: {
    gap: 25,
  },
  loginText: {
    fontSize: hp(2.5),
    fontWeight: theme.fonts.medium,
    color: '#333', // Dark text for light theme
    textAlign: 'center',
  },
  forgotPasswordText: {
    color: '#333', // Dark text for light theme
    textAlign: 'right',
    fontSize: hp(1.8),
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(3),
  },
  signUpText: {
    color: '#333', // Dark text for light theme
    fontSize: hp(1.8),
  },
  signUpLink: {
    color: theme.colors.primary, // Use primary color for Sign Up text
    fontSize: hp(1.8),
    fontWeight: theme.fonts.bold,
  },
});
 