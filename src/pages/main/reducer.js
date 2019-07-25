import { combineReducers } from 'redux-immutable';
// import panel from '../panel';
import { connectRouter } from 'connected-react-router/immutable';

export default (history) => combineReducers({
    router: connectRouter(history),
    //[panel.NAME] : panel.reducer
})