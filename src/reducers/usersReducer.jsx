import * as type from '../types';
// reducer simply a general function
// define an initial state (define an action)
const initialState = {
    users: [],
    loading: false,
    error: null,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.users
            }
        case type.GET_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state
    }
}

export default usersReducer;
