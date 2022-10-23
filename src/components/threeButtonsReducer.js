export const INITIAL_STATE = {
    btnA: true,
    btnB: true,
    btnC: true
};

export const threeButtonsReducer = (state, action) => {
    switch(action.type){

        case "btnA":
            return{
                ...state,
                btnA: !state.btnA
            }

        case "btnB":
            return{
                ...state,
                btnB: !state.btnB
            }

        case "btnC":
            return{
                ...state,
                btnC: !state.btnC
            }

        default:
            return state;
    }
};