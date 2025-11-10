<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- Header Section -->
    <section class="bg-blue-600 text-white py-16 px-6 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">About CHCCI</h1>
      <p class="text-lg md:text-xl max-w-2xl mx-auto">
        Committed to Excellence in Education and Community Development.
      </p>
    </section>

    <!-- Mission, Vision, Core Values -->
    <section class="py-16 px-6 max-w-6xl mx-auto">
      <h2 class="text-3xl font-semibold text-center mb-12">Mission, Vision & Core Values</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold mb-3">Mission</h3>
          <p>To provide quality education that empowers students to succeed academically, socially, and professionally.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold mb-3">Vision</h3>
          <p>To be a leading institution that inspires lifelong learning and community impact.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-xl font-bold mb-3">Core Values</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Integrity</li>
            <li>Excellence</li>
            <li>Innovation</li>
            <li>Collaboration</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Short Description / History -->
    <section class="bg-gray-100 py-16 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-semibold mb-6">About CHCCI</h2>
        <p class="text-lg leading-relaxed">
          CHCCI (City Higher College of Community Innovation) is a renowned institution committed to providing
          quality education and community engagement. Founded with the vision of nurturing innovative leaders, 
          CHCCI continuously strives for academic excellence and holistic student development.
        </p>
      </div>
    </section>

    <!-- Faculty & Staff Listing -->
    <section class="py-16 px-6 max-w-6xl mx-auto">
      <h2 class="text-3xl font-semibold text-center mb-12">Our Faculty & Staff</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="staff in staffList" :key="staff.id" class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <img :src="staff.photo" alt="" class="w-24 h-24 mx-auto rounded-full mb-4 object-cover">
          <h3 class="text-xl font-bold mb-1">{{ staff.name }}</h3>
          <p class="text-gray-600 mb-2">{{ staff.position }}</p>
          <p class="text-gray-500 text-sm">{{ staff.bio }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      staffList: [
        {
          id: 1,
          name: "Dr. Maria Santos",
          position: "Dean of Science",
          bio: "Passionate about STEM education and student mentorship.",
          photo: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          id: 2,
          name: "Prof. John Cruz",
          position: "Head of Mathematics Department",
          bio: "Focused on innovative teaching and research excellence.",
          photo: "https://randomuser.me/api/portraits/men/46.jpg",
        },
        {
          id: 3,
          name: "Ms. Liza Reyes",
          position: "Guidance Counselor",
          bio: "Dedicated to supporting students' academic and emotional growth.",
          photo: "https://randomuser.me/api/portraits/women/48.jpg",
        },
        // Add more staff here as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Optional: Smooth hover transition for cards */
</style>
