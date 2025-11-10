<template>
  <div class="post-view-container">
    <div v-if="loading" class="text-center p-8">Loading news article...</div>
    <div v-else-if="!post" class="text-center p-8">
      <h1 class="text-3xl font-bold text-red-600">Post Not Found (404)</h1>
      <p class="text-lg text-gray-700 mt-2">The requested news article does not exist or has been removed.</p>
    </div>

    <div v-else>
      <header class="post-header">
        <h1 class="post-title">{{ post.title }}</h1>
        <p class="post-meta">
          Published on:
          <span class="font-semibold">{{ formatDate(post.publishedAt) }}</span>
        </p>
      </header>

      <!-- ✅ Media Preview -->
      <div v-if="mediaUrl" class="post-media mb-6">
        <img
          v-if="isImage"
          :src="mediaUrl"
          class="w-full max-h-96 object-cover rounded"
        />
        <video
          v-else
          controls
          class="w-full max-h-96 rounded"
        >
          <source :src="mediaUrl" />
        </video>
      </div>

      <div class="post-body" v-html="post.body"></div>

      <router-link to="/news" class="btn-primary mt-8 inline-block">
        ← Back to All News
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import api from '../services/api';

export default {
  setup() {
    const route = useRoute();
    const post = ref(null);
    const loading = ref(true);

    const fetchPost = async (slug) => {
      loading.value = true;
      post.value = null;
      try {
        const res = await api.get(`/cms/posts/${slug}`);
        post.value = res.data;
      } catch (err) {
        console.error('Failed to fetch post:', err);
      } finally {
        loading.value = false;
      }
    };

   
const formatDate = (dateString) => {
    if (!dateString || dateString === 'null') return 'November 8, 2025';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

    const mediaUrl = computed(() => {
      return post.value?.media ? `http://localhost:4000/uploads/${post.value.media}` : null;
    });

    const isImage = computed(() => {
      return mediaUrl.value?.match(/\.(jpg|jpeg|png|gif)$/i);
    });

    onMounted(() => fetchPost(route.params.slug));
    watch(() => route.params.slug, fetchPost);

    return {
      post,
      loading,
      formatDate,
      mediaUrl,
      isImage
    };
  }
};
</script>

<style scoped>
.post-view-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.post-header {
  border-bottom: 3px solid #1e3a8a;
  padding-bottom: 15px;
  margin-bottom: 25px;
}
.post-title {
  font-size: 2.5em;
  margin-bottom: 5px;
}
.post-meta {
  color: #555;
  font-size: 0.9em;
}
.post-body {
  line-height: 1.7;
}
.post-body >>> p {
  margin-bottom: 1.2em;
}
.post-media {
  margin-bottom: 20px;
}
</style>