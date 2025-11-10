<template>
  <div class="academics-container p-8 bg-white rounded-lg shadow">
    <h1 class="text-3xl font-bold text-blue-800 mb-6 border-b pb-2">🎓 Academic Programs</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="course in courses" :key="course.slug" class="course-card bg-blue-50 rounded-lg shadow hover:shadow-md transition">
        <img :src="course.image" :alt="course.title" class="w-full h-48 object-cover rounded-t-lg" />
        <div class="p-4">
          <h2 class="text-xl font-semibold text-blue-900">{{ course.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const courses = [
      {
        title: "Mathematics",
        slug: "mathematics",
        image: "/assets/courses/math.jpg"
      },
      {
        title: "Science",
        slug: "science",
        image: "/assets/courses/science.jpg"
      },
      {
        title: "English Language",
        slug: "english-language",
        image: "/assets/courses/english.jpg"
      },
      {
        title: "Social Studies",
        slug: "social-studies",
        image: "/assets/courses/social.jpg"
      },
      {
        title: "Technology & ICT",
        slug: "technology-ict",
        image: "/assets/courses/tech.jpg"
      },
      {
        title: "Arts & Design",
        slug: "arts-design",
        image: "/assets/courses/arts.jpg"
      },
      {
        title: "Physical Education",
        slug: "physical-education",
        image: "/assets/courses/pe.jpg"
      }
    ];

    return { courses };
  }
};
</script>

<style scoped>
.course-card {
  overflow: hidden;
  border: 1px solid #dbeafe;
}
</style>