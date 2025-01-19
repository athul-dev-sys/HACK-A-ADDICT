import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import { theme } from '../../constants/theme';

const BuildingHealthyHabits = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/images/c86c9b7a-4b7b-4fa6-8de5-ea09c205b35b.jpg')}
        style={styles.thumbnail}
        resizeMode="cover"
      />
      <Text style={styles.title}>Building Healthy Habits: A Guide to Sustainable Change</Text>

      <Text style={styles.content}>
        Building healthy habits requires time, patience, and consistency. In this article, we'll explore simple steps
        to help you establish and maintain habits that support a healthier lifestyle.
      </Text>

      <Text style={styles.sectionTitle}>1. Start Small and Set Realistic Goals</Text>
      <Text style={styles.content}>
        The key to creating lasting habits is to start small. Instead of overhauling your entire lifestyle overnight, 
        begin with manageable changes. For example, if you're trying to improve your physical activity, start with 10-minute daily workouts, 
        then gradually increase the time as your fitness improves.
      </Text>
      <Text style={styles.content}>
        Setting realistic goals is crucial. If your goal is too ambitious, you may become discouraged. Small, achievable goals 
        can build momentum and motivate you to keep going.
      </Text>

      <Text style={styles.sectionTitle}>2. Track Your Progress</Text>
      <Text style={styles.content}>
        Tracking your progress is an effective way to stay accountable. Whether it's keeping a journal, using an app, or simply 
        noting your achievements in a calendar, seeing your improvements over time can be incredibly rewarding. It helps you stay 
        motivated and recognize the positive changes you’re making in your life.
      </Text>

      <Text style={styles.sectionTitle}>3. Build a Routine</Text>
      <Text style={styles.content}>
        Consistency is one of the most important aspects of building habits. To turn a new behavior into a habit, make it a part 
        of your daily routine. For example, if you want to drink more water, try having a glass with every meal. Over time, this 
        will become second nature, and you'll be more likely to stick with it.
      </Text>

      <Text style={styles.sectionTitle}>4. Make It Enjoyable</Text>
      <Text style={styles.content}>
        The more enjoyable the process is, the more likely you are to stick with it. Find ways to make your new habits fun! If 
        you’re trying to eat healthier, experiment with new recipes or find a healthy snack you enjoy. When habits are enjoyable, 
        they’re easier to maintain.
      </Text>

      <Text style={styles.sectionTitle}>5. Stay Flexible</Text>
      <Text style={styles.content}>
        While consistency is key, it's also important to stay flexible. Life can be unpredictable, and sometimes things won’t go 
        according to plan. If you miss a workout or eat an unhealthy meal, don’t be too hard on yourself. The goal is to get back 
        on track, not to strive for perfection. Flexibility allows you to stay motivated without feeling discouraged when obstacles arise.
      </Text>

      <Text style={styles.sectionTitle}>6. Get Support</Text>
      <Text style={styles.content}>
        Building habits is easier when you have support. Whether it's a friend, family member, or support group, having someone to 
        share your journey with can help keep you accountable. A support system also provides encouragement when things get tough, 
        and it can make the process feel less isolating.
      </Text>

      <Text style={styles.sectionTitle}>7. Celebrate Your Wins</Text>
      <Text style={styles.content}>
        Finally, don’t forget to celebrate your successes, no matter how small they may seem. Every step forward is progress, and 
        taking the time to acknowledge your achievements can help you stay motivated. Whether it’s treating yourself to something special 
        or simply taking a moment to reflect on how far you've come, celebrating wins reinforces the positive changes you’re making.
      </Text>

      <Text style={styles.conclusionTitle}>Conclusion:</Text>
      <Text style={styles.content}>
        Building healthy habits doesn’t happen overnight, but with patience, consistency, and the right strategies, it’s possible 
        to create lasting changes. By starting small, tracking your progress, and staying flexible, you can establish habits that 
        improve your overall well-being and lead to a healthier lifestyle. Keep going—every step you take brings you closer to the life 
        you want to live.
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

export default BuildingHealthyHabits;
