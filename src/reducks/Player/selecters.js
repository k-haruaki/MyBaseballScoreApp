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

export const getHeight = createSelector (
    [playerSelector],
    state => state.height
)

export const getBodyWeight = createSelector (
    [playerSelector],
    state => state.bodyWeight
)

export const getThrowHand = createSelector (
    [playerSelector],
    state => state.throwHand
)

export const getStrikeHand = createSelector (
    [playerSelector],
    state => state.strikeHand
)