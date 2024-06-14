<script>
import {store} from '../store.js';
import axios from 'axios';

export default{
    data() {
        return{
            store,
            searching: '',
        }
    },
    methods: {
        search: function(){
            // console.log(this.store.url + this.store.api_key + '&query=' + this.searching)
            axios.get(this.store.url + this.store.apiKey + this.store.language + '&query=' + this.searching)
            .then(response => {
                store.films = response.data.results
            })
        }
    }
}
</script>

<template>
    <header>
        <div class="limited">
            <h1>Boolflix</h1>
            <input type="text" placeholder="Comincia a cercare" @keyup="search()" v-model="searching">
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