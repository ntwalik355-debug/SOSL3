<template>
  <footer class="bg-emerald-950 text-slate-100 px-6 py-12 sm:px-8">
    <div class="mx-auto max-w-7xl space-y-10">
      <div class="grid gap-10 md:grid-cols-4">
        <div class="space-y-4">
          <h3 class="text-2xl font-semibold text-emerald-300">{{ t.title }}</h3>
          <p class="text-sm text-slate-400">{{ t.desc }}</p>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-emerald-300">{{ t.quickLinks }}</h4>
          <ul class="mt-4 space-y-3 text-sm text-slate-400">
            <li><router-link to="/" class="hover:text-white">{{ t.home }}</router-link></li>
            <li><router-link to="/about" class="hover:text-white">{{ t.about }}</router-link></li>
            <li><router-link to="/services" class="hover:text-white">{{ t.services }}</router-link></li>
            <li><router-link to="/gallery" class="hover:text-white">{{ t.gallery }}</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-emerald-300">{{ t.destinations }}</h4>
          <ul class="mt-4 space-y-3 text-sm text-slate-400">
            <li><router-link to="/destination" class="hover:text-white">{{ t.destinationOverview }}</router-link></li>
            <li><router-link to="/kigali" class="hover:text-white">{{ t.kigali }}</router-link></li>
            <li><router-link to="/northern" class="hover:text-white">{{ t.northern }}</router-link></li>
            <li><router-link to="/southern" class="hover:text-white">{{ t.southern }}</router-link></li>
            <li><router-link to="/eastern" class="hover:text-white">{{ t.eastern }}</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-emerald-300">{{ t.contact }}</h4>
          <ul class="mt-4 space-y-3 text-sm text-slate-400">
            <li>info@temberarwanda.com</li>
            <li>+250 788 555 942</li>
            <li>Kigali, Rwanda</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-emerald-800 pt-6 text-center text-sm text-slate-300">
        <p>{{ t.copyright }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, inject } from 'vue'

const language = inject('language')
const translations = inject('translations')
const t = computed(() => translations.footer[language.value])
</script>