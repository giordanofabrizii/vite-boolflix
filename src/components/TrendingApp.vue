<script>
import {store} from '../store.js';
import axios from 'axios';
import ArticleApp from './ArticleApp.vue';


export default{
    data() {
        return{
            store,
            trending:[],
            topRated:[],
        }
    },
    components:{
        ArticleApp,
    },
    created(){
        axios.get('https://api.themoviedb.org/3/movie/popular?' + this.store.apiKey + this.store.language)
        .then(response => {
            this.trending = response.data.results;
        })
        axios.get('https://api.themoviedb.org/3/movie/top_rated?' + this.store.apiKey + this.store.language)
        .then(response => {
            this.topRated = response.data.results;
        })
    }
}
</script>

<template>
    <section>
        <h1>I titoli del momento:</h1>
        <div class="article-container">
            <ArticleApp v-for="film in trending" :element="film"/>
        </div>
    </section>
    <section>
        <h1>Top rated:</h1>
        <div class="article-container">
            <ArticleApp v-for="film in topRated" :element="film"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

    section{
        height: 50%;

        h1{
            color: white;
            font-size: 1.5rem
        }

        .article-container{
            @include flexRow;
            width: 100%;
            overflow-x: scroll;
        }
    }
</style>