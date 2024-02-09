<!-- JS -->
<script>

// IMPORTO FORM
import NearForm from './NearForm.vue';

export default {
    // NOME
    name: 'AppHeader',
    // COMPONENTI
    components: { NearForm },
    // EMITS
    emits: ['type-submit']
    
};

</script>

<!-- HTML -->
<template>
    <!-- HEADER -->
    <header id="recipe-header">
        <h1>boolflix</h1>
        <!-- FORM -->
        <NearForm placeholder="Cerca Film e Serie Tv" send="invia" @option-submit="$emit('type-submit', $event)"/>
    </header>
</template>

<!-- CSS -->
<style scoped lang="scss">

// HEADER 
#recipe-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000000;
    padding: 0px 20px;

    // TITOLO
    h1 {
        color: #ff0000;
        text-transform: uppercase;
        font-size: 50px;
    }

}

</style>