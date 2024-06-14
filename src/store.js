import {reactive} from 'vue';

export const store = reactive ({
    filmUrl: 'https://api.themoviedb.org/3/search/movie?',
    seriesUrl: 'https://api.themoviedb.org/3/search/tv?',
    apiKey: 'api_key=bc32337b339c1e8a50ca13e7353af33e',
    language: '&language=it',
    films:[],
    series:[],
    languageFlags:['de','en','it','fr'],
})