<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <section
      class="relative overflow-hidden bg-cover bg-center"
      style="background-image: url('/src/assets/image11.jpg.jpg'); min-height: 45vh;"
    >
      <div class="absolute inset-0 bg-slate-950/70"></div>
      <div class="relative mx-auto flex h-full max-w-7xl items-center px-6 py-24 text-center text-white">
        <div class="w-full">
          <p class="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Gallery</p>
          <h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl">See Rwanda through our best travel moments.</h1>
          <p class="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Browse curated images and featured video highlights from Rwanda’s most memorable destinations.
          </p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-16">
      <div id="images" class="mb-12 rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/80">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Photo Gallery</p>
        <h2 class="mt-3 text-3xl font-bold text-slate-900">Stunning Rwanda experiences captured.</h2>
        <p class="mt-4 text-slate-600 leading-7">
          Discover vibrant Rwanda scenes, wildlife parks, scenic lakes, and cultural moments in our gallery.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl">
          <img src="/src/assets/image5.jpg.jpg" alt="Genocide Memorial" class="h-72 w-full object-cover" />
          <div class="p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Memorial</p>
            <h3 class="mt-4 text-2xl font-bold text-slate-900">Genocide Memorial</h3>
            <p class="mt-3 text-slate-600 leading-7">A peaceful Kigali landmark honoring Rwanda’s history.</p>
          </div>
        </article>

        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl">
          <img src="/src/assets/image6.jpg.jpg" alt="Rwanda Museum" class="h-72 w-full object-cover" />
          <div class="p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Culture</p>
            <h3 class="mt-4 text-2xl font-bold text-slate-900">National Museum</h3>
            <p class="mt-3 text-slate-600 leading-7">Art, heritage, and a deep cultural journey.</p>
          </div>
        </article>

        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl">
          <img src="/src/assets/image7.jpg.jpg" alt="Nyungwe Forest" class="h-72 w-full object-cover" />
          <div class="p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Nature</p>
            <h3 class="mt-4 text-2xl font-bold text-slate-900">Nyungwe Forest</h3>
            <p class="mt-3 text-slate-600 leading-7">Lush rainforest trails and unforgettable wildlife views.</p>
          </div>
        </article>

        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl">
          <img src="/src/assets/image8.jpg.jpg" alt="Akagera National Park" class="h-72 w-full object-cover" />
          <div class="p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Safari</p>
            <h3 class="mt-4 text-2xl font-bold text-slate-900">Akagera Park</h3>
            <p class="mt-3 text-slate-600 leading-7">Wide-open savannah landscapes and wildlife adventures.</p>
          </div>
        </article>

        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl">
          <img src="/src/assets/image10.jpg.jpg" alt="Lake Kivu" class="h-72 w-full object-cover" />
          <div class="p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Scenic</p>
            <h3 class="mt-4 text-2xl font-bold text-slate-900">Lake Kivu</h3>
            <p class="mt-3 text-slate-600 leading-7">Peaceful lakeside scenes and beautiful sunsets.</p>
          </div>
        </article>

        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl">
          <img src="/src/assets/image4.jpg.jpg" alt="Volcanoes National Park" class="h-72 w-full object-cover" />
          <div class="p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Adventure</p>
            <h3 class="mt-4 text-2xl font-bold text-slate-900">Volcanoes Park</h3>
            <p class="mt-3 text-slate-600 leading-7">Gorilla trekking and rugged volcano scenery.</p>
          </div>
        </article>
      </div>

      <div id="videos" class="mt-16 rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/80">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Video highlights</p>
        <h2 class="mt-3 text-3xl font-bold text-slate-900">Watch Rwanda in motion</h2>
        <p class="mt-4 text-slate-600 leading-7">
          Sample travel moments, cultural performances, and scenic journeys.
        </p>

        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-lg">
            <img src="/src/assets/image8.jpg.jpg" alt="Video preview" class="h-72 w-full object-cover opacity-80" />
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="rounded-full bg-white/90 p-4 text-slate-950">
                ▶
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold">Rwanda Highlights</h3>
              <p class="mt-3 text-slate-300">A quick tour through cities, parks, and lakes.</p>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-lg">
            <img src="/src/assets/image2.jpg.jpg" alt="Video preview" class="h-72 w-full object-cover opacity-80" />
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="rounded-full bg-white/90 p-4 text-slate-950">
                ▶
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold">Nature & Wildlife</h3>
              <p class="mt-3 text-slate-300">Experience Rwanda’s forests, lakes, and safari regions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
