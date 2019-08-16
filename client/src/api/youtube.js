import axios from 'axios';

const KEY='AIzaSyAeTnEbvCHOkaPlOjW0kSbi4fDpwjf8Ed8';

/**
 * Coneccion con youtube
 */
export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key:KEY
    }
});