import * as type from '../types';
// Action simply an object
// Here returned object is the action
// It could be directly an object without function if the payload is static value
// Basicly It'll get users and save them in the reducers
const usersAction = (users) => {
    return {
        type: type.GET_USERS, // Saga will catch this action type
        // type: type.GET_USERS_REQUESTED,
        // payload: users, // Cause Saga will finally dispatch an expected action
    }
}

export default usersAction;