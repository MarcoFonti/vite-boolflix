<!-- JS -->
<script>


/* ESPORTAZIONE */
export default {


    /* NOME PAGINA */
    name: 'ProgramInfo',


    /* DATI DI BASE DA UTILIZZARE NEL TEMPLATE */
    data: () => ({


        /* VISIBILITA' DEL TESTO */
        isVisible: false
    }),


    /* PROPS CHE RICEVE UNA STRINGA (DA LISTCARD) */
    props: {
        test: String
    },


    /* INTERAGISCO CON LA FUNZIONE DATA() */
    computed: {


        /* TOGLE DEL BOTTONE */
        toggleVisibility() {
            this.isVisible = !this.isVisible
        },


        /* CLICK TESTO BOTTONE */
        clickToggle() {


            /* SE IL TESTO E' NASCOSTO */
            if (this.isVisible === false) {


                /* RESTITUISCI */
                return 'info'


                /* ALTRIMENTI */
            } else {


                /* RESTITUISCI */
                return 'chiudi'
            }
        }
    }
};

</script>


<!-- HTML -->
<template>

    <div class="recipe-plot">
        <!-- AL CLCIK SUL BOTTONE RICHIAMO LA COMPUTEND DEL TOGGLE E LA COMPUTED DELLA SCRITTA -->
        <button @click="toggleVisibility">{{ clickToggle }}</button>
        <!-- TESTO CHE PARTE NON VISIBILE -->
        <p :class="{ 'hidden': isVisible === false }">{{ test }}</p>
    </div>

</template>


<!-- CSS -->
<style scoped lang="scss">
// BOOTNE
button {
    background-color: transparent;
    color: goldenrod;
    border: 1px solid transparent;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;

    // HOVER SU BOTTONE
    &:hover {
        border-bottom: 1px solid goldenrod;
    }
}

// TESTO 
.hidden {
    display: none;
}
</style>