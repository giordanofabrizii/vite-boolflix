<script>
import {store} from '../store.js';


export default{
    data() {
        return{
            store,
        }
    }
}
</script>

<template>
    <div class="limited">
        <section>
            <h1 v-for="film in store.films">{{ film.title }}</h1>
        </section>
    </div>
</template>

<style scoped>

</style>