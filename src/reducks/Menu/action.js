// メニューを選択した際のAction
export const SELECT_MENU = "SELECT_MENU"
export const selectMenuAction = (menuState) => {
    return {
        type: "SELECT_MENU",
        payload: {
            id: menuState.id,
            name: menuState.name,
        }
    }
}