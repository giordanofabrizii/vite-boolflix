<script>
import {store} from '../store.js';

export default{
    data() {
        return{
            store,
        }
    },
    props:{
        element: Object,
    }
}
</script>

<template>
    <article>
        <!-- ? Image of the element -->
        <img class="poster" v-if="this.element.poster_path !== null" :src="'https://image.tmdb.org/t/p/' + 'w342/' + this.element.poster_path" alt="">
        <img v-else class="poster placeholder" src="../img/poster_placeholder.jpg" alt="placeholder image">


        <!-- ! Info of the element -->
        <div class="info">

            <!-- Title and original title -->
            <div v-if="this.element.title">
                <h1>Titolo: <span>{{this.element.title}}</span></h1>
                <h2 v-if="this.element.title != this.element.original_title">Titolo originale: <span>{{ this.element.original_title }}</span></h2>
            </div>
            <div v-else-if="this.element.name">
                <h1>Titolo: <span>{{this.element.name}}</span></h1>
                <h2 v-if="this.element.name != this.element.original_name">Titolo originale: <span>{{ this.element.original_name }}</span></h2>
            </div>

            <!-- # Language -->
            <h3>Lingua originale: 
                <!-- <img class="flag" v-if="this.store.languageFlags.includes(this.element.original_language)" :src="'../src/img/' + this.element.original_language + '.png'" alt=""> 
                <span v-else>{{ this.element.original_language }}</span> -->
                <img class="flag lang-icon" :class="'lang-icon-' + this.element.original_language" src="" alt="">
            </h3>

            <!-- > Stars -->
            <div class="ratings">
                <i v-for="i in (Math.floor(this.element.vote_average / 2))" class="fa-solid fa-star yellow"></i>
                <i v-for="i in (5 - Math.floor(this.element.vote_average / 2))" class="fa-regular fa-star"></i>
            </div>

            <!-- * Overview -->
            <div>
                <p class="overview" v-if="this.element.overview.length > 0">Overview: <span>{{ this.element.overview }}</span></p>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
@use '../styles/partials/flags' as *;

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
                        vertical-align: middle
                    }
                }

                .lang-icon {
                    background-image: url(../img/lang-flags.png);
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
</style>