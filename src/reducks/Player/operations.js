import { selectPlayerAction } from './actions'

export const selectPlayer = (playerData) => {
    return async (dispatch) => {
        dispatch(
            selectPlayerAction({
                uniformNumber: playerData.uniformNumber,
                playerName: playerData.playerName,
                position: playerData.position,
                throwStrikeHand: playerData.throwStrikeHand,
                baseballHistory: playerData.baseballHistory,
                comment: playerData.comment,
            })
        );
    }
}
