<template>
  <footer class="bg-slate-950 text-slate-100 px-6 py-12 sm:px-8">
    <div class="mx-auto max-w-7xl space-y-10">
      <div class="grid gap-10 md:grid-cols-4">
        <div class="space-y-4">
          <h3 class="text-2xl font-semibold text-emerald-300">Tembera Rwanda</h3>
          <p class="text-sm text-slate-400">Discover Rwanda’s best destinations with curated tours, local guides, and authentic experiences.</p>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-emerald-300">Quick Links</h4>
          <ul class="mt-4 space-y-3 text-sm text-slate-400">
            <li><router-link to="/" class="hover:text-white">Home</router-link></li>
            <li><router-link to="/about" class="hover:text-white">About</router-link></li>
            <li><router-link to="/services" class="hover:text-white">Services</router-link></li>
            <li><router-link to="/gallery" class="hover:text-white">Gallery</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-emerald-300">Destinations</h4>
          <ul class="mt-4 space-y-3 text-sm text-slate-400">
            <li><router-link to="/destination" class="hover:text-white">Destination overview</router-link></li>
            <li><router-link to="/kigali" class="hover:text-white">Kigali</router-link></li>
            <li><router-link to="/northern" class="hover:text-white">Northern</router-link></li>
            <li><router-link to="/southern" class="hover:text-white">Southern</router-link></li>
            <li><router-link to="/eastern" class="hover:text-white">Eastern</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-emerald-300">Contact</h4>
          <ul class="mt-4 space-y-3 text-sm text-slate-400">
            <li>info@temberarwanda.com</li>
            <li>+250 788 555 942</li>
            <li>Kigali, Rwanda</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        <p>&copy; 2026 Tembera Rwanda. Created with care for unforgettable travel experiences.</p>
      </div>
    </div>
  </footer>
</template>