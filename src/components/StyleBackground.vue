<!-- JS -->
<script>

// IMPORTO STORE
import { store } from '../data/store';

export default {
    // NOME
    name: 'StyleBackground',
    // DATI
    data: () => ({
        store,
        alt: 'Sfondo BoolFlix'
    })
    
};

</script>

<!-- HTML -->
<template>
    <!-- RECIPIENTE SFONDO -->
    <div v-if="store.films.length === 0" class="recipe-background">
        <img src="../../public/sfondo.jpg" :alt="alt">
        <h1>Benvenuto in BoolFlix</h1>
    </div>
</template>

<!-- CSS -->
<style scoped lang="scss">

// SFONDO
.recipe-background {
    min-height: 700px;
    position: relative;

    // TITOLO
    h1 {
        font-size: 50px;
        position: absolute;
        text-transform: uppercase;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        border-bottom: 10px double black;
    
    }

    // IMMAGINE
    img {
        width: 100%;
        height: 700px;
        opacity: 0.1;
    }

}

</style>