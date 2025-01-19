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

const SignUp = () => {
  const router = useRouter();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!usernameRef.current || !emailRef.current || !passwordRef.current) {
      Alert.alert('Please fill all the fields');
      return;
    }
    let name = usernameRef.current.trim();
    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();
    setLoading(true);
    const { data: { session }, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } }
    });
    setLoading(false);

    if (error) {
      Alert.alert(error.message);
    }
  };

  const onLoginPress = () => {
    router.push('/login');
  };

  return (
    <ScreenWrapper bg="#FFF"> {/* White background for light theme */}
      <StatusBar style="dark" /> {/* Dark status bar for light theme */}
      <View style={styles.container}>
        {/* Back Button */}
        <BackButton router={router} />

        {/* Welcome text */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Create an Account</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.signUpText}>Please fill in the details to sign up</Text>

          {/* Username Input */}
          <Input
            icon={<Icon name="user" size={26} strokeWidth={1.6} />}
            placeholder="Enter your username"
            onChangeText={(value) => (usernameRef.current = value)}
          />

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

          {/* Sign Up Button */}
          <Button title="Sign Up" loading={loading} onPress={onSubmit} />

          {/* Login Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <Pressable onPress={onLoginPress}>
              <Text style={styles.loginLink}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

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
  signUpText: {
    fontSize: hp(2.5),
    fontWeight: theme.fonts.medium,
    color: '#333', // Dark text for light theme
    textAlign: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(3),
  },
  loginText: {
    color: '#333', // Dark text for light theme
    fontSize: hp(1.8),
  },
  loginLink: {
    color: theme.colors.primary, // Green text for login link
    fontSize: hp(1.8),
    fontWeight: theme.fonts.bold,
  },
});
