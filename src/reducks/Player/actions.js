// 選手を選択した際のAction
export const SELECT_PLAYER = "SELECT_PLAYER"
export const selectPlayerAction = (playerState) => {
    return {
        type: "SELECT_PLAYER",
        payload: {
            uniformNumber: playerState.uniformNumber,
            playerName: playerState.playerName,
            position: playerState.position,
            throwStrikeHand: playerState.throwStrikeHand,
            baseballHistory: playerState.baseballHistory,
            comment: playerState.comment,
        }
    }
}