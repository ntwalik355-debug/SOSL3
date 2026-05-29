<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- Hero -->
    <section class="relative h-[50vh]">

      <img
        src="@/assets/image5.jpg.jpg"
        class="w-full h-full object-cover"
        alt=""
      >

      <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 class="text-5xl md:text-7xl font-bold text-white">
          Our Services
        </h1>
      </div>

    </section>

    <!-- Services -->
    <section class="max-w-7xl mx-auto px-6 py-20">

      <div class="grid md:grid-cols-3 gap-10">

        <!-- Card -->
        <div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 duration-300">

          <img
            src="@/assets/image9.jpg.jpg"
            class="h-72 w-full object-cover"
            alt=""
          >

          <div class="p-8">

            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              Gorilla Trekking
            </h2>

            <p class="text-gray-600 leading-7">
              Experience the famous mountain gorillas in Volcanoes National Park
              with professional guides and unforgettable adventures.
            </p>

          </div>

        </div>

        <!-- Card -->
        <div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 duration-300">

          <img
            src="@/assets/image10.jpg.jpg"
            class="h-72 w-full object-cover"
            alt=""
          >

          <div class="p-8">

            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              Kigali City Tours
            </h2>

            <p class="text-gray-600 leading-7">
              Explore Kigali’s modern lifestyle, museums, restaurants,
              nightlife, and beautiful culture.
            </p>

          </div>

        </div>

        <!-- Card -->
        <div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 duration-300">

          <img
            src="@/assets/image11.jpg.jpg"
            class="h-72 w-full object-cover"
            alt=""
          >

          <div class="p-8">

            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              Lake Kivu Trips
            </h2>

            <p class="text-gray-600 leading-7">
              Enjoy relaxing beaches, boat rides, resorts, and amazing sunset
              experiences at Lake Kivu.
            </p>

          </div>

        </div>

      </div>

    </section>

  </div>
</template>