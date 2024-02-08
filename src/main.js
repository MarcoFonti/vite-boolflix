import { createApp } from 'vue';
import App from './App.vue';
// IMPORTO LIBRERIA
import { library } from '@fortawesome/fontawesome-svg-core';
// IMPORTO COMPONENTE
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// IMPORTO ICONE
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons'

// ICONE DA CARICARE
library.add(faStar, faStar);

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
