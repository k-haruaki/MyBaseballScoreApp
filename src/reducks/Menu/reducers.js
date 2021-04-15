import * as Actions from './actions';
import initialState from '../store/initialState';

export const MenuReducer = (state = initialState.menuVal, action) => {
    switch (action.type) {
        case Actions.SELECT_MENU:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}