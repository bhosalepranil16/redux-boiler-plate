export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ASYNCINCREMENT = 'ASYNCINCREMENT';
export const ASYNCDECREMENT = 'ASYNCDECREMENT';

export const increment = () => {
    return {
        type : INCREMENT
    }
}

export const decrement = () => {
    return {
        type : DECREMENT
    }
}

const asyncIncrementFunction = () => {
    return {
        type : ASYNCINCREMENT
    }
}

export const asyncIncrement = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(asyncIncrementFunction())
        }, 2000);
    }
}

const asyncDecrementFunction= () => {
    return {
        type : ASYNCDECREMENT
    }
}

export const asyncDecrement = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(asyncDecrementFunction())
        }, 2000);
    }
}