<!-- JS -->
<script>

export default {
    // NOME
    name: 'ProgramInfo',
    // DATI
    data: () => ({
        isVisible: true
    }),
    // PROPS
    props: {
        test: String
    },
    // COMPUTED 
    computed : {
        // BOTTONE INFO
        toggleVisibility() {
            this.isVisible = !this.isVisible
        },

        // CLICK INFO
        clickToggle() {
            if(this.isVisible){
                return 'info'
            } else {
                return 'chiudi'
            }
        }
    }
};
</script>

<!-- HTML -->
<template>
    <div class="recipe-plot">
        <button @click="toggleVisibility">{{ clickToggle }}</button>
        <p :class="{ 'hidden' : isVisible }">{{ test }}</p>
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