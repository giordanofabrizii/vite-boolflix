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
    <main>
        <div class="limited">
            <div v-if="store.series.length > 0 || store.films.length > 0">
                <section class="films" v-if="store.films.length > 0">
                    <h1>FILM</h1>
                    <div class="article-container">
                        <article v-for="(film,index) in store.films">
                            <img class="poster" v-if="film.poster_path !== null" :src="'https://image.tmdb.org/t/p/' + 'w342/' + film.poster_path" alt="">
                            <img v-else class="poster placeholder" src="../img/poster_placeholder.jpg" alt="placeholder image">
                            <div class="info">
                                <h1>Titolo: <span>{{film.title}}</span></h1>
                                <h2 v-if="film.title != film.original_title">Titolo originale: <span>{{ film.original_title }}</span></h2>
                                <h3>Lingua originale: 
                                    <img class="flag" v-if="this.store.languageFlags.includes(film.original_language)" :src="'../src/img/' + film.original_language + '.png'" alt=""> 
                                    <span v-else>{{ film.original_language }}</span>
                                </h3>
                                <div class="ratings">
                                    <i v-for="i in (Math.floor(film.vote_average / 2))" class="fa-solid fa-star yellow"></i>
                                    <i v-for="i in (5 - Math.floor(film.vote_average / 2))" class="fa-regular fa-star"></i>
                                </div>
                                <div>
                                    <p class="overview">Overview: <span>{{ film.overview }}</span></p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <section class="tvs" v-if="store.series.length > 0">
                    <h1>SERIE TV</h1>
                    <div class="article-container">
                        <article v-for="(tv,index) in store.series">
                            <img class="poster" v-if="tv.poster_path !== null" :src="'https://image.tmdb.org/t/p/' + 'w342/' + tv.poster_path" alt="">
                            <img v-else class="poster placeholder" src="../img/poster_placeholder.jpg" alt="placeholder image">
                            <div class="info">
                                <h1>Titolo: <span>{{tv.name}}</span></h1>
                                <h2 v-if="tv.title != tv.original_title">Titolo originale: <span>{{ tv.original_name }}</span></h2>
                                <h3>Lingua originale: 
                                    <img class="flag" v-if="this.store.languageFlags.includes(tv.original_language)" :src="'../src/img/' + tv.original_language + '.png'" alt=""> 
                                    <span v-else>{{ tv.original_language }}</span>
                                </h3>
                                <div class="ratings">
                                    <i v-for="i in (Math.floor(tv.vote_average / 2))" class="fa-solid fa-star yellow"></i>
                                    <i v-for="i in (5 - Math.floor(tv.vote_average / 2))" class="fa-regular fa-star"></i>
                                </div>
                                <div>
                                    <p class="overview">Overview: <span>{{ tv.overview }}</span></p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
            <section class="unsearched" v-else>
                <h1>Cerca qualcosa per vedere i risultati</h1>
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

                article{
                    margin: 1rem;
                    display: flex;
                    align-items: center;
                    box-shadow: 0 0 15px red;
                    border-radius: 12px;
                    position: relative;


                    .poster{
                    height: 20rem;
                    border-radius: 12px;
                    width: 13.5rem;

                        img{
                            width: 100%;
                        }    
                    }

                    .info{
                    border-radius: 12px;

                        display: none;
                    }

                    &:hover{
                        .poster{
                            // display: none
                            filter: blur(10px);
                        }
                        .info{
                            display: block;
                            background-color: rgba($color: #000000, $alpha: 0.4);
                            // background-color: black;
                            position: absolute;
                            top: 0;
                            z-index: 1;
                            color: white;
                            height: 20rem;
                            width: 13.5rem;
                            padding: 2rem .5rem;
                            
                            h1,
                            h2{
                                font-weight: 600;
                                font-size: 1.2rem;

                                span{
                                    font-weight: 400;
                                }
                            }

                            h3{
                                font-size: 1rem;
                                .flag{
                                    width: 2rem;
                                    vertical-align: middle
                                }
                            }

                            .ratings{
                                margin: .3rem 0;

                                .yellow {
                                    color: rgb(255, 179, 80)
                                }
                            }

                            p{
                                font-weight: 600;
                            }

                            .overview{
                                height: 4.5rem;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                span{
                                    font-weight: 400;
                                }
                            }

                        }
                    }
                }
            }
        }

        .unsearched{
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