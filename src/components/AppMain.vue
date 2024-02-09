<!-- JS -->
<script>

// IMPORT LISTA FILM E SERIE
import ListCard from './ListCard.vue';
// IMPORTO STORE
import { store } from '../data/store'

export default {
    // NOME 
    name: 'AppMain',
    // DATI
    data: () => ({
        store,
        imageUrl: 'https://image.tmdb.org/t/p/w342', 
    }),
    // COMPONENTI
    components: { ListCard }
    
};
</script>

<!-- HTML -->
<template>
    <!-- RECIPIENTE LISTA -->
    <main id="recipe-list">
        <header v-if="store.films.length > 0">
            <h1>film</h1>
        </header>
        <section class="recipe-films">
            <ListCard v-for="film in store.films" :key="film.id" :list="film" :baseUrl="imageUrl"/>
        </section>
        <header v-if="store.series.length > 0">
            <h1>serie</h1>
        </header>
        <section class="recipe-series">
            <ListCard v-for="serie in store.series" :key="serie.id" :list="serie" :baseUrl="imageUrl"/>
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