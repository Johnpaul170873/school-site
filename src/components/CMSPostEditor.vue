<template>
  <div class="p-6 bg-white rounded-lg shadow-md">
    <h3 class="text-2xl font-bold text-blue-700 mb-4 border-b pb-2">📰 News Posts List</h3>

    <ul class="mb-6 divide-y divide-gray-200">
      <li v-for="post in posts" :key="post.id" class="flex justify-between items-center py-3">
        <span :class="{ 'text-gray-500 italic': !post.published }">
          {{ post.title }}
        </span>
        <div class="flex gap-2">
          <button @click="edit(post)" class="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-50">Edit</button>
          <button @click="deletePost(post.id)" class="px-3 py-1 text-sm border border-red-600 text-red-600 rounded hover:bg-red-50">Delete</button>
        </div>
      </li>
    </ul>

    <button @click="createNew" class="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
      + Create New Post
    </button>

    <div v-if="editing" class="border border-gray-200 p-6 rounded-lg bg-blue-50">
      <h4 class="text-xl font-semibold text-blue-800 mb-4">
        {{ editing.id ? 'Edit Post' : 'Create New Post' }}
      </h4>

      <div class="mb-4">
        <label class="block font-medium mb-1">Title</label>
        <input v-model="editing.title" placeholder="Post Title" class="w-full p-2 border rounded" />
      </div>

      <div class="mb-4">
        <label class="block font-medium mb-1">Slug (URL ending)</label>
        <input v-model="editing.slug" placeholder="post-title-for-url" class="w-full p-2 border rounded" />
      </div>

      <div class="mb-4">
        <label class="block font-medium mb-1">Excerpt (Short Summary)</label>
        <textarea v-model="editing.excerpt" rows="3" class="w-full p-2 border rounded"></textarea>
      </div>

      <div class="mb-4">
        <label class="block font-medium mb-1">Body (Main Content)</label>
        <textarea v-model="editing.body" rows="10" class="w-full p-2 border rounded"></textarea>
      </div>

      <div class="mb-4">
        <label class="block font-medium mb-1">Image or Video</label>
        <input type="file" @change="handleFileUpload" />
      </div>

      <div class="mb-4 flex items-center">
        <input type="checkbox" id="published" v-model="editing.published" class="mr-2" />
        <label for="published" class="text-sm">Published (Visible to public)</label>
      </div>

      <div class="flex gap-4 mt-6">
        <button @click="save" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save Post</button>
        <button @click="editing = null" class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import api from '../services/api';

export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const editing = ref(null);
    const mediaFile = ref(null);

    const edit = (p) => {
      editing.value = { ...p };
      mediaFile.value = null;
    };

    const createNew = () => {
      editing.value = {
        title: '',
        slug: '',
        excerpt: '',
        body: '',
        published: false
      };
      mediaFile.value = null;
    };

    const handleFileUpload = (e) => {
      mediaFile.value = e.target.files[0];
    };

    const save = async () => {
      try {
        if (!editing.value.title || !editing.value.slug || !editing.value.body) {
          alert("Please fill in all required fields.");
          return;
        }

        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };

        const formData = new FormData();
        formData.append("title", editing.value.title);
        formData.append("slug", editing.value.slug);
        formData.append("excerpt", editing.value.excerpt || "");
        formData.append("body", editing.value.body);
        formData.append("published", editing.value.published);
        if (mediaFile.value) {
          formData.append("media", mediaFile.value);
        }
        if (editing.value.published && !editing.value.publishedAt) {
      formData.append("publishedAt", new Date().toISOString());
    }


        if (editing.value.id) {
          await api.put(`/cms/posts/${editing.value.id}`, formData, {
            headers: {
              ...headers,
              "Content-Type": "multipart/form-data"
            }
          });


        } 
        if (!editing.value.id && editing.value.published) {
  formData.append("publishedAt", new Date().toISOString());
}
        else {
          await api.post('/cms/posts', formData, {
            headers: {
              ...headers,
              "Content-Type": "multipart/form-data"
            }
          });
        }

        alert('Post saved successfully!');
        emit('saved');
        editing.value = null;
        mediaFile.value = null;
      } catch (e) {
        alert('Failed to save post. Check for unique slug or login status.');
      }
    };

    const deletePost = async (id) => {
      if (!confirm('Are you sure you want to delete this post?')) return;
      try {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };

        await api.delete(`/cms/posts/${id}`, { headers });
        alert('Post deleted!');
        emit('saved');
      } catch (e) {
        alert('Failed to delete post.');
      }
    };

    return { editing, edit, createNew, save, deletePost, handleFileUpload };
  }
};
</script>