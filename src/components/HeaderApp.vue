<script>
import {store} from '../store.js';
import axios from 'axios';

export default{
    data() {
        return{
            store,
        }
    },
    methods: {
        search: function(){
            axios.get(this.store.filmUrl + this.store.apiKey + this.store.language + '&query=' + this.store.searching)
            .then(response => {
                store.films = response.data.results
            })
            axios.get(this.store.seriesUrl + this.store.apiKey + this.store.language + '&query=' + this.store.searching)
            .then(response => {
                store.series = response.data.results
            })
        }
    },
    created(){
        axios.get('https://api.themoviedb.org/3/genre/movie/list?language=it&' + this.store.apiKey)
        .then(response => {
            store.genreList = response.data.genres;
        })
        axios.get('https://api.themoviedb.org/3/genre/tv/list?language=it&' + this.store.apiKey)
        .then(response => {
            store.genreList.concat(response.data.genres);
        })
    }
}
</script>

<template>
    <header>
        <div class="limited">
            <h1>Boolflix</h1>
            <input type="text" placeholder="Comincia a cercare" @keyup="search()" v-model="store.searching">
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

header {
    background-color: black;
    height: 4.5rem;

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