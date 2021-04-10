import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { MenuReducer } from '../Menu/reducers';

export default function createStore (history) {
    return reduxCreateStore(
        combineReducers({
            manuVal: MenuReducer,
            router: connectRouter(history),
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}