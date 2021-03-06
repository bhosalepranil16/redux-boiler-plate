import { INCREMENT, DECREMENT, ASYNCINCREMENT, ASYNCDECREMENT } from '../actions/countAction';

const initialState = {
    count : 0
}

let newCount;

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT :
            newCount = state.count + 1;
            return {
                ...state,
                count : newCount
            }
        case DECREMENT :
            newCount = state.count - 1;
            return {
                ...state,
                count : newCount
            }
        case ASYNCINCREMENT :
            newCount = state.count + 1;
            return {
                ...state,
                count : newCount
            }
        case ASYNCDECREMENT :
            newCount = state.count - 1;
            return {
                ...state,
                count : newCount
            }

        default : 
            return state;
    }
}

export default reducer;
