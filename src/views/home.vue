<template>
  <main class="bg-slate-50 text-slate-900">
    <!-- Hero -->
    <section class="relative h-[90vh] overflow-hidden">
      <img
        src="@/assets/image6.jpg.jpg"
        alt="Rwanda travel hero"
        class="absolute inset-0 h-full w-full object-cover brightness-75"
      />

      <div class="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-8 lg:px-12">
        <div class="max-w-3xl text-center">
          <p class="inline-flex rounded-full bg-emerald-600/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 ring-1 ring-emerald-600/20">
            Explore Rwanda
          </p>
          <h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Discover the heart of Africa with unforgettable journeys.
          </h1>
          <p class="mt-6 text-lg leading-8 text-slate-100/90 sm:text-xl">
            Guided tours, luxury escapes, cultural experiences and safari adventures designed for every traveler.
          </p>

          <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
            <a href="#" class="inline-flex items-center justify-center rounded-full bg-yellow-500 px-8 py-3 stext-base font-semibold text-white transition hover:bg-emerald-400">
              Explore Destinations
            </a>
            <a href="/about" class="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20">
              Learn About Us
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section class="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div class="grid gap-8 md:grid-cols-3">
        <article class="rounded-[2rem] bg-white/90 p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200">
          <div class="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-600">
            ✨
          </div>
          <h2 class="mt-6 text-2xl font-semibold text-slate-900">Curated Adventures</h2>
          <p class="mt-4 text-slate-600 leading-7">Every itinerary is tailored to show you Rwanda’s beauty, culture, and wildlife with local insight.</p>
        </article>

        <article class="rounded-[2rem] bg-white/90 p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200">
          <div class="flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-500/10 text-sky-600">
            🏞️
          </div>
          <h2 class="mt-6 text-2xl font-semibold text-slate-900">Authentic Experiences</h2>
          <p class="mt-4 text-slate-600 leading-7">From gorilla trekking to cultural village visits, every experience is designed to feel genuine and memorable.</p>
        </article>

        <article class="rounded-[2rem] bg-white/90 p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200">
          <div class="flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-600">
            🧭
          </div>
          <h2 class="mt-6 text-2xl font-semibold text-slate-900">Trusted Support</h2>
          <p class="mt-4 text-slate-600 leading-7">Travel with confidence thanks to our local guides, logistic support, and 24/7 planning assistance.</p>
        </article>
      </div>
    </section>

    <!-- Featured Destinations -->
    <section class="bg-slate-100 py-20">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div class="mb-12 text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Featured journeys</p>
          <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Rwanda’s must-see destinations</h2>
          <p class="mt-4 max-w-2xl mx-auto text-slate-600">From shimmering lakes to rolling hills, experience the country’s top destinations with style and comfort.</p>
        </div>

        <div class="grid gap-8 lg:grid-cols-3">
          <div class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/50">
            <img src="@/assets/image7.jpg.jpg" alt="Volcanoes" class="h-72 w-full object-cover" />
            <div class="p-8">
              <h3 class="text-2xl font-semibold text-slate-900">Volcanoes National Park</h3>
              <p class="mt-4 text-slate-600 leading-7">Track mountain gorillas and enjoy lush landscapes in one of Africa’s most iconic wildlife reserves.</p>
            </div>
          </div>

          <div class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/50">
            <img src="@/assets/image9.jpg.jpg" alt="Lake Kivu" class="h-72 w-full object-cover" />
            <div class="p-8">
              <h3 class="text-2xl font-semibold text-slate-900">Lake Kivu Retreats</h3>
              <p class="mt-4 text-slate-600 leading-7">Relax along scenic shores, enjoy sunset cruises, and discover peaceful islands on Rwanda’s western lakeshore.</p>
            </div>
          </div>

          <div class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/50">
            <img src="@/assets/image11.jpg.jpg" alt="Kigali city" class="h-72 w-full object-cover" />
            <div class="p-8">
              <h3 class="text-2xl font-semibold text-slate-900">Kigali Culture & Cuisine</h3>
              <p class="mt-4 text-slate-600 leading-7">Explore the vibrant capital with street food, museums, and boutique market experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to action -->
    <section class="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div class="rounded-[2rem] bg-emerald-600 px-8 py-14 text-white shadow-2xl shadow-emerald-500/20 sm:px-12">
        <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">Ready to travel?</p>
            <h2 class="mt-4 text-4xl font-bold tracking-tight">Create your next unforgettable Rwanda adventure.</h2>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-emerald-100/90">Our team will craft an itinerary that fits your pace, interests, and budget, so your journey is seamless from arrival to departure.</p>
          </div>
          <div class="flex items-center justify-start gap-4 sm:justify-end">
            <a href="/contact" class="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-emerald-700 transition hover:bg-slate-100">Contact Us</a>
            <a href="/service" class="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20">View Services</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
