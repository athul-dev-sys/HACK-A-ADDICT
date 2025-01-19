import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import BackButton from './BackButton'; // Ensure this component exists
import { hp } from '../helpers/common';
import { theme } from '../constants/theme';

const Header = ({ title, showBackButton = true, mb = 10 }) => {
  const router = useRouter();
  return (
    <View style={[styles.container, { marginBottom: mb }]}>
      {/* Back Button */}
      {showBackButton && (
        <View style={styles.backButtonContainer}>
          <BackButton router={router} />
        </View>
      )}

      {/* Title */}
      <Text style={styles.title}>{title || ''}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center the content
    marginTop: 5,
    gap: 10,
  },
  backButtonContainer: {
    position: 'absolute',
    left: 10, // Adjust this value to add spacing from the left
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  title: {
    fontSize: hp(2.7),
    fontWeight: theme.fonts.semibold,
    color: theme.colors.textDark,
    textAlign: 'center',
  },
});
