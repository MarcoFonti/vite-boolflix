<!-- JS -->
<script>

export default {
    // NOME
    name: 'NearForm',
    // DATI
    data: () => ({
        near: ''
    }),
    // PROPS
    props: {
        placeholder: String,
        send: String
    },
    // EMITS
    emits: ['option-submit']
    
};

</script>

<!-- HTML -->
<template>
    <!-- FORM -->
    <form @submit.prevent="$emit('option-submit', near)">
        <input type="text" :placeholder="placeholder" v-model="near" @keyup="$emit('option-submit', near)">
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