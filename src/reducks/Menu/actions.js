// メニューを選択した際のAction
export const SELECT_MENU = "SELECT_MENU"
export const selectMenuAction = (menuState) => {
    console.log(menuState)
    return {
        type: "SELECT_MENU",
        payload: {
            id: menuState.id,
            path: menuState.path,
            name: menuState.name,
        }
    }
}