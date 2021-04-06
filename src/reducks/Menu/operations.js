import { selectMenuAction } from './action';
import { push } from 'connected-react-router';

export const getMenuData = (index, menuName) => {
    return async (dispatch) => {
        dispatch(
            selectMenuAction({
                id: index,
                name: menuName,
            })
        );

        dispatch(push('/' + menuName));
        
    }
}