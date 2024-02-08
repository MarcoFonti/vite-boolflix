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
        imageUrl: 'https://image.tmdb.org/t/p/w342'   
    }),
    // COMPONENTI
    components: { ListCard }
    
};
</script>

<!-- HTML -->
<template>
    <!-- RECIPIENTE LISTA -->
    <main id="recipe-list">
        <section class="recipe-films">
            <h1>film</h1>
            <ListCard v-for="film in store.films" :key="film.id" :list="film" :baseUrl="imageUrl"/>
        </section>
        <section class="recipe-series">
            <h1>serie</h1>
            <ListCard v-for="serie in store.series" :key="serie.id" :list="serie" :baseUrl="imageUrl"/>
        </section>
    </main>
</template>

<!-- CSS -->
<style scoped lang="scss">

// RECIPENTE LISTA 
#recipe-list {

    // TITOLO FILM E SERIE
    h1 {
        text-transform: uppercase;
    }
}

</style>