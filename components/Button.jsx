import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';

const Button = ({ title, onPress, buttonStyle, textStyle, hasShadow = true, loading = false }) => {
  if (loading) {
    return (
      <View style={[styles.button, buttonStyle, { backgroundColor: 'white' }]}>
        <Loading />
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        buttonStyle,
        hasShadow && styles.shadowStyle,
      ]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00C26F', // Green button
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  shadowStyle: {
    shadowColor: '#FFFFFF', // White shadow color
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 10, // For Android
  },
});
