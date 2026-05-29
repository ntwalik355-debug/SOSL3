<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <!-- Hero -->
    <section
      class="relative overflow-hidden bg-cover bg-center"
      style="background-image: url('/src/assets/contact.jpg'); min-height: 52vh;"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/70 to-slate-900/60"></div>
      <div class="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-24 text-center text-white">
        <div class="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <span class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-emerald-300 shadow-sm shadow-slate-950/20">
            {{ t.heroTop }}
          </span>
          <div class="flex items-center gap-3 rounded-3xl bg-white/10 px-4 py-3 text-sm text-white shadow-lg shadow-slate-950/20 backdrop-blur-sm">
            <label for="language" class="font-semibold text-slate-100">{{ t.languageLabel }}:</label>
            <select
              id="language"
              v-model="selectedLang"
              class="rounded-full border border-white/20 bg-slate-900/80 px-3 py-2 text-white outline-none transition duration-200 hover:border-emerald-200"
            >
              <option v-for="(label, code) in languageOptions" :key="code" :value="code">{{ label }}</option>
            </select>
          </div>
        </div>

        <div class="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-sm">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {{ t.heroTitle }}
          </h1>
          <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
            {{ t.heroDesc }}
          </p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-16">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div class="space-y-8">
          <div class="rounded-[2rem] bg-white p-10 shadow-xl shadow-slate-200/80">
            <p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              {{ t.sectionTop }}
            </p>
            <h2 class="mt-4 text-3xl font-bold text-slate-900">
              {{ t.sectionTitle }}
            </h2>
            <p class="mt-4 text-slate-600 leading-7">
              {{ t.sectionDesc }}
            </p>
          </div>

          <div class="grid gap-6 sm:grid-cols-2">
            <div class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">{{ t.cards.email.title }}</p>
              <p class="mt-3 text-lg font-semibold text-slate-900">info@temberarwanda.com</p>
              <p class="mt-2 text-sm text-slate-500">{{ t.cards.email.description }}</p>
            </div>
            <div class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">{{ t.cards.phone.title }}</p>
              <p class="mt-3 text-lg font-semibold text-slate-900">+250 788 555 942</p>
              <p class="mt-2 text-sm text-slate-500">{{ t.cards.phone.description }}</p>
            </div>
            <div class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">{{ t.cards.location.title }}</p>
              <p class="mt-3 text-lg font-semibold text-slate-900">Kigali, Rwanda</p>
              <p class="mt-2 text-sm text-slate-500">{{ t.cards.location.description }}</p>
            </div>
            <div class="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">{{ t.cards.support.title }}</p>
              <p class="mt-3 text-lg font-semibold text-slate-900">travel@temberarwanda.com</p>
              <p class="mt-2 text-sm text-slate-500">{{ t.cards.support.description }}</p>
            </div>
          </div>
        </div>

        <div class="rounded-[2rem] border border-slate-200 bg-slate-950/5 p-8 shadow-xl shadow-slate-200/50">
          <div class="rounded-[1.75rem] bg-white p-8 shadow-lg shadow-slate-300/50">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">{{ t.formTitle }}</p>
            <h3 class="mt-4 text-2xl font-bold text-slate-900">{{ t.formSubtitle }}</h3>
            <form class="mt-8 space-y-5">
              <label class="block">
                <span class="text-sm font-semibold text-slate-700">{{ t.labelName }}</span>
                <input
                  type="text"
                  :placeholder="t.placeholderName"
                  class="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400"
                />
              </label>
              <label class="block">
                <span class="text-sm font-semibold text-slate-700">{{ t.labelEmail }}</span>
                <input
                  type="email"
                  :placeholder="t.placeholderEmail"
                  class="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400"
                />
              </label>
              <label class="block">
                <span class="text-sm font-semibold text-slate-700">{{ t.labelMessage }}</span>
                <textarea
                  rows="4"
                  :placeholder="t.placeholderMessage"
                  class="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400"
                ></textarea>
              </label>
              <button
                type="button"
                class="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                {{ t.formButton }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const selectedLang = ref('en')

const languageOptions = {
  en: 'English',
  fr: 'Français',
  rw: 'Kinyarwanda',
}

const translations = {
  en: {
    languageLabel: 'Language',
    heroTop: 'Contact Tembera Rwanda',
    heroTitle: 'Let’s plan your next Rwanda adventure.',
    heroDesc:
      'Reach out for bookings, tour recommendations, travel support, or local guides. We’re ready to help you explore Rwanda with comfort and confidence.',
    sectionTop: 'Get in touch',
    sectionTitle: 'We’re here for every question.',
    sectionDesc:
      'Whether you need help planning accommodation, booking a tour, or arranging transportation, our team is ready to create a custom itinerary for your Rwanda journey.',
    cards: {
      email: {
        title: 'Email',
        description: 'We aim to reply within 24 hours.',
      },
      phone: {
        title: 'Phone',
        description: 'Available Monday to Saturday.',
      },
      location: {
        title: 'Location',
        description: 'Central office near Kigali city center.',
      },
      support: {
        title: 'Support',
        description: 'For travel and itinerary assistance.',
      },
    },
    formTitle: 'Quick message',
    formSubtitle: 'Ask us anything',
    labelName: 'Your name',
    placeholderName: 'Enter your full name',
    labelEmail: 'Your email',
    placeholderEmail: 'Enter your email address',
    labelMessage: 'Message',
    placeholderMessage: 'Describe your travel plans or questions',
    formButton: 'Send message',
  },
  fr: {
    languageLabel: 'Langue',
    heroTop: 'Contactez Tembera Rwanda',
    heroTitle: 'Préparons votre prochaine aventure au Rwanda.',
    heroDesc:
      'Contactez-nous pour les réservations, recommandations de circuits, assistance de voyage ou guides locaux. Nous sommes prêts à vous aider à explorer le Rwanda avec confort et confiance.',
    sectionTop: 'Entrer en contact',
    sectionTitle: 'Nous sommes là pour chaque question.',
    sectionDesc:
      'Que vous ayez besoin d’aide pour planifier un hébergement, réserver une visite ou organiser un transport, notre équipe est prête à créer un itinéraire personnalisé pour votre voyage au Rwanda.',
    cards: {
      email: {
        title: 'Email',
        description: 'Nous visons à répondre sous 24 heures.',
      },
      phone: {
        title: 'Téléphone',
        description: 'Disponible du lundi au samedi.',
      },
      location: {
        title: 'Localisation',
        description: 'Bureau central près du centre-ville de Kigali.',
      },
      support: {
        title: 'Assistance',
        description: 'Pour l’aide au voyage et à l’itinéraire.',
      },
    },
    formTitle: 'Message rapide',
    formSubtitle: 'Posez-nous une question',
    labelName: 'Votre nom',
    placeholderName: 'Entrez votre nom complet',
    labelEmail: 'Votre email',
    placeholderEmail: 'Entrez votre adresse email',
    labelMessage: 'Message',
    placeholderMessage: 'Décrivez votre projet de voyage ou vos questions',
    formButton: 'Envoyer le message',
  },
  rw: {
    languageLabel: 'Ururimi',
    heroTop: 'Vugana na Tembera Rwanda',
    heroTitle: 'Tegura urugendo rwawe rutaha mu Rwanda.',
    heroDesc:
      'Hamagara kubijyanye no kwitabira, inama z’utembera, ubufasha mu ngendo, cyangwa abayobozi b’ahantu. Turi ready kugufasha gusura u Rwanda mu bwisanzure no mu mutekano.',
    sectionTop: 'Twandikire',
    sectionTitle: 'Turi hano kuri buri kibazo.',
    sectionDesc:
      'Niba ukeneye ubufasha mu gutegura icumbi, gufata urugendo, cyangwa gutegura gutwara, itsinda ryacu ryiteguye gukora urugendo rwihariye ku rugendo rwawe mu Rwanda.',
    cards: {
      email: {
        title: 'Email',
        description: 'Turagerageza gusubiza mu masaha 24.',
      },
      phone: {
        title: 'Telefoni',
        description: 'Iri ku murongo kuva ku wa mbere kugeza ku wa gatandatu.',
      },
      location: {
        title: 'Aho turi',
        description: 'Ibiro bya Kigali hafi y’umujyi.',
      },
      support: {
        title: 'Inkunga',
        description: 'Kubijyanye n’ubufasha mu ngendo no gutegura gahunda.',
      },
    },
    formTitle: 'Ubutumwa vuba',
    formSubtitle: 'Tubaze icyo ushaka',
    labelName: 'Izina ryawe',
    placeholderName: 'Andika izina ryawe ryuzuye',
    labelEmail: 'Email yawe',
    placeholderEmail: 'Andika aderesi ya email yawe',
    labelMessage: 'Ubutumwa',
    placeholderMessage: 'Sobanura gahunda yawe y’urugendo cyangwa ibibazo ufite',
    formButton: 'Ohereza ubutumwa',
  },
}

const t = computed(() => translations[selectedLang.value])
</script>
