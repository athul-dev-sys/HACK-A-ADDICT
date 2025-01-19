import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from '../constants/theme';

const articles = [
  {
    id: 'journeyToSobriety',
    title: 'The Journey to Sobriety',
    summary: 'Learn about the challenges and triumphs of staying sober.',
  },
  {
    id: 'powerOfMindfulness',
    title: 'The Power of Mindfulness',
    summary: 'Explore the benefits of practicing mindfulness in daily life.',
  },
  {
    id: 'buildingHealthyHabits',
    title: 'Building Healthy Habits',
    summary: 'Discover simple strategies for building lasting habits.',
  },
];

const Articles = () => {
  const router = useRouter();

  const handleArticleClick = (articleId) => {
    // Navigate to the individual article page
    router.push(`/articles/${articleId}`);
  };

  return (
    <ScrollView style={styles.container}>
      {articles.map((article) => (
        <TouchableOpacity
          key={article.id}
          style={styles.articleCard}
          onPress={() => handleArticleClick(article.id)}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.summary}>{article.summary}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Articles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.background,
  },
  articleCard: {
    marginBottom: 20, // Increased margin to separate articles
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg,
    padding: 16, // Increased padding for bigger container
    borderWidth: 1, // Outline added to the article card
    borderColor: theme.colors.gray, // Light gray outline color
  },
  textContainer: {
    paddingVertical: 12, // Increased vertical padding for better spacing
    borderWidth: 1, // Outline added to the text container
    borderColor: theme.colors.gray, // Light gray outline color
    borderRadius: theme.radius.sm, // Rounded corners for the text container
  },
  title: {
    fontSize: 20, // Increased title size
    fontWeight: 'bold',
    color: theme.colors.textDark,
  },
  summary: {
    fontSize: 16, // Increased font size for better readability
    color: theme.colors.textLight,
    marginTop: 8, // Added a margin for space between title and summary
  },
});
