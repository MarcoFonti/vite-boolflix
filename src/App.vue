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
    // FUNZIONI
    methods: {
        // RICERCA FILM
        fetchResearchFilms(endpointFilms) {
            axios.get(endpointFilms).then(res => {
                store.films = res.data.results
                console.log('film',store.films)
            }).catch(err => { console.error(err) })
        },
        // RICERCA SERIE
        fetchResearchSeries(endpointSeries) {
            axios.get(endpointSeries).then(res => {
                store.series = res.data.results
                console.log('serie',store.series)
            }).catch(err => { console.error(err) })
        },
        // FILTRO FILM E SERIE
        filterNear(event) {
          const endpointFilms = `https://api.themoviedb.org/3/search/movie?query=${event}&api_key=971f2abd7046b54105bad103b5cb00e3&language=it-IT`;
          const endpointSeries = `https://api.themoviedb.org/3/search/tv?query=${event}&api_key=971f2abd7046b54105bad103b5cb00e3&language=it-IT`;
          this.fetchResearchFilms(endpointFilms);
          this.fetchResearchSeries(endpointSeries);
        }
    }
};
</script>

<!-- HTML -->
<template>
    <!-- HEADER -->
    <AppHeader @type-submit="filterNear"/>
    <!-- MAIN -->
    <AppMain/>
    <FontAwesomeIcon icon="fa-regular fa-star" />
</template>

<!-- CSS -->
<style>

/* BODY */
body {
    height: 100vh;
}

</style>