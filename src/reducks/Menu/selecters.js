import { createSelector } from 'reselect';

const menuSelector = (state) => state.menuValue;

export const getMenuId = createSelector (
    [menuSelector],
    state => state.id
)

export const getMenuPath = createSelector (
    [menuSelector],
    state => state.path
)

export const getMenuName = createSelector (
    [menuSelector],
    state => state.name
)