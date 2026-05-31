<template>
  <nav class="sticky top-0 z-50 bg-slate-950/95 text-white shadow-2xl shadow-slate-900/20 backdrop-blur-xl">
    <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8">
      <router-link to="/" class="flex items-center gap-3 text-lg font-bold text-white">
        <img src="../assets/logo.jpg.jpg" alt="Tembera Rwanda Logo" class="h-10 w-10 rounded-full object-cover border border-emerald-400/30" />
        <span class="uppercase tracking-[0.18em] text-emerald-300">Tembera Rwanda</span>
      </router-link>

      <ul class="flex flex-wrap items-center gap-4 text-sm font-medium sm:gap-6">
        <li><router-link to="/" class="transition hover:text-emerald-300">Home</router-link></li>
        <li><router-link to="/about" class="transition hover:text-emerald-300">About</router-link></li>
        <li><router-link to="/services" class="transition hover:text-emerald-300">Services</router-link></li>
        <li><router-link to="/place" class="transition hover:text-emerald-300">Places</router-link></li>
        <li ref="galleryRef" class="relative">
          <button @click.stop="toggleGallery" class="flex items-center gap-2 transition hover:text-emerald-300">
            Gallery
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd"/></svg>
          </button>

          <ul v-show="showGallery" class="absolute right-0 z-50 mt-2 w-44 rounded-lg bg-white text-slate-900 shadow-lg ring-1 ring-slate-200">
            <li><router-link to="/gallery#images" class="block px-4 py-2 hover:bg-slate-100" @click="closeAll">Images</router-link></li>
            <li><router-link to="/gallery#videos" class="block px-4 py-2 hover:bg-slate-100" @click="closeAll">Videos</router-link></li>
          </ul>
        </li>
        <li ref="menuRef" class="relative">
          <button @click.stop="toggleDest" class="flex items-center gap-2 transition hover:text-emerald-300">
            Destinations
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd"/></svg>
          </button>

          <ul v-show="showDest" class="absolute right-0 z-50 mt-2 w-48 rounded-lg bg-white text-slate-900 shadow-lg ring-1 ring-slate-200">
            <li><router-link to="/kigali" class="block px-4 py-2 hover:bg-slate-100" @click="closeAll">Kigali</router-link></li>
            <li><router-link to="/northern" class="block px-4 py-2 hover:bg-slate-100" @click="closeAll">Northern</router-link></li>
            <li><router-link to="/southern" class="block px-4 py-2 hover:bg-slate-100" @click="closeAll">Southern</router-link></li>
            <li><router-link to="/eastern" class="block px-4 py-2 hover:bg-slate-100" @click="closeAll">Eastern</router-link></li>
          </ul>
        </li>
        <li><router-link to="/contact" class="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-emerald-500/15 hover:text-emerald-100">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showDest = ref(false)
const menuRef = ref(null)
const showGallery = ref(false)
const galleryRef = ref(null)

function toggleDest() {
  showDest.value = !showDest.value
  if (showDest.value) showGallery.value = false
}

function toggleGallery() {
  showGallery.value = !showGallery.value
  if (showGallery.value) showDest.value = false
}

function closeAll() {
  showDest.value = false
  showGallery.value = false
}

function onDocClick(e) {
  if (menuRef.value && !menuRef.value.contains(e.target)) showDest.value = false
  if (galleryRef.value && !galleryRef.value.contains(e.target)) showGallery.value = false
}

onMounted(() => document.addEventListener('click', onDocClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))
</script>