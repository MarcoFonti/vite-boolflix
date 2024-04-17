<!-- JS -->
<script>

/* IMPORTO STORE */
import { store } from '../date/store';


/* ESPORTAZIONE */
export default {


    /* NOME PAGINA */
    name: 'StyleBackground',


    /* DATI DI BASE DA UTILIZZARE NEL TEMPLATE */
    data: () => ({


        /* RECUPERO STORE */
        store,


        /* ALT IMMAGINE */
        alt: 'Sfondo BoolFlix'
    })

};

</script>


<!-- HTML -->
<template>

    <!-- SE LA LUNGHEZZA DEL'ARRAY DEI FILM E' IDENTICA A 0 MOSTRA IL RECIPIENTE SFONDO  -->
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