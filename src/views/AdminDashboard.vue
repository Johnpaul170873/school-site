<template>
  <div class="dashboard-container">
    <header class="dashboard-header">
      <h1 class="text-4xl font-bold text-blue-800">CMS Admin Dashboard</h1>
      <div class="user-info">
        <p>Welcome, <span class="font-semibold">{{ auth.user?.name || auth.user?.email || 'Admin' }}</span></p>
        <button @click="logout" class="btn-logout">Logout</button>
      </div>
    </header>

    <nav class="dashboard-nav">
      <button 
        @click="view = 'posts'" 
        :class="{'active-tab': view === 'posts'}" 
        class="tab-btn"
      >
        Manage News/Posts
      </button>
    </nav>

    <div class="dashboard-content">
      <div v-if="view === 'posts'">
        <h2 class="content-title">News & Announcements</h2>
        <CmsPostEditor @saved="fetchPosts" :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/api';
import CmsPostEditor from '../components/CMSPostEditor.vue';
import { useAuthStore } from '../store/auth';

export default {
  components: { CmsPostEditor },
  setup() {
    const view = ref('posts');
    const posts = ref([]);
    const auth = useAuthStore();
    const router = useRouter();

    const handleAuthError = (error) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        auth.logout();
        router.push('/admin/login');
      }
    };

    const fetchPosts = async () => {
      try {
        const res = await api.get('/cms/posts');
        posts.value = res.data;
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        handleAuthError(error);
      }
    };

    onMounted(() => {
      if (!auth.user || auth.user.role !== 'admin') {
        router.push('/admin/login');
      } else {
        fetchPosts();
      }
    });

    watch(view, (newView) => {
      if (newView === 'posts' && posts.value.length === 0) {
        fetchPosts();
      }
    });

    const logout = () => {
      auth.logout();
      router.push('/');
    };

    return {
      view,
      posts,
      fetchPosts,
      logout,
      auth
    };
  }
};
</script>

<style scoped>
.dashboard-container {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}
.dashboard-header {
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin-bottom: 25px;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 15px;
}
.user-info {
  text-align: right;
}
.btn-logout {
  margin-left: 15px;
  background: #ef4444;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9em;
  cursor: pointer;
  border: none;
}
.dashboard-nav {
  display: flex;
  margin-bottom: 30px;
  border-bottom: 2px solid #e0e0e0;
}
.tab-btn {
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  border: none;
  background: transparent;
  color: #4b5563;
  font-weight: 600;
  transition: color 0.3s;
}
.active-tab {
  color: #1e3a8a;
  border-bottom: 3px solid #1e3a8a;
  margin-bottom: -2px;
}
.content-title {
  font-size: 1.75em;
  margin-bottom: 20px;
  color: #1e3a8a;
}
</style>