import { ADD_COUNTER, SUBTRACT_COUNTER, MULTIPLY_COUNTER, DIVIDE_COUNTER, SQRT_COUNTER, POW_COUNTER } from "../actionTypes/actionTypes";

const addCounter = (value) => {
    return {
        type: ADD_COUNTER,
        payload: value
    };
};

const subtractCounter = (value) => {
    return {
        type: SUBTRACT_COUNTER,
        payload: value
    };
}

const multiplyCounter = (value) => {
    return {
        type: MULTIPLY_COUNTER,
        payload: value
    };
}

const divideCounter = (value) => {
    return {
        type: DIVIDE_COUNTER,
        payload: value
    };
}

const sqrtCounter = () => {
    return {
        type: SQRT_COUNTER
    };
}

const powCounter = (value) => {
    return {
        type: POW_COUNTER,
        payload: value
    };
}
export { addCounter, subtractCounter, multiplyCounter, divideCounter, sqrtCounter, powCounter};