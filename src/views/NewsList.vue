<template>
  <div class="news-list-container">
    <h1 class="news-main-title">Latest School News</h1>
    <p class="news-intro">Stay informed with the latest updates, achievements, and events from our school community.</p>

    <div v-if="loading" class="text-center p-8">Loading news articles...</div>
    <div v-else-if="posts.length === 0" class="text-center p-8">
      <p>No news articles have been published yet.</p>
    </div>

    <div v-else class="post-grid">
      <div v-for="post in posts" :key="post._id" class="post-card">
        <h2 class="post-title">{{ post.title }}</h2>
        <p class="post-date">Published: {{ formatDate(post.publishedAt) }}</p>
        <p class="post-excerpt">{{ post.excerpt }}</p>
        
        <router-link :to="`/news/${post.slug}`" class="post-link">
          Read More →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import api from '../services/api';

export default {
  setup() {
    const posts = ref([]);
    const loading = ref(true);

    const fetchPosts = async () => {
      loading.value = true;
      try {
        // Fetches all published posts, sorted by publishedAt date (latest first)
        const res = await api.get('/cms/posts');
        posts.value = res.data;
      } catch (err) {
        console.error('Failed to fetch posts:', err);
      } finally {
        loading.value = false;
      }
    };

    // Helper function to format the date for display
    const formatDate = (dateString) => {
      if (!dateString) return 'N/A';
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    };

    onMounted(fetchPosts);

    return {
      posts,
      loading,
      formatDate
    };
  }
};
</script>

<style scoped>
/* Minimal CSS for structure and readability */
.news-list-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}
.news-main-title {
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 10px;
}
.news-intro {
  font-size: 1.1em;
  text-align: center;
  margin-bottom: 30px;
  color: #555;
}
.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}
.post-card {
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s;
}
.post-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.post-title {
  font-size: 1.5em;
  margin-top: 0;
  margin-bottom: 5px;
  color: #1e3a8a; /* Deep blue */
}
.post-date {
  font-size: 0.9em;
  color: #777;
  margin-bottom: 15px;
}
.post-excerpt {
  color: #333;
  margin-bottom: 15px;
}
.post-link {
  display: inline-block;
  color: #3b82f6; /* Blue 500 */
  text-decoration: none;
  font-weight: bold;
}
.post-link:hover {
  text-decoration: underline;
}
</style>