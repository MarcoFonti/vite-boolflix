import { createApp } from 'vue';
import App from './App.vue';
// IMPORTO LIBRERIA
import { library } from '@fortawesome/fontawesome-svg-core';
// IMPORTO COMPONENTE
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// IMPORTO ICONA
import { faStar as solidFaStar } from '@fortawesome/free-solid-svg-icons';
// IMPORTO ICONA
import { faStar as regularFaStar } from '@fortawesome/free-regular-svg-icons'; 

// ICONE DA CARICARE
library.add(solidFaStar, regularFaStar);

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
