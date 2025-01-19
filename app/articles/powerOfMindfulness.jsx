import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import { theme } from '../../constants/theme';

const ThePowerOfMindfulness = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/images/article2.jpg')} // Example image
        style={styles.thumbnail}
        resizeMode="cover"
      />
      <Text style={styles.title}>The Power of Mindfulness</Text>
      <Text style={styles.content}>
        Mindfulness is the practice of staying present and fully engaged in the moment. It can help reduce stress, 
        improve focus, and promote overall well-being. In this article, we explore the benefits of mindfulness.
      </Text>

      <Text style={styles.sectionTitle}>1. The Science Behind Mindfulness</Text>
      <Text style={styles.content}>
        Research has shown that mindfulness can help reduce anxiety, enhance cognitive function, and improve emotional regulation. 
        Regular mindfulness practice can help rewire the brain, promoting greater emotional balance and resilience.
      </Text>

      <Text style={styles.sectionTitle}>2. Simple Mindfulness Practices</Text>
      <Text style={styles.content}>
        There are various ways to practice mindfulness. Some simple techniques include focusing on your breath, 
        observing your surroundings, or practicing mindful walking. The key is to stay present and avoid distractions.
      </Text>

      <Text style={styles.sectionTitle}>3. Incorporating Mindfulness Into Daily Life</Text>
      <Text style={styles.content}>
        Mindfulness doesn't have to be limited to formal meditation sessions. You can incorporate mindfulness into your daily activities, 
        such as eating, walking, or even washing dishes. The goal is to bring your full attention to the present moment in everything you do.
      </Text>

      <Text style={styles.sectionTitle}>4. Overcoming Common Challenges</Text>
      <Text style={styles.content}>
        Many people struggle with maintaining focus during mindfulness practice. It's normal for your mind to wander. 
        The key is to gently guide your attention back to the present moment without judgment. Consistency and patience are essential.
      </Text>

      <Text style={styles.conclusionTitle}>Conclusion:</Text>
      <Text style={styles.content}>
        The power of mindfulness lies in its simplicity and effectiveness. By making mindfulness a part of your daily routine, 
        you can cultivate greater awareness, reduce stress, and improve your overall quality of life.
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

export default ThePowerOfMindfulness;
