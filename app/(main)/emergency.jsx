import React from 'react';
import { Alert, Button, Linking, View, StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import for navigation

const EmergencyPage = () => {
  const navigation = useNavigation(); // Hook for navigation

  // Function to make an emergency call
  const makeEmergencyCall = () => {
    const emergencyNumber = 'tel:1800-11-0031'; // Emergency number (e.g., 911 for most places)
    
    Linking.canOpenURL(emergencyNumber)
      .then((supported) => {
        if (supported) {
          Linking.openURL(emergencyNumber); // Opens the phone dialer to make the call
        } else {
          Alert.alert('Error', 'Unable to place an emergency call');
        }
      })
      .catch((error) => {
        Alert.alert('Error', 'An error occurred while trying to make the call');
      });
  };

  // Function to find nearest rehabilitation center
  const findNearestRehabCenter = async () => {
    const location = 'drug rehabilitation center'; // You can modify this to be dynamic based on the user's location
    const url = `https://www.google.com/maps/search/${encodeURIComponent(location)}`;

    const supported = await Linking.canOpenURL(url);

    if (supported) {
      Linking.openURL(url); // Opens Google Maps with the search query
    } else {
      Alert.alert('Error', 'Unable to open Google Maps');
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text> {/* Text "Back" instead of arrow */}
      </Pressable>

      {/* Title */}
      <Text style={styles.title}>Emergency Assistance</Text>

      {/* Description Text */}
      <Text style={styles.description}>
        If you're feeling overwhelmed, remember you're not alone. A helpline counselor is just a call away. Take the first step towards help now.
      </Text>

      {/* Emergency Call Button */}
      <Button title="Call Emergency Services" onPress={makeEmergencyCall} color="#FF6347" style={styles.button} />

      {/* Spacer */}
      <View style={styles.spacer} />

      {/* Find Nearest Rehab Center Button */}
      <Button title="Find Nearest Rehab Center" onPress={findNearestRehabCenter} color="#4B0082" style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#121212', // Dark background for dark mode
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 12,
    backgroundColor: '#333', // Dark background color for the back button
    borderRadius: 25, // Round button
    width: 80, // Increase width for "Back" text
    height: 50,
    justifyContent: 'center', // Center the text inside the button
    alignItems: 'center', // Center the text inside the button
  },
  backButtonText: {
    color: '#FFFFFF', // White color for the back button text
    fontSize: 18, // Adjust font size for "Back"
    fontWeight: 'bold', // Bold text for emphasis
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text for title
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF', // White text for description
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  spacer: {
    height: 20,
  },
  button: {
    height: 60, // Make the button taller
    fontSize: 18, // Increase font size for the button title
    marginVertical: 10, // Add space between buttons
  },
});

export default EmergencyPage;
