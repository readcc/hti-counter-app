import { ADD_COUNTER, SUBTRACT_COUNTER, MULTIPLY_COUNTER, DIVIDE_COUNTER } from "../actionTypes/actionTypes";

const initialState = {
    counter: 3,
    status: "idle"
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.payload,
                status: "Added " + action.payload + " to counter"
            };
        case SUBTRACT_COUNTER:
            return {
                ...state,
                counter: state.counter - action.payload,
                status: "Subtracted " + action.payload + " from counter"
            };
        case MULTIPLY_COUNTER:
            return {
                ...state,
                counter: state.counter * action.payload,
                status: "Multiplied counter by " + action.payload
            };
        case DIVIDE_COUNTER:
            if (action.payload !== 0) {
                return {
                    ...state,
                    counter: state.counter / action.payload,
                    status: "Divided counter by " + action.payload
                };
            }else{
                return {
                    ...state,
                    status: "Cannot divide by zero"
                };
            };
        default:
            return state;
    }
}