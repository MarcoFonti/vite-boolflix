<!-- JS -->
<script>


/* IMPORTO INFO PROGRAMMI */
import ProgramInfo from './ProgramInfo.vue'


/* ESPORTAZIONE */
export default {


    /* NOME PAGINA */
    name: 'ListCard',


    /* COMPONENTI */
    components: { ProgramInfo },


    /* PROPS CHE RICEVE UN OGETTO E UNA STRINGA (DA APPMAIN) */
    props: {
        list: Object,
        baseUrl: String,
    },


    /* INTERAGISCO CON LA FUNZIONE DATA() */
    computed: {


        /* BANDIERE O SCITTA NAZIONE */
        listFlags() {

            /* CREO UN ARRAY CON ACRONIMO DELLE NAZIONI */
            const flags = ['it', 'en', 'fr', 'ja'];


            /* SE UNO DEGLI ELEMENTI DENTRO ALLA LISTA DEI FILM/SERIE (PASSATI COME PROPS) E' PRESENTE NELL'ARRAY RESTITUISCE TRUE */
            return flags.includes(this.list.original_language);
        },

        /* URL PER IMMAGINI BANDIERE */
        flagUrl() {


            /* CREO UNA VARIBILE A CUI ASSEGNO IL MERODO URL E RECUPERO OGNI SINGOLA IMMAGINE DALL'OGGETTO PASSATO COME PROPS */
            const url = new URL(`../assets/img/${this.list.original_language}.png`, import.meta.url);


            /* RESTITUSCO HREF DEL URL */
            return url.href
        },


        /* URL POSTER */
        posterUrl() {


            /* RESTITUISCO LA PROPS ARRIVATA COME STRINGA (HTTP) E LO UNISCO CON OGNI SINGOLO POSTER */
            return `${this.baseUrl}/${this.list.poster_path}`
        },


        /* LISTA VOTI */
        listVote() {

            /* RESTITUISCO IL METODO MATH PER DIVIDERE PER 2 OGNI SINGOLO VOTO */
            return Math.ceil(this.list.vote_average / 2)
        },


        /* POSTER */
        posterSrc() {


            /* SE NON ESISTE IL POSTER */
            if (!this.list.poster_path) {


                /* RESTITUISCO */
                return 'https://www.altavod.com/assets/images/poster-placeholder.png'


                /* ALTRIMENTI */
            } else {


                /* RESTUTISCO LA COMPUTED POSTEURL */
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
            <!-- IMMAGINE POSTER -->
            <img class="img-poster" :src="posterSrc" :alt="list.title || list.name">
            <!-- INFO FILM E SERIE -->
            <div class="recipe-info">
                <h1>{{ list.title || list.name }}</h1>
                <!-- CICLO FOR CHE INCREMENTA FINO A 5 PER GENERARE LE STELLE, SE IL NUMERO INCRENTATO E' MINORE O UGULE A IL NUMERO NELLA LISTA DEI VOTI DEI FILM/SERIE RIEPI LA STELLA -->
                <span><font-awesome-icon v-for="n in 5" :key="n"
                        :icon="[n <= listVote ? 'fas' : 'far', 'star']" /></span>
                <h5>{{ list.original_title || list.original_name }}</h5>
                <span class="recipe-language">
                    <!-- SE CE URL DELL'IMMAGINE LA METTI -->
                    <img v-if="flagUrl" :src="flagUrl" :alt="list.original_language">
                    <!-- ALTRIMENTI -->
                    <span v-else>{{ list.original_language }}</span>
                </span>
            </div>
            <span>
                <!-- TESTO DEL FILM/SERIE -->
                <ProgramInfo :test="list.overview" />
            </span>
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