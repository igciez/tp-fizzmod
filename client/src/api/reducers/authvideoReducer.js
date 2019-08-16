import {
    SIGN_IN,
    SIGN_OUT,
    FETCH_VIDEOS,
    SELECTED_VIDEO
} from "../actions/types";

let estadoInicial = {
    isSignedIn: null,
    userId: null,
    videos: [],
    selectedVideo: null
}

let authvideoReducer = (estado = estadoInicial, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...estado, isSignedIn: true, userId: action.payload };
        case SIGN_OUT:
            return { ...estado, isSignedIn: false, userId: null };
        case FETCH_VIDEOS:
            return { ...estado, videos: action.payload.items, selectedVideo: action.payload.items[0] };
        case SELECTED_VIDEO:
            return { ...estado, selectedVideo: action.payload }
        default:
            return estado;
    }
}

export default authvideoReducer;