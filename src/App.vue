<!-- JS -->
<script>

// IMPORTO HEADER
import AppHeader from './components/AppHeader.vue';
// IMPORTO MAIN
import AppMain from './components/AppMain.vue';
// IMPORTO STORE
import { store } from './data/store'
// IMPORTO AXIOS
import axios from 'axios';
// VARIABILE API FILMS
const endpointFilms = 'https://api.themoviedb.org/3/search/movie?query=transformers&api_key=971f2abd7046b54105bad103b5cb00e3&language=it-IT';
// VARIABILE API SERIE TV
const endpointSeries = 'https://api.themoviedb.org/3/search/tv?query=arrow&api_key=971f2abd7046b54105bad103b5cb00e3&language=it-IT';

export default {
    // NOME
    name: 'AppBoolFlix',
    // COMPONENTI
    components: { AppHeader, AppMain },
};
</script>

<!-- HTML -->
<template>
    <!-- HEADER -->
    <AppHeader/>
    <!-- MAIN -->
    <AppMain/>
</template>

<!-- CSS -->
<style>

/* BODY */
body {
    height: 100vh;
}

</style>