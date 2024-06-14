import {reactive} from 'vue';

export const store = reactive ({
    url: 'https://api.themoviedb.org/3/search/movie?',
    apiKey: 'api_key=bc32337b339c1e8a50ca13e7353af33e',
    language: '&language=it',
    films:[],
    languageFlags:['de','en','it','fr'],
})