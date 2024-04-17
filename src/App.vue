<!-- JS -->
<script>


/* IMPORTO HEADER */
import AppHeader from './components/AppHeader.vue';
/* IMPORTO MAIN */
import AppMain from './components/AppMain.vue';
/* IMPORTO SFONDO PRINCIPALE */
import StyleBackground from './components/StyleBackground.vue';
/* IMPORTO STORE */
import { store } from './date/store';
/* IMPORTO AXIOS */
import axios from 'axios';
/* CHIAMATA API FILMS */
const endpointFilms = 'https://api.themoviedb.org/3/search/movie?query=transformers&api_key=971f2abd7046b54105bad103b5cb00e3&language=it-IT';
/* CHIAMATA API SERIE TV */
const endpointSeries = 'https://api.themoviedb.org/3/search/tv?query=arrow&api_key=971f2abd7046b54105bad103b5cb00e3&language=it-IT';


/* ESPORTAZIONE */
export default {


    /* NOME PAGINA */
    name: 'AppBoolFlix',


    /* COMPONENTI */
    components: { AppHeader, AppMain, StyleBackground },


    /* FUNZIONI */
    methods: {


        /* FUNZIONE PER CHIAMARE API DEI FILM E GLI PASSO COME ARGOMENTO ENDOPOINTFILMS */
        fetchResearchFilms(endpointFilms) {

            /* AXIOS */
            axios.get(endpointFilms).then(res => {


                /* RECUPERO DA STORE ARRAY VUOTO DEI FILM E LO RIASSEGNO CON I DATI CHE CI SONO DENTRO RES.DATA.RESULTS */
                store.films = res.data.results


                /* CONTROLLO RISPOSTA DENTRO A RES */
                console.log('film', store.films)


                /* ERRORE */
            }).catch(err => { console.error(err) })
        },


        /* FUNZIONE PER CHIAMARE API DELLE SERIE TV E GLI PASSO COME ARGOMENTO ENDOPOINTSERIES */
        fetchResearchSeries(endpointSeries) {


            /* AXIOS */
            axios.get(endpointSeries).then(res => {


                /* RECUPERO DA STORE ARRAY VUOTO DELLE SERIE E LO RIASSEGNO CON I DATI CHE CI SONO DENTRO RES.DATA.RESULTS */
                store.series = res.data.results


                /* CONTROLLO RISPOSTA DENTRO A RES */
                console.log('serie', store.series)


                /* ERRORE */
            }).catch(err => { console.error(err) })
        },


        /* FUNZIONE PER IL FILTRAGGIO */
        filterNear(event) {


            /* ASSEGNO A UNA VARIBILE LA UNA STRINGA DI QUERY E GLI PASSO ENDOPOINT E IL VALORE SCELTO DALL'UTENTE (FILM) */
            const endpointFilms = `https://api.themoviedb.org/3/search/movie?query=${event}&api_key=971f2abd7046b54105bad103b5cb00e3&language=it-IT`;


            /* ASSEGNO A UNA VARIBILE LA UNA STRINGA DI QUERY E GLI PASSO ENDOPOINT E IL VALORE SCELTO DALL'UTENTE (SERIE) */
            const endpointSeries = `https://api.themoviedb.org/3/search/tv?query=${event}&api_key=971f2abd7046b54105bad103b5cb00e3&language=it-IT`;


            /* RICHIAMTO LA FUNZIONE CHE CHIAMA API E GLI PASSO COME ARGOMENTO LA VARIABILE CREATA (FILM) */
            this.fetchResearchFilms(endpointFilms);


            /* RICHIAMTO LA FUNZIONE CHE CHIAMA API E GLI PASSO COME ARGOMENTO LA VARIABILE CREATA (SERIE) */
            this.fetchResearchSeries(endpointSeries);
        }
    }
};

</script>


<!-- HTML -->
<template>

    <!-- HEADER, EVENTO GENERATO E PASSOTO TRAMITE EMITS (APPHEADER)-->
    <AppHeader @type-submit="filterNear" />
    <!-- SFONDO -->
    <StyleBackground />
    <!-- MAIN -->
    <AppMain />

</template>


<!-- CSS -->
<style>
/* BODY */
body {
    height: 100vh;
    margin: 0px;
    background-color: #595959
}
</style>