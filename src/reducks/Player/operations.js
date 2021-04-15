import { selectPlayerAction } from './actions'

export const selectPlayer = (playerData) => {
    return async (dispatch) => {
        console.log(playerData)
        dispatch(
            selectPlayerAction({
                uniformNumber: playerData.uniformNumber,
                playerName: playerData.playerName,
                height: playerData.height,
                bodyWeight: playerData.bodyWeight,
                throwHand: playerData.throwHand,
                strikeHand: playerData.strikeHand,
            })
        );
    }
}