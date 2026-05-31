<template>
  <main class="bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-slate-900 text-white">
      <img src="@/assets/image4.jpg.jpg" alt="Northern Rwanda" class="absolute inset-0 h-full w-full object-cover opacity-75" />
      <div class="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
        <p class="inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Northern Rwanda</p>
        <h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Gorillas, volcanoes, and alpine forests.</h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-200/90">The north is Rwanda’s adventure heartland — home to gorilla treks, golden monkeys, and dramatic highland scenery.</p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">What to see</p>
          <h2 class="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Northern Rwanda’s most iconic experiences.</h2>
          <p class="mt-6 text-slate-600 leading-8">From gorilla trekking in Volcanoes National Park to cultural village experiences, the north brings Rwanda’s wild side and local warmth together.</p>
          <ul class="mt-8 space-y-4 text-slate-600">
            <li class="flex items-start gap-3"><span class="mt-1 h-3 w-3 rounded-full bg-emerald-600"></span>Gorilla trekking permits and guided forest trails.</li>
            <li class="flex items-start gap-3"><span class="mt-1 h-3 w-3 rounded-full bg-emerald-600"></span>Golden monkey tracking and volcano hikes.</li>
            <li class="flex items-start gap-3"><span class="mt-1 h-3 w-3 rounded-full bg-emerald-600"></span>Local culture visits in Musanze and nearby communities.</li>
          </ul>
        </div>

        <div class="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200">
          <h3 class="text-2xl font-semibold text-slate-900">Northern strengths</h3>
          <div class="mt-6 space-y-5 text-slate-600">
            <p>Expert guides, secure permits, and logistics support for mountain and wildlife adventures.</p>
            <p>Comfortable lodges set among volcano slopes and misty forests.</p>
            <p>Private transfers and optional cultural experiences after wildlife days.</p>
          </div>
        </div>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-2">
        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-200">
          <img src="@/assets/image7.jpg.jpg" alt="Volcanoes" class="h-72 w-full object-cover" />
          <div class="p-8">
            <h3 class="text-2xl font-semibold text-slate-900">Volcanoes Park</h3>
            <p class="mt-4 text-slate-600 leading-7">Step into misty forests where gorillas and golden monkeys live, guided by Rwanda’s best trackers.</p>
          </div>
        </article>

        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-200">
          <img src="@/assets/image6.jpg.jpg" alt="Mountain village" class="h-72 w-full object-cover" />
          <div class="p-8">
            <h3 class="text-2xl font-semibold text-slate-900">Mountain culture</h3>
            <p class="mt-4 text-slate-600 leading-7">Visit local communities and learn about life in Rwanda’s highland villages.</p>
          </div>
        </article>
      </div>

      <div class="mt-16 rounded-[2rem] bg-emerald-600 px-8 py-14 text-white shadow-2xl shadow-emerald-500/20 sm:px-12">
        <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Ready for the north?</h2>
            <p class="mt-6 text-emerald-100/90 leading-8">We’ll arrange the trekking permits, guides, and lodging so your northern Rwanda adventure is easy and unforgettable.</p>
          </div>
          <router-link to="/contact" class="inline-flex h-fit items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20">Contact us now</router-link>
        </div>
      </div>
    </section>
  </main>
</template>