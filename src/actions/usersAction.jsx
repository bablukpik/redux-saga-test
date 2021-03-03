import * as type from '../types';
// Action simply an object
// Here returned object is the action
// It could be directly an object without function if the payload is static value
// Basicly It'll get users and save them in the reducers
const usersAction = (users) => {
    return {
        type: type.GET_USERS,
        payload: users,
    }
}

export default usersAction;