<!-- JS -->
<script>

export default {
    // NOME 
    name: 'ListCard',
    // PROPS
    props: {
        list: Object
    },
    // COMPUTED
    computed: {

        // BANDIERE O SCITTA NAZIONE
        listFlags() {
            const flags = ['it', 'en'];
            return flags.includes(this.list.original_language);
        },

        // URL PER IMMAGINI BANDIERE 
        flagUrl() {
            const url = new URL(`../assets/img/${this.list.original_language}.png`, import.meta.url);
            return url.href
        }
    }
    

};
</script>

<!-- HTML -->
<template>
    <!-- LISTA FILM E SERIE -->
    <ul>
        <li>{{ list.title || list.name }}</li>
        <li>{{ list.original_title || list.original_name }}</li>
        <li>
            <img v-if="listFlags" :src="flagUrl" :alt="list.original_language">
            <span v-else>{{ list.original_language }}</span>
        </li>
        <li>{{ list.vote_average }}</li>
    </ul>
</template>

<!-- CSS -->
<style scoped lang="scss">


</style>