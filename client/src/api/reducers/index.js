import { combineReducers } from "redux";
import { reducer as formReducer} from "redux-form";
import authvideoReducer from './authvideoReducer';
import vidusReducer from './vidusReducer';

/**
 * Combina reductores generando nuevos campos "key:value",
 * los cuales se usaran para  "mapStateToProps" de los distintos componentes
 */
export default combineReducers({
    authvideo: authvideoReducer,
    form: formReducer,
    viduss: vidusReducer,    
});
