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
        <section v-if="store.films.length > 0">
            <article v-for="(film,index) in store.films">
                <h1>{{ index + 1 }}) {{film.title}}</h1>
                <p>Titolo originale: {{ film.original_title }}</p>
                <p>Lingua originale: 
                    <img class="flag" v-if="this.store.languageFlags.includes(film.original_language)" :src="'../src/img/' + film.original_language + '.png'" alt=""> 
                    <span v-else>{{ film.original_language }}</span>
                </p>
                <p>Voto: {{ film.vote_average }}</p>
            </article>
        </section>
        <section v-else>
            <h1>Cerca qualcosa per vedere i risultati</h1>
        </section>
    </div>
</template>

<style lang="scss" scoped>

.flag{
    width: 2rem;
}

</style>