<script>
import {store} from '../store.js';
import ArticleApp from './ArticleApp.vue';
import TrendingApp from './TrendingApp.vue';

export default{
    data() {
        return{
            store,
        }
    },
    components:{
        ArticleApp,
        TrendingApp,
    }
}
</script>

<template>
    <main>
        <div class="limited">
            <div v-if="store.series.length > 0 || store.films.length > 0">
                <section class="films" v-if="store.films.length > 0">
                    <h1>FILM</h1>
                    <div class="article-container">
                        <ArticleApp v-for="film in store.films" :element="film"/>
                    </div>
                </section>
                <section class="tvs" v-if="store.series.length > 0">
                    <h1>SERIE TV</h1>
                    <div class="article-container">
                        <ArticleApp v-for="tv in store.series" :element="tv"/>
                    </div>
                </section>
            </div>
            <section class="unsearched" v-else-if="store.searching.length < 1">
                <TrendingApp/>
            </section>
            <section class="unfounded" v-else>
                <h1>La ricerca non ha prodotto risultati, ci dispiace</h1>
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

main {
    background-color: black;
    height: calc(100vh - 4.5rem);

    .limited{
        height: 100%;
    
        .films,
        .tvs{
            height: 50%;

            h1{
                color: white;
            }

            .article-container{
                @include flexRow;
                width: 100%;
                overflow-x: scroll;
            }
        }

        .unfounded{
        @include flexRow;
        height: 100%;

            h1{
                text-align: center;
                width: 100%;
                color: white;
            }
        }
    }
}

</style>