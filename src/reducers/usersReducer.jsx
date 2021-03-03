import * as type from '../types';
// reducer simply a general function
// define an initial state (define an action)
const initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export default usersReducer;