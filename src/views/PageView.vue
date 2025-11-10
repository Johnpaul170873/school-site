<template>
  <div class="page-view-container">
    <div v-if="loading" class="text-center p-8">Loading content...</div>
    <div v-else-if="!page" class="text-center p-8">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist or is not published.</p>
    </div>

    <div v-else>
      <h1 class="page-title">{{ page.title }}</h1>
      <div class="page-content" v-html="page.content"></div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import api from '../services/api';

export default {
  setup() {
    const route = useRoute();
    const page = ref(null);
    const loading = ref(true);

    const fetchPage = async (slug) => {
      loading.value = true;
      page.value = null; // Clear previous content
      try {
        const res = await api.get(`/cms/pages/${slug}`);
        page.value = res.data;
      } catch (err) {
        // Handle 404 error from the server (if page not found/published)
        console.error('Failed to fetch page:', err);
        page.value = null; 
      } finally {
        loading.value = false;
      }
    };

    // 1. Fetch the page when the component is first mounted
    onMounted(() => {
      fetchPage(route.params.slug);
    });

    // 2. Watch the route slug for changes (e.g., navigating from /page/about to /page/academics)
    watch(
      () => route.params.slug,
      (newSlug) => {
        if (newSlug) {
          fetchPage(newSlug);
        }
      },
      { immediate: true } // Run immediately on component mount too, though onMounted handles it
    );

    return {
      page,
      loading
    };
  }
};
</script>

<style scoped>
/* Minimal CSS to avoid relying on a framework */
.page-view-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.page-title {
  font-size: 2em;
  margin-bottom: 15px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}
.page-content {
  line-height: 1.6;
}
/* You may need more styles here to format the content rendered by v-html */
</style>