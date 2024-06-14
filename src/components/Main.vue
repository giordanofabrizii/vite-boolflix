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
        <div v-if="store.series.length > 0 || store.films.length > 0">
            <section v-if="store.films.length > 0">
                <h1>FILM</h1>
                <article v-for="(film,index) in store.films">
                    <h1>{{ index + 1 }}) {{film.title}}</h1>
                    <img class="poster" :src="'https://image.tmdb.org/t/p/' + 'w342/' + film.poster_path" alt="">
                    <p>Titolo originale: {{ film.original_title }}</p>
                    <p>Lingua originale: 
                        <img class="flag" v-if="this.store.languageFlags.includes(film.original_language)" :src="'../src/img/' + film.original_language + '.png'" alt=""> 
                        <span v-else>{{ film.original_language }}</span>
                    </p>
                    <span>
                        <i v-for="i in (Math.floor(film.vote_average / 2))" class="fa-solid fa-star"></i>
                        <i v-for="i in (5 - Math.floor(film.vote_average / 2))" class="fa-regular fa-star"></i>
                    </span>
                </article>
            </section>
            <section v-if="store.series.length > 0">
                <h1>SERIE TV</h1>
                <article v-for="(tv,index) in store.series">
                    <h1>{{ index + 1 }}) {{tv.name}}</h1>
                    <img class="poster" :src="'https://image.tmdb.org/t/p/' + 'w342/' + tv.poster_path" alt="">
                    <p>Titolo originale: {{ tv.original_name }}</p>
                    <p>Lingua originale: 
                        <img class="flag" v-if="this.store.languageFlags.includes(tv.original_language)" :src="'../src/img/' + tv.original_language + '.png'" alt=""> 
                        <span v-else>{{ tv.original_language }}</span>
                    </p>
                    <span>
                        <i v-for="i in (Math.floor(tv.vote_average / 2))" class="fa-solid fa-star"></i>
                        <i v-for="i in (5 - Math.floor(tv.vote_average / 2))" class="fa-regular fa-star"></i>
                    </span>
                </article>
            </section>
        </div>
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