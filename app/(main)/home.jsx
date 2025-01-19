import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import ScreenWrapper from '../../components/ScreenWrapper';
import { theme } from '../../constants/theme';
import { wp, hp } from '../../helpers/common';
import Icon from '../../assets/icons';
import { useRouter } from 'expo-router';
import Avatar from '../../components/Avatar';
import { fetchPosts } from '../../services/postService';
import PostCard from '../../components/PostCard';
import Loading from '../../components/Loading'; // Ensure this is implemented
import { supabase } from '../../lib/supabase';
import { getUserData } from './../../services/userService';

let limit = 0;

const Home = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handlePostEvent = async (payload) => {
    if (payload.eventType === 'INSERT' && payload?.new?.id) {
      let newPost = { ...payload.new };
      let res = await getUserData(newPost.userId);
      newPost.user = res.success ? res.data : {};
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    }
  };

  useEffect(() => {
    let postChannel = supabase
      .channel('posts')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'posts' }, handlePostEvent)
      .subscribe();

    return () => {
      supabase.removeChannel(postChannel);
    };
  }, []);

  const getPosts = async () => {
    if (loading || !hasMore) return null;
    setLoading(true);
    limit += 4;
    let res = await fetchPosts(limit);

    if (res.success) {
      if (posts.length === res.data.length) setHasMore(false);
      setPosts(res.data);
    }
    setLoading(false);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>SoberCircle</Text>
          <View style={styles.icons}>
            <Pressable onPress={() => router.push('notifications')}>
              <Icon name="heart" size={hp(3.2)} strokeWidth={2} color={theme.colors.text} />
            </Pressable>
            <Pressable onPress={() => router.push('newPost')}>
              <Icon name="plus" size={hp(3.2)} strokeWidth={2} color={theme.colors.text} />
            </Pressable>
            <Pressable onPress={() => router.push('profile')}>
              <Avatar uri={user?.image} size={hp(4.3)} rounded={theme.radius.sm} style={{ borderWidth: 2 }} />
            </Pressable>
          </View>
        </View>

        <FlatList
          data={posts}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listStyle}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <PostCard item={item} currentUser={user} router={router} />
          )}
          onEndReached={() => {
            getPosts();
          }}
          onEndReachedThreshold={0}
          ListFooterComponent={
            hasMore ? (
              <View style={{ marginVertical: posts.length === 0 ? 200 : 30 }}>
                <Loading />
              </View>
            ) : (
              <View style={{ marginVertical: 30 }}>
                <Text style={styles.noPosts}>No more Posts</Text>
              </View>
            )
          }
        />

        {/* Bottom navigation buttons */}
        <View style={styles.bottomNav}>
          <Pressable onPress={() => router.push('tracker')} style={styles.navButton}>
            <Icon name="search" size={hp(3.2)} strokeWidth={2} color={theme.colors.text} />
            <Text style={styles.navText}>Tracker</Text>
          </Pressable>
          <Pressable onPress={() => router.push('emergency')} style={styles.navButton}>
            <Icon name="call" size={hp(3.2)} strokeWidth={2} color={theme.colors.text} />
            <Text style={styles.navText}>Emergency</Text>
          </Pressable>
          <Pressable onPress={() => router.push('articles')} style={styles.navButton}>
            <Icon name="comment" size={hp(3.2)} strokeWidth={2} color={theme.colors.text} />
            <Text style={styles.navText}>Articles</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: wp(4),
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(3.2),
    fontWeight: theme.fonts.bold,
  },
  avatarImage: {
    height: hp(4.3),
    width: hp(4.3),
    borderRadius: theme.radius.sm,
    borderCurve: 'continuous',
    borderColor: theme.colors.gray,
    borderWidth: 3,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
  },
  listStyle: {
    paddingTop: 20,
    paddingHorizontal: wp(4),
  },
  noPosts: {
    textAlign: 'center',
    color: theme.colors.gray,
    fontSize: hp(2.4),
    fontWeight: '500',
    marginVertical: 10,
    opacity: 0.8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: 'white',
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    color: theme.colors.text,
    fontSize: hp(1.8),
    marginTop: 5,
  },
});
