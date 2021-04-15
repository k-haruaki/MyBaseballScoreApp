import { selectMenuAction } from './actions';
import { push } from 'connected-react-router';

export const getMenuData = (index, menuVal) => {
    return async (dispatch) => {
        dispatch(
            selectMenuAction({
                id: index,
                path: menuVal.pagePath,
                name: menuVal.pageName,
            })
        );

        dispatch(push('/' + menuVal.pagePath));

    }
}