import axios from 'axios';

/**
 * Crea base de datos de usuarios en la carpeta database.
 */
export default axios.create({
    baseURL:'http://localhost:3001'
});