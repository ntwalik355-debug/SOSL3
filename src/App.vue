<script setup>
import { provide, ref } from 'vue'
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'

const selectedLang = ref('en')

const languageOptions = {
  en: 'English',
  fr: 'Français',
  rw: 'Kinyarwanda',
}

const translations = {
  navbar: {
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      places: 'Places',
      contact: 'Contact',
      gallery: 'Gallery',
      destinations: 'Destinations',
    },
    fr: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      places: 'Lieux',
      contact: 'Contact',
      gallery: 'Galerie',
      destinations: 'Destinations',
    },
    rw: {
      home: 'Ahabanza',
      about: 'Ibyerekeye',
      services: 'Serivisi',
      places: 'Aho gusura',
      contact: 'Twandikire',
      gallery: 'Ibyerekanwa',
      destinations: 'Intara',
    },
  },
  footer: {
    en: {
      title: 'Tembera Rwanda',
      desc: 'Discover Rwanda’s best destinations with curated tours, local guides, and authentic experiences.',
      quickLinks: 'Quick Links',
      destinations: 'Destinations',
      contact: 'Contact',
      home: 'Home',
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      destinationOverview: 'Destination overview',
      kigali: 'Kigali',
      northern: 'Northern',
      southern: 'Southern',
      eastern: 'Eastern',
      copyright: '© 2026 Tembera Rwanda. Created by NDAHIGWA BRIGHT',
    },
    fr: {
      title: 'Tembera Rwanda',
      desc: 'Découvrez les meilleures destinations du Rwanda avec des circuits sélectionnés, des guides locaux et des expériences authentiques.',
      quickLinks: 'Liens rapides',
      destinations: 'Destinations',
      contact: 'Contact',
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      gallery: 'Galerie',
      destinationOverview: 'Aperçu des destinations',
      kigali: 'Kigali',
      northern: 'Nord',
      southern: 'Sud',
      eastern: 'Est',
      copyright: '© 2026 Tembera Rwanda. Créé par NDAHIGWA BRIGHT',
    },
    rw: {
      title: 'Tembera Rwanda',
      desc: 'Tembera ahantu nyaburanga mu Rwanda hamwe n’ingendo zateguwe, abayobozi b’ahantu, n’uburambe nyabwo.',
      quickLinks: 'Amahoro yihuse',
      destinations: 'Aho gusura',
      contact: 'Twandikire',
      home: 'Ahabanza',
      about: 'Ibyerekeye',
      services: 'Serivisi',
      gallery: 'Ibyerekanwa',
      destinationOverview: 'Isuzuma ry’aho gusura',
      kigali: 'Kigali',
      northern: 'Amajyaruguru',
      southern: 'Amajyepfo',
      eastern: 'Uburasirazuba',
      copyright: '© 2026 Tembera Rwanda. Yakozwe na NDAHIGWA BRIGHT',
    },
  },
  contact: {
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
  },
}

const setLanguage = (lang) => {
  selectedLang.value = lang
  document.documentElement.lang = lang
}

provide('language', selectedLang)
provide('setLanguage', setLanguage)
provide('languageOptions', languageOptions)
provide('translations', translations)
document.documentElement.lang = selectedLang.value
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Navbar />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
 
