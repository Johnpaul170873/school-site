<script setup>
import { ref, onMounted } from 'vue'
import api from '../api.js'  // 👈 import your Axios instance

defineProps({
  msg: String,
})

const count = ref(0)
const news = ref([])

// Fetch sample data when the component loads
onMounted(async () => {
  try {
    const res = await api.get('/news')
    news.value = res.data
  } catch (err) {
    console.error('Error fetching news:', err)
  }
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <h2>Latest News (from backend)</h2>
  <ul>
    <li v-for="item in news" :key="item._id">{{ item.title }}</li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
