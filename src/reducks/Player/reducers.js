import * as Actions from './actions'
import initialState from '../store/initialState'

export const PlayerReducer = (state = initialState.playerData, action) => {
    console.log(state)
    console.log(action)
    console.log(action.payload)
    switch (action.type) {
        case Actions.SELECT_PLAYER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}