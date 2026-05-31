<template>
  <main class="bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-slate-900 text-white">
      <img src="@/assets/image8.jpg.jpg" alt="Eastern Rwanda" class="absolute inset-0 h-full w-full object-cover opacity-75" />
      <div class="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
        <p class="inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Eastern Rwanda</p>
        <h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Explore Akagera and the eastern savanna.</h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-200/90">Enjoy wildlife safaris, scenic lakeside escapes, and authentic cultural experiences in the east.</p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">Highlights</p>
          <h2 class="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Why eastern Rwanda belongs on your itinerary.</h2>
          <p class="mt-6 text-slate-600 leading-8">From rugged savannah landscapes to cultural community visits, Eastern Rwanda is the ideal place for those seeking wildlife adventure and peaceful lakeside days.</p>
          <ul class="mt-8 space-y-4 text-slate-600">
            <li class="flex items-start gap-3"><span class="mt-1 h-3 w-3 rounded-full bg-emerald-600"></span>Akagera National Park safari drives by boat and 4x4.</li>
            <li class="flex items-start gap-3"><span class="mt-1 h-3 w-3 rounded-full bg-emerald-600"></span>Cultural visits to villages, local markets, and traditional dance.</li>
            <li class="flex items-start gap-3"><span class="mt-1 h-3 w-3 rounded-full bg-emerald-600"></span>Lake Ihema boat trips watching hippos, birds, and quiet sunsets.</li>
          </ul>
        </div>
        <div class="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200">
          <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-semibold text-slate-900">Akagera Safari</h3>
              <p class="mt-3 text-slate-600 leading-7">Discover elephants, giraffes, zebras and more on guided park tours, plus boat rides on Lake Ihema.</p>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-slate-900">Cultural Village Visits</h3>
              <p class="mt-3 text-slate-600 leading-7">Meet local artisans, taste fresh cuisine, and learn about eastern Rwanda’s vibrant traditions.</p>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-slate-900">Relaxing Lake Stays</h3>
              <p class="mt-3 text-slate-600 leading-7">Stay by the lake with comfortable accommodations and scenic evenings in nature.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-2">
        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/60 ring-1 ring-slate-200">
          <img src="@/assets/image9.jpg.jpg" alt="Lake Ihema" class="h-72 w-full object-cover" />
          <div class="p-8">
            <h3 class="text-2xl font-semibold text-slate-900">Lake Ihema</h3>
            <p class="mt-4 text-slate-600 leading-7">A peaceful reserve lake teeming with birdlife, hippos, and beautiful reflections.</p>
          </div>
        </article>

        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/60 ring-1 ring-slate-200">
          <img src="@/assets/image10.jpg.jpg" alt="Eastern safari" class="h-72 w-full object-cover" />
          <div class="p-8">
            <h3 class="text-2xl font-semibold text-slate-900">Savanna Safari</h3>
            <p class="mt-4 text-slate-600 leading-7">Spot the big five, enjoy sundowners, and experience the wide-open landscapes of eastern Rwanda.</p>
          </div>
        </article>
      </div>

      <div class="mt-16 rounded-[2rem] bg-emerald-600 px-8 py-14 text-white shadow-2xl shadow-emerald-500/20 sm:px-12">
        <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Ready for an eastern Rwanda adventure?</h2>
            <p class="mt-6 text-emerald-100/90 leading-8">We can build the perfect safari and cultural journey with expert local guides and seamless logistics.</p>
          </div>
          <router-link to="/contact" class="inline-flex h-fit items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20">Start planning</router-link>
        </div>
      </div>
    </section>
  </main>
</template>