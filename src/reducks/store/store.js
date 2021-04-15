import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { MenuReducer } from '../Menu/reducers';
import { PlayerReducer } from '../Player/reducers';

export default function createStore (history) {
    return reduxCreateStore(
        combineReducers({
            manuVal: MenuReducer,
            playerData: PlayerReducer,
            router: connectRouter(history),
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}