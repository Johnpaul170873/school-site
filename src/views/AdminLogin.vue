<template>
  <div class="flex items-center justify-center min-h-[70vh]">
    <div class="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
      <h2 class="text-3xl font-extrabold text-center mb-6 text-blue-700">🔒 Admin Login</h2>
      <form @submit.prevent="doLogin" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input id="email" v-model="email" placeholder="admin@school.com" type="email" required class="input-field mt-1" />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input id="password" v-model="password" placeholder="••••••••" type="password" required class="input-field mt-1" />
        </div>
        <button type="submit" class="w-full btn-primary mt-4">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const auth = useAuthStore();
    const router = useRouter();

    const doLogin = async () => {
      try {
        await auth.login(email.value, password.value);
        router.push('/admin');
      } catch (err) {
        alert('Login failed. Check credentials.');
      }
    };

    return { email, password, doLogin };
  }
};
</script>

<style scoped>
.input-field {
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  width: 100%;
}
.btn-primary {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
}
.btn-primary:hover {
  background-color: #2563eb;
}
</style>
