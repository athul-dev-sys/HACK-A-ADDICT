import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { hp, wp } from '../../helpers/common';
import Icon from '../../assets/icons';

const Tracker = () => {
  const router = useRouter();
  const [days, setDays] = useState(0);
  const [loggedToday, setLoggedToday] = useState(false);

  const handleLog = () => {
    if (loggedToday) {
      Alert.alert('Already Logged', 'You can only log once a day.');
      return;
    }
    setDays(prevDays => prevDays + 1);
    setLoggedToday(true);
  };

  const handleRelapse = () => {
    setDays(0);
    setLoggedToday(false);
    router.push('emergency');
  };

  const handleBack = () => {
    router.back();
  };

  const getAppreciationMessage = () => {
    if (days === 0) return 'Begin your journey today. Every step counts!';
    if (days <= 7) return 'Great start! Keep the momentum going!';
    if (days <= 30) return 'Amazing progress! Stay strong—you’re doing great!';
    if (days <= 90) return 'Three months of strength! You’re unstoppable!';
    if (days <= 365) return 'Incredible dedication. Almost a year sober!';
    return 'You’re a true inspiration. Keep leading the way!';
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={handleBack} style={styles.backButton}>
          <Icon name="arrowLeft" size={hp(3.2)} strokeWidth={2} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.title}>SoberTracker</Text>
      </View>

      {/* Tracker Section */}
      <View style={styles.trackerSection}>
        <View style={styles.counterContainer}>
          <View style={styles.circle}>
            <Text style={styles.counterText}>{days}</Text>
          </View>
          <Text style={styles.dayText}>Days Sober</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <Pressable onPress={handleLog} style={[styles.button, styles.logButton]}>
            <Text style={styles.buttonSymbol}>+</Text>
            <Text style={styles.buttonText}>Log</Text>
          </Pressable>
          <Pressable onPress={handleRelapse} style={[styles.button, styles.relapseButton]}>
            <Text style={styles.buttonSymbol}>-</Text>
            <Text style={styles.buttonText}>Relapse</Text>
          </Pressable>
        </View>
      </View>

      {/* Motivational Text */}
      <View style={styles.motivationSection}>
        <Text style={styles.motivationText}>{getAppreciationMessage()}</Text>
      </View>
    </View>
  );
};

export default Tracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
    backgroundColor: '#000000', // Pitch black background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: hp(4),
  },
  backButton: {
    position: 'absolute',
    left: wp(4),
    top: 0,
  },
  title: {
    fontSize: hp(3),
    fontWeight: '600',
    color: '#FFFFFF', // White title text
    textAlign: 'center',
  },
  trackerSection: {
    alignItems: 'center',
    marginTop: hp(6), // Adjusted to shift upward
  },
  counterContainer: {
    alignItems: 'center',
    marginBottom: hp(3), // Space between counter and buttons
  },
  circle: {
    width: hp(16),
    height: hp(16),
    borderRadius: hp(8),
    borderWidth: 5,
    borderColor: '#4CAF50', // Warm green border
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  counterText: {
    fontSize: hp(5),
    color: '#4CAF50', // Warm green text
    fontWeight: 'bold',
  },
  dayText: {
    fontSize: hp(2.2),
    color: '#FFFFFF', // White text for day label
    opacity: 0.8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: hp(2),
  },
  button: {
    paddingVertical: hp(1.8),
    paddingHorizontal: wp(5),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  logButton: {
    backgroundColor: '#4CAF50', // Warm green for log button
  },
  relapseButton: {
    backgroundColor: '#FF6347', // Warm red for relapse button
  },
  buttonSymbol: {
    color: '#FFFFFF', // White text for buttons
    fontSize: hp(3),
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#FFFFFF', // White text for buttons
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  motivationSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(6),
  },
  motivationText: {
    fontSize: hp(2),
    color: '#FFFFFF', // White text for motivational message
    textAlign: 'center',
    marginVertical: hp(1),
    fontStyle: 'italic',
  },
});
