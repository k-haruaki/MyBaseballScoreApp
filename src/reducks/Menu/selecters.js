import { createSelector } from 'reselect';

const menuSelector = (state) => state.menu;

export const getMenuId = createSelector (
    [menuSelector],
    state => state.id
)

export const getMenuName = createSelector (
    [menuSelector],
    state => state.name
)