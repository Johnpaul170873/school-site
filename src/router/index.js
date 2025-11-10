import { createRouter, createWebHistory } from 'vue-router';
import PublicHome from '../views/PublicHome.vue';
import PageView from '../views/PageView.vue';
import NewsList from '../views/NewsList.vue';
import PostView from '../views/PostView.vue'; // <-- ADD THIS LINE
import AdminLogin from '../views/AdminLogin.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import { useAuthStore } from '../store/auth';


const routes = [
  { path: '/', component: PublicHome },
  // Public Pages (e.g., /page/about, /page/academics)
  { path: '/page/:slug', component: PageView }, 
  
  // News Section
  { path: '/news', component: NewsList },
  { path: '/news/:slug', component: PostView }, // Route for reading a single post
  
  // Admin Section
  { path: '/admin/login', component: AdminLogin },
  { path: '/admin', component: AdminDashboard, meta: { requiresAdmin: true } },
  { path: '/', component: PublicHome }

];


const router = createRouter({ history: createWebHistory(), routes });


router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  
  // Check if the route requires admin privileges
  if (to.meta.requiresAdmin) {
    // If user is not logged in OR user role is not 'admin', redirect to login
    if (!auth.user || auth.user.role !== 'admin') {
      // Ensure we don't cause an infinite loop by redirecting back to /admin/login 
      if (to.path !== '/admin/login') {
         return next('/admin/login');
      }
    }
  }
  next();
});


export default router;