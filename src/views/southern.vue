<template>
  <main class="bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-slate-900 text-white">
      <img src="@/assets/image8.jpg.jpg" alt="Southern Rwanda" class="absolute inset-0 h-full w-full object-cover opacity-75" />
      <div class="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-12">
        <p class="inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">Southern Rwanda</p>
        <h1 class="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Rainforests, tea hills, and lakeside calm.</h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-200/90">Explore Nyungwe Forest, scenic trekking trails, and relaxed lake escapes in the south.</p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">Why visit</p>
          <h2 class="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Southern Rwanda’s lush natural beauty.</h2>
          <p class="mt-6 text-slate-600 leading-8">From canopy walks to tea plantations, the south offers a peaceful escape and immersive nature experiences.</p>
          <ul class="mt-8 space-y-4 text-slate-600">
            <li class="flex items-start gap-3"><span class="mt-1 h-3 w-3 rounded-full bg-emerald-600"></span>Nyungwe Forest canopy walk and chimp trekking.</li>
            <li class="flex items-start gap-3"><span class="mt-1 h-3 w-3 rounded-full bg-emerald-600"></span>Tea estate tours and hillside viewpoints.</li>
            <li class="flex items-start gap-3"><span class="mt-1 h-3 w-3 rounded-full bg-emerald-600"></span>Quiet lakeside stays and scenic forest lodges.</li>
          </ul>
        </div>

        <div class="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50 ring-1 ring-slate-200">
          <h3 class="text-2xl font-semibold text-slate-900">Southern experiences</h3>
          <div class="mt-6 space-y-5 text-slate-600">
            <p>Guided nature walks, rainforest experiences, and tea plantation tours.</p>
            <p>Comfortable eco-friendly lodges nestled in quiet southern landscapes.</p>
            <p>Customized travel plans for calm, authentic exploration.</p>
          </div>
        </div>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-2">
        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-200">
          <img src="@/assets/image7.jpg.jpg" alt="Rainforest" class="h-72 w-full object-cover" />
          <div class="p-8">
            <h3 class="text-2xl font-semibold text-slate-900">Rainforest adventure</h3>
            <p class="mt-4 text-slate-600 leading-7">Experience the lush beauty of Nyungwe with guided walks and canopy views.</p>
          </div>
        </article>

        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-200">
          <img src="@/assets/image10.jpg.jpg" alt="Lake Kivu lakeside" class="h-72 w-full object-cover" />
          <div class="p-8">
            <h3 class="text-2xl font-semibold text-slate-900">Lake calm</h3>
            <p class="mt-4 text-slate-600 leading-7">Relax beside lakeside waters and enjoy easy boat trips with scenic vistas.</p>
          </div>
        </article>
      </div>

      <div class="mt-16 rounded-[2rem] bg-emerald-600 px-8 py-14 text-white shadow-2xl shadow-emerald-500/20 sm:px-12">
        <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Plan a southern getaway.</h2>
            <p class="mt-6 text-emerald-100/90 leading-8">We’ll help you combine rainforest adventure with comfortable stays and unforgettable views.</p>
          </div>
          <router-link to="/contact" class="inline-flex h-fit items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20">Get in touch</router-link>
        </div>
      </div>
    </section>
  </main>
</template>