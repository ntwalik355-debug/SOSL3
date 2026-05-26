<script setup>
import logo from './assets/image.png'
</script>

<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">

    
    <header class="bg-blue-700 text-white shadow-lg">
      <div class="container mx-auto flex items-center justify-between p-5">

        
        <div class="flex items-center gap-4">

          <img
            :src="logo"
            alt="SOS Technical School Logo"
            class="w-20 h-20 rounded-full border-4 border-white shadow-lg"
          />

          <div>
            <h1 class="text-3xl font-bold">
              SOS Technical School
            </h1>

            <p class="text-yellow-300">
              Skills • Innovation • Future
            </p>
          </div>

        </div>

        
        <nav class="hidden md:flex gap-6 text-lg">
          <a href="#home" class="hover:text-yellow-300">Home</a>
          <a href="#courses" class="hover:text-yellow-300">Courses</a>
          <a href="#contact" class="hover:text-yellow-300">Contact</a>
        </nav>

      </div>
    </header>

    
    <section
      id="home"
      class="bg-blue-600 text-white py-24 text-center"
    >
      <h2 class="text-5xl font-bold mb-6">
        Welcome to SOS Technical School
      </h2>

      <p class="max-w-2xl mx-auto text-lg leading-8">
        We provide quality technical education and practical skills
        to prepare students for successful careers in technology and engineering.
      </p>
    </section>

    
    <section id="courses" class="bg-white py-20 px-6">

      <h2 class="text-4xl font-bold text-center text-blue-700 mb-12">
        Our Courses
      </h2>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div class="bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <h3 class="text-2xl font-bold text-blue-600 mb-4">
            Computer Science
          </h3>
          <p>
            Learn programming, web development, databases, and software engineering.
          </p>
        </div>

        <div class="bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <h3 class="text-2xl font-bold text-blue-600 mb-4">
            Networking
          </h3>
          <p>
            Study computer networks, cybersecurity, and internet technologies.
          </p>
        </div>

        <div class="bg-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <h3 class="text-2xl font-bold text-blue-600 mb-4">
            software development
          </h3>
          <p>
            Gain practical software development and technical maintenance skills.
          </p>
        </div>

      </div>
    </section>

    
    <section
      id="contact"
      class="bg-blue-700 text-white py-20 text-center px-6"
    >
      <h2 class="text-4xl font-bold mb-8">
        Contact Us
      </h2>

      <p class="text-lg mb-3">
        📍 Kigali, Rwanda
      </p>

      <p class="text-lg mb-3">
        📞 +250 700 000 000
      </p>

      <p class="text-lg">
        📧 info@sostechnicalschool.com
      </p>
    </section>

  </div>
</template>