<script>
export default{
    data() {
        return{
            
        }
    }
}
</script>

<template>
    <header>
        <div class="limited">
            <h1>Boolfix</h1>
            <input type="text" placeholder="Comincia a cercare">
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;
header {
    background-color: black;

    div{
        @include flexRow;
        justify-content: space-between;
        padding: 1rem 0;

        h1 {
            color: $primary;
            text-transform: uppercase;
        }

        input{
            padding: .5rem;
            border: none;
            border-radius: 12px;
        }
    }

}
</style>