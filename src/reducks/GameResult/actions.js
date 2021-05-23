// 使わない可能性あり
// 後で消すか




// 試合の詳細を選択した際のAction
export const SELECT_GAME = "SELECT_GAME"
export const selectGameAction = (gameState) => {
    return {
        type: "SELECT_GAME",
        payload: {
            date: gameState.date,
            firstAttack: gameState.firstAttack,
            secondAttack: gameState.secondAttack,
        }
    }
}