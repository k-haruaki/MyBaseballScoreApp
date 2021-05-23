import { selectMenuAction } from './actions';
import { push } from 'connected-react-router';

export const selectMenu = (index, menuData) => {
    return async (dispatch) => {
        dispatch(
            selectMenuAction({
                id: index,
                path: menuData.pagePath,
                name: menuData.pageName,
            })
        );

        dispatch(push('/' + menuData.pagePath));

    }
}