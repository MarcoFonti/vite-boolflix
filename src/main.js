import { createApp } from 'vue';
import App from './App.vue';
/* IMPORTO LIBRERIA */
import { library } from '@fortawesome/fontawesome-svg-core';
/* IMPORTO COMPONENTE ICONE */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* IMPORTO ICONA */
import { faStar as solidFaStar } from '@fortawesome/free-solid-svg-icons';
/* IMPORTO ICONA */
import { faStar as regularFaStar } from '@fortawesome/free-regular-svg-icons'; 


/* ICONE DA AGGIUNGERE ALLA LIBRERIA */
library.add(solidFaStar, regularFaStar);

const app = createApp(App)

/* AGGIUNGO AD APP IL COMPONENTE DELLE ICONE */
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
