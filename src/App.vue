<template>
  <div id="app" class="min-h-screen bg-gray-50 font-sans">
    <Navbar />
    <main class="container mx-auto p-4 sm:p-6 lg:p-8">
      <router-view />
    </main>
    <footer class="bg-blue-900 text-white p-4 mt-8 text-center text-sm">
      © {{ new Date().getFullYear() }} Concepcion Holy Cross College Inc. 
    </footer>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style scoped>
/* ✅ Global resets */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
}

/* ✅ Headings color */
h1, h2, h3 {
  color: #1e3a8a; /* Deep Blue */
}

/* ✅ Layout container */
.container {
  max-width: 1200px;
}

/* ✅ Buttons */
.btn-primary { 
  background-color: #3b82f6; /* Blue 500 */
  color: white; 
  padding: 0.5rem 1rem; 
  border-radius: 0.375rem; 
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #2563eb; /* Blue 600 */
}

/* ✅ Input fields */
.input-field {
  padding: 0.5rem;
  border: 1px solid #d1d5db; /* Gray 300 */
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  width: 100%;
}

/* ✅ Modern deep selectors (Vue 3 syntax) */

/* Style .nav-item inside Navbar.vue */
:deep(.nav-item) {
  color: #3b82f6; /* Blue 500 */
}

/* Style .footer-link inside footer or child components */
:deep(.footer-link) {
  text-decoration: underline;
}
</style>
