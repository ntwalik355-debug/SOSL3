<template>
  <main class="bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-slate-900 text-white">
      <img src="@/assets/image11.jpg.jpg" alt="Kigali" class="absolute inset-0 h-full w-full object-cover opacity-80" />
      <div class="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
        <p class="inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Kigali city tours</p>
        <h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Experience Rwanda’s vibrant capital.</h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-200/90">Kigali is a hub of culture, cuisine, art, and comfort — perfect for city stays, museum visits, and local discovery.</p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">City highlights</p>
          <h2 class="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Discover the best of Kigali.</h2>
          <p class="mt-6 text-slate-600 leading-8">Explore peaceful parks, craft markets, museums, and the city’s welcoming dining scene with a flexible Kigali itinerary.</p>
          <ul class="mt-8 space-y-4 text-slate-600">
            <li class="flex items-start gap-3"><span class="mt-1 h-3 w-3 rounded-full bg-emerald-600"></span>Kigali Genocide Memorial and history tours.</li>
            <li class="flex items-start gap-3"><span class="mt-1 h-3 w-3 rounded-full bg-emerald-600"></span>Local cuisine sampling at markets, cafés, and boutique restaurants.</li>
            <li class="flex items-start gap-3"><span class="mt-1 h-3 w-3 rounded-full bg-emerald-600"></span>Art galleries, cultural centers, and modern city viewpoints.</li>
          </ul>
        </div>

        <div class="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200">
          <h3 class="text-2xl font-semibold text-slate-900">Kigali essentials</h3>
          <div class="mt-6 space-y-5 text-slate-600">
            <p>Comfortable transfers, guided city walks, and local recommendations for food and culture.</p>
            <p>Hotel booking support, airport pickup, and private tours tailored to your schedule.</p>
            <p>Flexible day trips to nearby scenic spots, craft markets, and cultural centers.</p>
          </div>
        </div>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-2">
        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-200">
          <img src="@/assets/image10.jpg.jpg" alt="Kigali market" class="h-72 w-full object-cover" />
          <div class="p-8">
            <h3 class="text-2xl font-semibold text-slate-900">Culture & Cuisine</h3>
            <p class="mt-4 text-slate-600 leading-7">Visit markets and sample local dishes while learning about Rwanda’s culinary and creative traditions.</p>
          </div>
        </article>
        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-200">
          <img src="@/assets/image6.jpg.jpg" alt="Kigali memorial" class="h-72 w-full object-cover" />
          <div class="p-8">
            <h3 class="text-2xl font-semibold text-slate-900">History & Heritage</h3>
            <p class="mt-4 text-slate-600 leading-7">Explore Kigali’s history with thoughtful museum visits and meaningful memorial sites.</p>
          </div>
        </article>
      </div>

      <div class="mt-16 rounded-[2rem] bg-emerald-600 px-8 py-14 text-white shadow-2xl shadow-emerald-500/20 sm:px-12">
        <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Plan a memorable Kigali stay.</h2>
            <p class="mt-6 text-emerald-100/90 leading-8">Whether you want luxury, culture, or relaxing city time, we’ll arrange the best experiences for your Kigali visit.</p>
          </div>
          <router-link to="/contact" class="inline-flex h-fit items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20">Book your city tour</router-link>
        </div>
      </div>
    </section>
  </main>
</template>