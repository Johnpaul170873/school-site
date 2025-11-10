<template>
  <div class="min-h-screen text-gray-800">

    <!-- ==================== HERO / HEADER ==================== -->
    
    <img src="/images/about-campus.jpg" alt="Campus" class="w-[100%] h-150 object-cover rounded-lg shadow-md mx-auto" />
    <!-- ==================== ABOUT SECTION ==================== -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/images/oms.jpg" alt="Campus" class="w-full rounded-lg shadow-md">
        </div>
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-blue-800 mb-4">About <br>Our University</h2>
          <p class="text-gray-700 leading-relaxed mb-6">
            Our school values excellence, discipline, and community, helping students develop both academically and personally.
          </p>
          <a href="#" class="text-blue-700 font-medium hover:underline"></a>
        </div>
      </div>

      <!-- ✅ Individual Course Boxes -->
      <div class="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-blue-100 rounded-lg shadow-md p-6 text-center hover:bg-blue-200 transition">
          <img src="/images/BSCS2.jpg" alt="Course 1" class="w-full h-40 object-cover rounded mb-4">
          <h3 class="text-xl font-semibold text-blue-800">Bachelor of Science in Computer Science</h3>
          <p class="text-sm text-gray-700 mt-2">Focused on software development, networking, and system administration.</p>
        </div>
        
        <div class="bg-blue-100 rounded-lg shadow-md p-6 text-center hover:bg-blue-200 transition">
          <img src="/images/SCJE.jpeg" alt="Course 3" class="w-full h-40 object-cover rounded mb-4">
          <h3 class="text-xl font-semibold text-blue-800">School of Criminal Justice Education</h3>
          <p class="text-sm text-gray-700 mt-2">SCSJE is dedicated to training future law enforcers with the knowledge, discipline, and integrity needed to serve and protect the community.</p>
        </div>
        <div class="bg-blue-100 rounded-lg shadow-md p-6 text-center hover:bg-blue-200 transition">
          <img src="/images/SBAA.jpeg" alt="Course 4" class="w-full h-40 object-cover rounded mb-4">
          <h3 class="text-xl font-semibold text-blue-800">School of Business Administration and Accountancy.</h3>
          <p class="text-sm text-gray-700 mt-2">SBAA aims to develop future business leaders and professionals who are equipped with the skills, knowledge, and ethics to excel in the world of commerce and finance.</p>
        </div>
        <div class="bg-blue-100 rounded-lg shadow-md p-6 text-center hover:bg-blue-200 transition">
          <img src="/images/BSN.jpeg" alt="Course 5" class="w-full h-40 object-cover rounded mb-4">
          <h3 class="text-xl font-semibold text-blue-800">Bachelor of Science in Nursing</h3>
    
          <p class="text-sm text-gray-700 mt-2">The BSN program prepares students to become compassionate, skilled, and competent nurses dedicated to promoting health and saving lives.</p>
        </div>
        <div class="bg-blue-100 rounded-lg shadow-md p-6 text-center hover:bg-blue-200 transition">
          <img src="/images/SHM.png" alt="Course 6" class="w-full h-40 object-cover rounded mb-4">
          <h3 class="text-xl font-semibold text-blue-800">SHM stands for School of Hospitality Management.</h3>
          <p class="text-sm text-gray-700 mt-2">SHM is committed to training future hospitality professionals with the skills, discipline, and passion needed to excel in the tourism and service industry.</p>
        </div>
        <div class="bg-blue-100 rounded-lg shadow-md p-6 text-center hover:bg-blue-200 transition">
          <img src="/images/STE.jpeg" alt="Course 7" class="w-full h-40 object-cover rounded mb-4">
          <h3 class="text-xl font-semibold text-blue-800">School of Teacher Education</h3>
          <p class="text-sm text-gray-700 mt-2">STE is dedicated to developing future educators who are passionate, skilled, and committed to shaping young minds for a better future.</p>
        </div>
      </div>
    </section>

    <!-- ==================== UNIVERSITY OVERVIEW ==================== -->
    <section class="py-16 bg-blue-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-blue-800 mb-3">University Overview</h2>
        <p class="text-gray-600 mb-10">We take pride in every element that forms our vibrant community.</p>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 p-6 text-center">
            <img src="/images/student-profile.jpg" alt="Students" class="w-full h-40 object-cover rounded mb-4">
            <h3 class="text-xl font-semibold text-blue-700">Student Profile</h3>
          </div>
          <div class="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 p-6 text-center">
            <img src="/images/departments.jpg" alt="Faculty" class="w-full h-40 object-cover rounded mb-4">
            <h3 class="text-xl font-semibold text-blue-700">Teaching Staff</h3>
          </div>
          <div class="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 p-6 text-center">
            <img src="/images/teaching-staff.jpg" alt="Departments" class="w-full h-40 object-cover rounded mb-4">
            <h3 class="text-xl font-semibold text-blue-700">Schools & Departments</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== OUR FACILITIES ==================== -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-blue-800 mb-10">Our Facilities</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <img src="/images/academic-building.jpg" alt="Academic Buildings" class="w-full h-48 object-cover rounded-lg mb-4">
            <h3 class="font-semibold text-blue-700">Academic Buildings</h3>
            <p class="text-sm text-gray-600 mt-2">Explore state-of-the-art classrooms and labs.</p>
          </div>
          <div class="text-center">
            <img src="/images/dormitory.jpg" alt="Student Accommodation" class="w-full h-48 object-cover rounded-lg mb-4">
            <h3 class="font-semibold text-blue-700">Student Accommodations</h3>
            <p class="text-sm text-gray-600 mt-2">Comfortable, safe, and community-focused living.</p>
          </div>
          <div class="text-center">
            <img src="/images/library.jpg" alt="Library & Recreation" class="w-full h-48 object-cover rounded-lg mb-4">
            <h3 class="font-semibold text-blue-700">Resources and Recreation</h3>
            <p class="text-sm text-gray-600 mt-2">World-class library, sports, and wellness centers.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== MISSION STATEMENT ==================== -->
    <section class="py-20 bg-blue-800 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6">Mission</h2>
        <p class="text-xl max-w-3xl mx-auto leading-relaxed">
          Concepcion Holy Cross College is an institution for academic and 
values formation offering relevant learner-centered and value-oriented programs that produces competent persons of character in the service of God and society.
        </p>
      </div>
    </section>

  </div>
</template>