<template>
  <header class="bg-blue-800 text-white shadow-lg">
    <div class="container mx-auto flex justify-between items-center p-4">
      <router-link to="/" class="text-2xl font-bold tracking-wider">
         Concepcion Holy Cross College
      </router-link>
      <nav class="space-x-4">
        <router-link to="/" class="hover:text-blue-200 transition">Home</router-link>
      <!-- <router-link to="/page/about" class="hover:text-blue-200 transition">About</router-link>
        <router-link to="/page/academics" class="hover:text-blue-200 transition">Academics</router-link>--> 
        <router-link to="/news" class="hover:text-blue-200 transition">News</router-link>
        <router-link to="/admin" class="ml-4 px-3 py-1 bg-white text-blue-800 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
          Admin
        </router-link>
      </nav>
    </div>  
  </header>
</template>