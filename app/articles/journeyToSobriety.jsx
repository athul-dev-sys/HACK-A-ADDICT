import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import { theme } from '../../constants/theme';

const TheJourneyToSobriety = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/images/59ba07cb-4da3-4cd0-9e6b-babcb6e0eb63.jpg')}
        style={styles.thumbnail}
        resizeMode="cover"
      />
      <Text style={styles.title}>The Journey to Sobriety</Text>
      <Text style={styles.content}>
        Learn about the challenges and triumphs of staying sober. Sobriety is a long-term process that requires dedication, 
        support, and self-discipline. In this article, we explore the journey that many people face when staying sober.
      </Text>

      <Text style={styles.sectionTitle}>1. Acknowledging the Challenge</Text>
      <Text style={styles.content}>
        Sobriety starts with accepting the need for change. This step often involves acknowledging the harmful impacts 
        of substance use on one's physical, mental, and emotional well-being. Recognizing that change is necessary is a crucial first step.
      </Text>

      <Text style={styles.sectionTitle}>2. Building a Support Network</Text>
      <Text style={styles.content}>
        One of the most important aspects of sobriety is having a strong support system. Whether it’s friends, family, or 
        professional support groups, having people to lean on can make a huge difference. A support network offers encouragement, 
        understanding, and accountability during tough times.
      </Text>

      <Text style={styles.sectionTitle}>3. Developing New Coping Mechanisms</Text>
      <Text style={styles.content}>
        Staying sober often involves learning new ways to cope with stress and emotions. Developing healthy coping mechanisms 
        like exercise, mindfulness, or creative activities can help manage triggers and prevent relapse.
      </Text>

      <Text style={styles.sectionTitle}>4. Celebrating Milestones</Text>
      <Text style={styles.content}>
        Every milestone in the sobriety journey deserves recognition. Whether it's one week, one month, or one year of sobriety, 
        celebrating these achievements helps to reinforce the commitment to a sober life.
      </Text>

      <Text style={styles.conclusionTitle}>Conclusion:</Text>
      <Text style={styles.content}>
        Sobriety is an ongoing journey, not a destination. It's about embracing the process, learning from setbacks, 
        and celebrating progress along the way. With support and perseverance, staying sober is entirely possible.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.background,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderRadius: theme.radius.lg,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.textDark,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.textDark,
    marginTop: 14,
  },
  content: {
    fontSize: 16,
    color: theme.colors.text,
    lineHeight: 24,
    marginTop: 8,
  },
  conclusionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.textDark,
    marginTop: 20,
  },
});

export default TheJourneyToSobriety;
