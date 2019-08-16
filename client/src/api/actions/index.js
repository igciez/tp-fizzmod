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
    SELECTED_VIDEO
} from "./types";

export let signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export let signOut = () => {
    return {
        type: SIGN_OUT
    };
};

// Ver las tablas de convenciones(en carpeta) de dbJson para crear las siguientes "const".
//async (dispatch, getState) --> getState, es el segundo argumento de Redux-Thunk para obtener datos.
export let createVidUs = formValues => async (dispatch, getState) => {
    let { userId } = getState().authvideo;
    let {currentUser}=getState().viduss;
    //let videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

    let response = await db.post('/vidus', { ...formValues, userId});
        //add selecetedVideo
    dispatch({
        type: CREATE_VIDUS,
        payload: response.data
    });
    console.log(currentUser);
    history.push(`/vidus/video/${currentUser}`);
}

export let fetchVidUss = () => async dispatch => {
    let response = await db.get('/vidus');

    dispatch({
        type: FETCH_VIDUSS,
        payload: response.data
    });
}

export let fetchVidUs = (id) => async dispatch => {
    let response = await db.get(`/vidus/${id}`);

    dispatch({
        type: FETCH_VIDUS,
        payload: response.data
    });
}

export let editVidUs = (id, formValues) => async dispatch => {
    //"patch", actualiza los valores que cambiaron sin modificar el resto, 
    //como si lo haria 'put'
    let response = await db.patch(`/vidus/${id}`, formValues);

    dispatch({
        type: EDIT_VIDUS,
        payload: response.data
    });
    history.push('/');
    //this.props.history.push('/');
}

export let deleteVidUs = (id) => async dispatch => {
    await db.delete(`/vidus/${id}`);

    dispatch({
        type: DELETE_VIDUS,
        payload: id
    });
    history.push('/');
    //this.props.history.push('/');
}
/**
 * 
 * @param {onTermSubmit} term -->fetchVideo !!TO-DO!!
 */
export let fetchVideos = (term) => async dispatch => {
    let response = await youtube.get('/search', { params: { q: term } });

    dispatch({
        type: FETCH_VIDEOS,
        payload: response.data
    })

}
/**
 * 
 */
export let selectingVideo = (e) => ({ type: SELECTED_VIDEO, payload: e});
