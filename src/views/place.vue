<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <section class="relative overflow-hidden bg-cover bg-center" :style="{ backgroundImage: `url(${heroBg})`, minHeight: '45vh' }">
      <div class="absolute inset-0 bg-slate-900/65"></div>
      <div class="relative mx-auto flex h-full max-w-7xl items-center px-6 py-24 text-center text-white">
        <div class="w-full">
          <p class="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
            Discover Rwanda
          </p>
          <h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Explore top places and hidden gems.
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Find inspiring destinations, cultural landmarks, and nature escapes for your next travel plan.
          </p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-16">
      <div class="mb-12 rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/80">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Browse places</p>
        <h2 class="mt-3 text-3xl font-bold text-slate-900">Top destinations to visit in Rwanda</h2>
        <p class="mt-4 text-slate-600 leading-7">
          Explore cultural landmarks, nature escapes, and adventure destinations across Rwanda.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70">
          <div class="h-72 bg-cover bg-center" :style="{ backgroundImage: `url(${genocideMemorial})` }"></div>
          <div class="p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Cultural</p>
            <h3 class="mt-4 text-2xl font-bold text-slate-900">Genocide Memorial</h3>
            <p class="mt-3 text-slate-600 leading-7">A powerful remembrance site in Kigali with guided tours and reflection spaces.</p>
            <div class="mt-6 flex items-center justify-between text-sm text-slate-500">
              <span>History</span>
              <span>City center</span>
            </div>
          </div>
        </article>

        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70">
          <div class="h-72 bg-cover bg-center" :style="{ backgroundImage: `url(${museumImg})` }"></div>
          <div class="p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Museum</p>
            <h3 class="mt-4 text-2xl font-bold text-slate-900">National Museum</h3>
            <p class="mt-3 text-slate-600 leading-7">Explore Rwanda’s heritage through exhibitions, art, and cultural artifacts.</p>
            <div class="mt-6 flex items-center justify-between text-sm text-slate-500">
              <span>Culture</span>
              <span>Musanze</span>
            </div>
          </div>
        </article>

        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70">
          <div class="h-72 bg-cover bg-center" :style="{ backgroundImage: `url(${nyugweImg})` }"></div>
          <div class="p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Nature</p>
            <h3 class="mt-4 text-2xl font-bold text-slate-900">Nyungwe Forest</h3>
            <p class="mt-3 text-slate-600 leading-7">A lush rainforest destination with canopy walks, primate trekking, and waterfalls.</p>
            <div class="mt-6 flex items-center justify-between text-sm text-slate-500">
              <span>Wildlife</span>
              <span>Southwest</span>
            </div>
          </div>
        </article>

        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70">
          <div class="h-72 bg-cover bg-center" :style="{ backgroundImage: `url(${akageraImg})` }"></div>
          <div class="p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Safari</p>
            <h3 class="mt-4 text-2xl font-bold text-slate-900">Akagera National Park</h3>
            <p class="mt-3 text-slate-600 leading-7">Safari drives, lakeside views, and a chance to spot Rwanda’s iconic wildlife.</p>
            <div class="mt-6 flex items-center justify-between text-sm text-slate-500">
              <span>Wildlife</span>
              <span>East</span>
            </div>
          </div>
        </article>

        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70">
          <div class="h-72 bg-cover bg-center" :style="{ backgroundImage: `url(${lakeKivuImg})` }"></div>
          <div class="p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Scenic</p>
            <h3 class="mt-4 text-2xl font-bold text-slate-900">Lake Kivu</h3>
            <p class="mt-3 text-slate-600 leading-7">Relax by the lake, enjoy water activities, and explore lakeside towns.</p>
            <div class="mt-6 flex items-center justify-between text-sm text-slate-500">
              <span>Lake</span>
              <span>West</span>
            </div>
          </div>
        </article>

        <article class="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70">
          <div class="h-72 bg-cover bg-center" :style="{ backgroundImage: `url(${volcanoesImg})` }"></div>
          <div class="p-6">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">Adventure</p>
            <h3 class="mt-4 text-2xl font-bold text-slate-900">Volcanoes National Park</h3>
            <p class="mt-3 text-slate-600 leading-7">Meet mountain gorillas, hike volcano trails, and discover unique wildlife.</p>
            <div class="mt-6 flex items-center justify-between text-sm text-slate-500">
              <span>Hiking</span>
              <span>Northwest</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import heroBg from '@/assets/image9.jpg.jpg'
import genocideMemorial from '@/assets/genocide memorial.jpg'
import museumImg from '@/assets/museum.jpg'
import nyugweImg from '@/assets/nyugwe.jpg'
import akageraImg from '@/assets/akagera.jpg'
import lakeKivuImg from '@/assets/lake kivu.jpg'
import volcanoesImg from '@/assets/image 2.jpg.jpg'
</script>