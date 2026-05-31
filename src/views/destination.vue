<template>
  <main class="bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-slate-900 text-white">
      <img src="@/assets/image10.jpg.jpg" alt="Destination hero" class="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div class="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
        <p class="inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Explore destinations</p>
        <h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Discover Rwanda’s top travel regions.</h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-200/90">From Kigali’s vibrant streets to mountain adventures, find the best places to visit and the experiences that define the country.</p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div class="mb-12 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">Destination guide</p>
        <h2 class="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Choose the region that matches your travel style.</h2>
      </div>

      <div class="grid gap-8 xl:grid-cols-3">
        <article class="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/60 ring-1 ring-slate-200 transition hover:-translate-y-1">
          <div class="h-72 overflow-hidden rounded-[1.75rem] bg-[url('/src/assets/image11.jpg.jpg')] bg-cover bg-center"></div>
          <div class="mt-8">
            <h3 class="text-2xl font-semibold text-slate-900">Northern Rwanda</h3>
            <p class="mt-4 text-slate-600 leading-7">Mountain gorillas, volcano hikes, and forest lodges around Musanze and Volcanoes National Park.</p>
            <router-link to="/northern" class="mt-6 inline-flex text-emerald-600 hover:text-emerald-700">View Northern tours →</router-link>
          </div>
        </article>

        <article class="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/60 ring-1 ring-slate-200 transition hover:-translate-y-1">
          <div class="h-72 overflow-hidden rounded-[1.75rem] bg-[url('/src/assets/image8.jpg.jpg')] bg-cover bg-center"></div>
          <div class="mt-8">
            <h3 class="text-2xl font-semibold text-slate-900">Southern Rwanda</h3>
            <p class="mt-4 text-slate-600 leading-7">Rainforest canopy walks, tea estates, and lakeside relaxation in the south and southwest.</p>
            <router-link to="/southern" class="mt-6 inline-flex text-emerald-600 hover:text-emerald-700">View Southern tours →</router-link>
          </div>
        </article>

        <article class="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/60 ring-1 ring-slate-200 transition hover:-translate-y-1">
          <div class="h-72 overflow-hidden rounded-[1.75rem] bg-[url('/src/assets/image9.jpg.jpg')] bg-cover bg-center"></div>
          <div class="mt-8">
            <h3 class="text-2xl font-semibold text-slate-900">Eastern Rwanda</h3>
            <p class="mt-4 text-slate-600 leading-7">Savannah safaris, cultural villages, and lakeside views in Akagera and the east.</p>
            <router-link to="/eastern" class="mt-6 inline-flex text-emerald-600 hover:text-emerald-700">View Eastern tours →</router-link>
          </div>
        </article>
      </div>

      <div class="mt-20 rounded-[2rem] bg-emerald-600 px-8 py-14 text-white shadow-2xl shadow-emerald-500/20 sm:px-12">
        <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200">Ready to explore?</p>
            <h2 class="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Let us tailor the perfect destination itinerary.</h2>
            <p class="mt-6 text-emerald-100/90 leading-8">Whether you want city culture, mountain adventure, or wildlife safaris, we’ll help you choose the right route.</p>
          </div>
          <router-link to="/contact" class="inline-flex h-fit items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20">Contact us today</router-link>
        </div>
      </div>
    </section>
  </main>
</template>