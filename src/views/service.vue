<template>
  <main class="bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-slate-900 text-white">
      <img src="@/assets/image5.jpg.jpg" alt="Services hero" class="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div class="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
        <p class="inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
          Our Services
        </p>
        <h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Travel services designed for every Rwanda itinerary.
        </h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-200/90">
          From wildlife safaris and city tours to relaxation by the lake, our travel packages bring Rwanda’s best experiences together in one seamless plan.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div class="grid gap-8 lg:grid-cols-3">
        <article class="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200 transition hover:-translate-y-1">
          <div class="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-600">
            🐾
          </div>
          <h2 class="mt-6 text-2xl font-semibold text-slate-900">Wildlife & Safari</h2>
          <p class="mt-4 text-slate-600 leading-7">Guided wildlife safaris in Volcanoes, Akagera, and Nyungwe with expert local rangers.</p>
        </article>

        <article class="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200 transition hover:-translate-y-1">
          <div class="flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-500/10 text-sky-600">
            🏙️
          </div>
          <h2 class="mt-6 text-2xl font-semibold text-slate-900">City Tours</h2>
          <p class="mt-4 text-slate-600 leading-7">Explore Kigali’s markets, museums, cafes, and cultural hotspots with comfortable transport.</p>
        </article>

        <article class="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200 transition hover:-translate-y-1">
          <div class="flex h-16 w-16 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-600">
            🌊
          </div>
          <h2 class="mt-6 text-2xl font-semibold text-slate-900">Lake Retreats</h2>
          <p class="mt-4 text-slate-600 leading-7">Relax by Lake Kivu with beach stays, boat trips, island visits, and sunset dining.</p>
        </article>

        <article class="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200 transition hover:-translate-y-1">
          <div class="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-500/10 text-orange-600">
            🌿
          </div>
          <h2 class="mt-6 text-2xl font-semibold text-slate-900">Nature & Culture</h2>
          <p class="mt-4 text-slate-600 leading-7">Discover heritage sites, tea plantations, local villages, and forest walks across Rwanda.</p>
        </article>

        <article class="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200 transition hover:-translate-y-1">
          <div class="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-600">
            ✨
          </div>
          <h2 class="mt-6 text-2xl font-semibold text-slate-900">Custom Itineraries</h2>
          <p class="mt-4 text-slate-600 leading-7">Personalized plans that match your travel pace, interests, and comfort level.</p>
        </article>

        <article class="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200 transition hover:-translate-y-1">
          <div class="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-600">
            📞
          </div>
          <h2 class="mt-6 text-2xl font-semibold text-slate-900">Travel Support</h2>
          <p class="mt-4 text-slate-600 leading-7">24/7 assistance, booking support, and local guidance throughout your trip.</p>
        </article>
      </div>

      <div class="mt-16 rounded-[2rem] bg-emerald-600 px-8 py-14 text-white shadow-2xl shadow-emerald-500/20 sm:px-12">
        <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">Ready to travel?</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Tell us your dream trip and we’ll bring it to life.</h2>
            <p class="mt-6 text-emerald-100/90 leading-8">Whether you want adventure, relaxation, or culture, our team creates the itinerary that feels just right.</p>
          </div>
          <div class="flex gap-4 sm:justify-end">
            <router-link to="/contact" class="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-emerald-700 transition hover:bg-slate-100">Book a consultation</router-link>
            <router-link to="/destination" class="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20">Explore destinations</router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>