import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

// import { TeamsReducer } from '../Teams/reducers'

export default function createStore (history) {
    return reduxCreateStore(
        combineReducers({
            // teams: TeamsReducer,
            router: connectRouter(history),
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}