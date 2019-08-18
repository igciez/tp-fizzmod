import db from '../db';
import youtube from '../youtube';
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_VIDUS,
    FETCH_VIDUSS,
    FETCH_VIDUS,
    DELETE_VIDUS,
    EDIT_VIDUS,
    FETCH_VIDEOS,
    SELECTED_VIDEO,
} from "./types";

/**
 * Funcion que obtinen el userId
 * @param {*Id de usario registrado en cuenta de google} userId 
 */
export let signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

/**
 * Funcion que notifica que el usuario termino la sesion.
 */
export let signOut = () => {
    return {
        type: SIGN_OUT
    };
};

/**
 * Funcion que obtiene del estado el usuario que se encuentra registrado
 * y junto con formValues se crea un objeto en la base de datos.
 * Luego se redirige para seleccionar el video. 
 * @param {*valores del formulario a agregar a la base de datos} formValues 
 */
export let createVidUs = formValues => async (dispatch, getState) => {
    let { userId } = getState().authvideo;
    let {currentUser}=getState().viduss;
    let response = await db.post('/vidus', { ...formValues, userId});

    dispatch({
        type: CREATE_VIDUS,
        payload: response.data
    });
    
    history.push(`/vidus/video/${currentUser}`);
}
/**
 * buscar todos los vidus en la base de datos
 */
export let fetchVidUss = () => async dispatch => {
    let response = await db.get('/vidus');

    dispatch({
        type: FETCH_VIDUSS,
        payload: response.data
    });
}
/**
 * Busca en base de datos, un solo vidus
 * @param {*vidus a editar} id 
 */
export let fetchVidUs = (id) => async dispatch => {
    let response = await db.get(`/vidus/${id}`);

    dispatch({
        type: FETCH_VIDUS,
        payload: response.data
    });
}

/**
 * Funcion que edita los valores de la base de datos, en base al id
 * y luego redirige a la pagina principal.
 * @param {*viuds a editar} id 
 * @param {*valores del formulario a agregar a la base de datos} formValues 
 */
export let editVidUs = (id, formValues) => async dispatch => {
    let response = await db.patch(`/vidus/${id}`, formValues);

    dispatch({
        type: EDIT_VIDUS,
        payload: response.data
    });
    history.push('/');
}

/**
 * Funcion que borra un vidus
 * @param {id a borrar} id 
 */
export let deleteVidUs = (id) => async dispatch => {
    await db.delete(`/vidus/${id}`);

    dispatch({
        type: DELETE_VIDUS,
        payload: id
    });
    history.push('/');
}
/**
 * 
 * @param {busca en base a "term" en youtube} term 
 */
export let fetchVideos = (term) => async dispatch => {
    let response = await youtube.get('/search', { params: { q: term } });

    dispatch({
        type: FETCH_VIDEOS,
        payload: response.data
    })

}

/**
 * Devuelve el video de youtube seleccionado
 * @param {*objeto seleccionado} e 
 */
export let selectingVideo = (e) => ({type: SELECTED_VIDEO, payload: e});

    
