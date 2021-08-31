import { combineReducers } from 'redux';
import socketReducer from './socketReducer';
import InicioPage from '../Pages/InicioPage';
const reducers = combineReducers({
    socketReducer,
    ...InicioPage.Reducer,
});

export default (state, action) => {
    switch (action.type) {
        case 'USUARIO_LOGOUT':
            state = undefined;
            break;
        default:
            break;
    }
    return reducers(state, action);
}