<!-- JS -->
<script>


/* ESPORTAZIONE */
export default {


    /* NOME PAGINA */
    name: 'NearForm',


    /* DATI DI BASE DA UTILIZZARE NEL TEMPLATE */
    data: () => ({


        /* CREO UN COLLEGAMENTO CON CIO' CHE SCRIVERA' L'UTENTE */
        near: ''
    }),


    /* PROPS CHE RICEVE 2 STRINGHE (DA APPHEADER) */
    props: {
        placeholder: String,
        send: String
    },


    /* EMITS (INVIO AD APPHEADER) */
    emits: ['option-submit']

};

</script>


<!-- HTML -->
<template>

    <!-- FORM CHE AL EVENTO SUBMIT.PREVENT PASSO UN EMIT CON ARGOMENTO (IL NOME CREATO NELL'EMITS) E IL VALORE SCELTO DALL'UTENTE (NEAR) -->
    <form @submit.prevent="$emit('option-submit', near)">
        <!-- INPUT CHE RICEVE COME PROPS UNA STRINGA E CREO UNA DIRETTIVA V-MODEL PER RECUPERARE IL VALORE SCELTO DALL'UTENTE E AL KEYUP PASSO UN EMIT CON ARGOMENTO (IL NOME CREATO NELL'EMITS) E IL VALORE SCELTO DALL'UTENTE (NEAR) -->
        <input type="text" :placeholder="placeholder" v-model="near" @keyup="$emit('option-submit', near)">
        <!-- BOTTONE -->
        <button>{{ send }}</button>
    </form>

</template>


<!-- CSS -->
<style scoped lang="scss">
// FORM
form {
    display: flex;
    gap: 10px;

    // INPUT 
    input {
        padding: 10px 20px;
        width: 250px;
        border: 1px solid transparent;
    }

    // BOOTONE
    button {
        padding: 10px 20px;
        background-color: transparent;
        border: 1px solid #ff0000;
        color: #ffffff;
        text-transform: uppercase;
        cursor: pointer;

        // AL CLICK
        &:active {
            background-color: #ff0000;
        }

    }

}
</style>