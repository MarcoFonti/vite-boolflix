<!-- JS -->
<script> 

// IMPORTO INFO PROGRAMMI
import ProgramInfo from './ProgramInfo.vue'

export default {
    // NOME 
    name: 'ListCard',
    // COMPONENTI
    components: { ProgramInfo },
    // PROPS
    props: {
        list: Object,
        baseUrl: String,
    },
    // COMPUTED
    computed: {

        // BANDIERE O SCITTA NAZIONE
        listFlags() {
            const flags = ['it', 'en', 'fr', 'ja'];
            return flags.includes(this.list.original_language);
        },

        // URL PER IMMAGINI BANDIERE 
        flagUrl() {
            const url = new URL(`../assets/img/${this.list.original_language}.png`, import.meta.url);
            return url.href
        },

        // URL POSTER
        posterUrl() {
            return `${this.baseUrl}/${this.list.poster_path}`
        },

        // LISTA VOTI
        listVote() {
           return Math.ceil(this.list.vote_average / 2)
        },

        // POSTER
        posterSrc() {
            if(!this.list.poster_path){
                return 'https://www.altavod.com/assets/images/poster-placeholder.png'
            } else {
                return this.posterUrl
            }
        }

    },

};

</script>

<!-- HTML -->
<template>
    <!-- LISTA FILM E SERIE -->
    <ul>
        <li class="recipe-content">
            <img class="img-poster" :src="posterSrc" :alt="list.title || list.name">
            <!-- INFO FILM E SERIE -->
            <div class="recipe-info">
                <h1>{{ list.title || list.name }}</h1>
                <span><font-awesome-icon v-for="n in 5" :key="n" :icon="[ n <= listVote ? 'fas': 'far', 'star']" /></span>
                <h5>{{ list.original_title || list.original_name }}</h5>
                <span class="recipe-language">
                    <img v-if="listFlags" :src="flagUrl" :alt="list.original_language">
                    <span v-else>{{ list.original_language }}</span>
                </span>
            </div>
            <span><ProgramInfo :test="list.overview"/></span>
        </li>
    </ul>
</template>

<!-- CSS -->
<style scoped lang="scss">

// LISTA 
ul {
    list-style: none;
    margin: 0px;
    padding: 10px;
    
    // COMPONENTI LISTA
    li {
        position: relative;

        // POSTER
        .img-poster {
            filter: brightness(100%);
            transition: filter 0.3s ease;
            height: 550px;
            width: 350px;
        }

        // INFO 
        .recipe-info {
            position: absolute;
            top: 0;
            display: none;
            color: aliceblue;

            // TITOLO FILM 
            h1 {
                text-transform: uppercase;
                font-size: 20px;
            }

            // IMMAGINE LINGUA
            .recipe-language img {
                width: 50px;
                height: 30px;
                border-radius: 3px;
            }

        }

    }

    // L'IMMAGINE ALL'HOVER DEL RECIPENETE CONTENUTO
    .recipe-content:hover .img-poster {
        filter: brightness(10%);
    }

    // INFO ALL'HOVER DEL RECIPENETE CONTENUTO
    .recipe-content:hover .recipe-info {
        display: flex;
        flex-direction: column;
        color: aliceblue;
        width: 100%;
        text-align: center;
    }

}

</style>