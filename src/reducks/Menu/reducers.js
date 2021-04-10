import * as Actions from './actions';
import initialState from '../store/initialState';

export const MenuReducer = (state = initialState.menuVal, action) => {
    console.log(state);
    console.log(action.payload)
    switch (action.type) {
        case Actions.SELECT_MENU:
            console.log("成功");
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}