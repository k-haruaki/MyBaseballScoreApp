import { createSelector } from 'reselect'

const playerSelector = (state) => state.playerData;

export const getUniformNumber = createSelector (
    [playerSelector],
    state => state.uniformNumber
)

export const getPlayerName = createSelector (
    [playerSelector],
    state => state.playerName
)

export const getPosition = createSelector (
    [playerSelector],
    state => state.position
)

export const getThrowStrikeHand = createSelector (
    [playerSelector],
    state => state.throwStrikeHand
)

export const getBaseballHistory = createSelector (
    [playerSelector],
    state => state.baseballHistory
)

export const getComment = createSelector (
    [playerSelector],
    state => state.comment
)