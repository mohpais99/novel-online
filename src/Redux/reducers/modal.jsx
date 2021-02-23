const initialState = {
    status: false
}

function ModalReducer(state=initialState, action) {
    switch (action.type) {
        case "MODAL_SHOW":
            return {
                ...state,
                status: action.payload
            }
        case "MODAL_CLOSE":
            return {
                status: action.payload
            }
        default:
            return state;
    }
}

export default ModalReducer;