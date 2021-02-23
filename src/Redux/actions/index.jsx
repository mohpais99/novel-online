export const modalOn = (payload) => {
    return (dispatch) => {
        return dispatch({type: "MODAL_SHOW", payload: payload})
    }
}
