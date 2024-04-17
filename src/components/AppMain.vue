<!-- JS -->
<script>


/* IMPORT LISTA FILM E SERIE */
import ListCard from './ListCard.vue';
/* IMPORTO STORE */
import { store } from '../date/store'


/* ESPORTAZIONE */
export default {


    /* NOME PAGINA */
    name: 'AppMain',


    /* DATI DI BASE DA UTILIZZARE NEL TEMPLATE */
    data: () => ({

        /* RECUPERO STORE */
        store,


        /* URL IMMAGINE POSTER */
        imageUrl: 'https://image.tmdb.org/t/p/w342',
    }),


    /* COMPONENTI */
    components: { ListCard }

};

</script>

<!-- HTML -->
<template>

    <!-- RECIPIENTE LISTA -->
    <main id="recipe-list">
        <!-- SE L'ARRAY DEI FILM IN STORE E' MAGGIORE DI 0  -->
        <header v-if="store.films.length > 0">
            <h1>film</h1>
        </header>
        <section class="recipe-films">
            <!-- CICLO SULL'ARRAY E RECUPERO OGNI SINGOLO ELEMENTO E INDICE E PASSO COME PROPS SIA LA LISTA DEI FILM CHE URL DEL IMMAGINE POSTER -->
            <ListCard v-for="film in store.films" :key="film.id" :list="film" :baseUrl="imageUrl" />
        </section>
        <!-- SE L'ARRAY DELLE SERIE IN STORE E' MAGGIORE DI 0  -->
        <header v-if="store.series.length > 0">
            <h1>serie</h1>
        </header>
        <section class="recipe-series">
            <!-- CICLO SULL'ARRAY E RECUPERO OGNI SINGOLO ELEMENTO E INDICE E PASSO COME PROPS SIA LA LISTA DELLE SERIE CHE URL DEL IMMAGINE POSTER -->
            <ListCard v-for="serie in store.series" :key="serie.id" :list="serie" :baseUrl="imageUrl" />
        </section>
    </main>

</template>


<!-- CSS -->
<style scoped lang="scss">
// RECIPENTE LISTA 
#recipe-list {
    padding: 10px;

    // TITOLO FILM E SERIE
    h1 {
        text-transform: uppercase;
    }

    // SEZIONE FILM
    .recipe-films {
        display: flex;
        justify-content: flex-start;
        overflow: auto;
    }

    // SEZIONE SERIE
    .recipe-series {
        display: flex;
        overflow: auto;
        justify-content: flex-start;
    }

}
</style>