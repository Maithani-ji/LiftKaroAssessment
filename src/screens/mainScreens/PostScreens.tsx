import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import { useTheme } from '../../context/ThemeContext';         // For dynamic theming
import { apiService } from '../../services/apiService';        // API call for posts
import { useApi } from '../../hooks/useApi';                   // Custom hook to handle API logic
import { PostsScreenProps } from '../../types/navigation';     // Type for navigation props
import PostCard from '../../components/PostCard';              // UI component to display each post

// Interface for a Post object
interface Post {
  id: number;
  title: string;
  body: string;
}

const PostsScreen: React.FC<PostsScreenProps> = () => {
  const { theme } = useTheme();                      // Access current theme
  const [refreshing, setRefreshing] = useState(false); // State to control pull-to-refresh

  // useApi hook fetches data and handles loading/error state
  const {
    data: posts,
    loading,
    error,
    refetch,
  } = useApi<Post[]>(() => apiService.fetchPosts(10)); // Fetch 10 posts from API

  // Pull-to-refresh handler
  const handleRefresh = async () => {
    try {
      setRefreshing(true);
      await refetch(); // Re-fetch posts
    } finally {
      setRefreshing(false);
    }
  };

  // Show loading indicator while fetching
  if (loading && !refreshing) {
    return (
      <View style={[styles.centeredContainer, { backgroundColor: theme.colors.background }]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  // Show error message if something went wrong
  if (error) {
    return (
      <View style={[styles.centeredContainer, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.errorText, { color: theme.colors.notification }]}>{error}</Text>
      </View>
    );
  }

  // Render list of posts
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostCard title={item.title} body={item.body} /> // Show each post using PostCard component
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        refreshing={refreshing}
        onRefresh={handleRefresh} // Pull-to-refresh
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PostsScreen;
