import { defineStore } from 'pinia';
import api, { setToken } from '../services/api';


export const useAuthStore = defineStore('auth', {
state: () => ({ user: null, token: null }),
actions: {
async login(email, password) {
const res = await api.post('/auth/login', { email, password });
this.token = res.data.token;
this.user = res.data.user;
localStorage.setItem('token', this.token);
setToken(this.token);
},
logout() {
this.user = null; this.token = null; localStorage.removeItem('token'); setToken(null);
}
}
});